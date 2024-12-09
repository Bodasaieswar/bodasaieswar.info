import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { Image } from "../types/image";

// Initialize S3 client
const REGION = import.meta.env.VITE_AWS_REGION || "us-east-2";

const s3 = new S3Client({
    region: REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || "",
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || ""
    },
  });

// Define the function to fetch images from S3
export const fetchImagesFromS3 = async (bucketName: string): Promise<Image[]> => {
  try {
    // List objects in the bucket
    const listCommand = new ListObjectsV2Command({ Bucket: bucketName });
    const data = await s3.send(listCommand);

    if (!data.Contents || data.Contents.length === 0) {
      return [];
    }
    // Generate signed URLs for the objects
    const imageUrls = await Promise.all(
      data.Contents.map(async (image) => {
        if (!image.Key) {
          return null;
        }

        const getCommand = new GetObjectCommand({
          Bucket: bucketName,
          Key: image.Key,
        });

        const signedUrl = await getSignedUrl(s3, getCommand, { expiresIn: 3600 }); // URL valid for 1 hour


        return {
          url: signedUrl,
          key: image.Key,
        };
      })
    ).then(results => results.filter((image): image is Image => image !== null));

    return imageUrls;
  } catch (error) {
    return [];
  }
};
