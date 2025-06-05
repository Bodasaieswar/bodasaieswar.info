import { vi, describe, it, expect, beforeEach } from 'vitest';

var mockSend: any;
var mockGetSignedUrl: any;

vi.mock('@aws-sdk/client-s3', () => {
  mockSend = vi.fn();
  return {
    S3Client: vi.fn().mockImplementation(() => ({ send: mockSend })),
    ListObjectsV2Command: vi.fn(),
    GetObjectCommand: vi.fn(),
  };
});

vi.mock('@aws-sdk/s3-request-presigner', () => {
  mockGetSignedUrl = vi.fn();
  return { getSignedUrl: mockGetSignedUrl };
});

import { fetchImagesFromS3 } from '../src/services/s3Services';

beforeEach(() => {
  vi.clearAllMocks();
});

describe('fetchImagesFromS3', () => {
  it('returns signed image urls when S3 responds with objects', async () => {
    mockSend.mockResolvedValueOnce({
      Contents: [{ Key: 'img1.jpg' }, { Key: 'img2.jpg' }],
    });
    mockGetSignedUrl
      .mockResolvedValueOnce('signed-url-1')
      .mockResolvedValueOnce('signed-url-2');

    const images = await fetchImagesFromS3('bucket');

    expect(images).toEqual([
      { url: 'signed-url-1', key: 'img1.jpg' },
      { url: 'signed-url-2', key: 'img2.jpg' },
    ]);
    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(mockGetSignedUrl).toHaveBeenCalledTimes(2);
  });

  it('returns empty array when S3 has no objects', async () => {
    mockSend.mockResolvedValueOnce({ Contents: [] });
    const images = await fetchImagesFromS3('bucket');
    expect(images).toEqual([]);
  });

  it('returns empty array when an error occurs', async () => {
    mockSend.mockRejectedValueOnce(new Error('failure'));
    const images = await fetchImagesFromS3('bucket');
    expect(images).toEqual([]);
  });
});
