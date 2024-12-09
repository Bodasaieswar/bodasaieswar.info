import { fetchImagesFromS3 } from "../services/s3Services";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Image } from "../types/image";

const bucketName = "bodasaieswar";


// Hook to fetch images from S3
export const useFetchImages = (): UseQueryResult<Image[], Error> => {
  return useQuery<Image[], Error>({
    queryKey: ["images"],
    queryFn: () => fetchImagesFromS3(bucketName),
    staleTime: Infinity, // Cache the data indefinitely
  });
};
