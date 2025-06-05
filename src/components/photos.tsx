import { useState } from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
// Loading indicator component
import Loading from './loading';

export default function Photos() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const { data: images = [], isLoading, isError, error } = useFetchImages();

	return (
		<div className="py-8 px-4">
			<h1 className="text-4xl font-bold text-center mb-6">
				Photo Gallery
			</h1>
			<p className="text-center text-gray-600 mb-12">
				Welcome to my photo gallery! Photography has become a new
				passion of mine, and I'm excited to share some of the moments
				I've captured. Click on any photo to view it in full resolution
				and enjoy the stories they tell.
			</p>

                        {isLoading && <Loading />}

			{isError && (
				<div className="flex flex-col items-center justify-center h-64 text-center">
					<p className="text-red-600 text-xl font-semibold mb-4">
						Error loading images
					</p>
					<p className="text-gray-600">
						{error?.message ||
							'Something went wrong. Please try again later.'}
					</p>
				</div>
			)}

			{!isLoading && !isError && images.length === 0 && (
				<div className="flex justify-center items-center h-64 text-center">
					<p className="text-gray-600 text-lg">
						No images found. Please check back later.
					</p>
				</div>
			)}

			{!isLoading && !isError && images.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{images.map((image: { url: string }, index: number) => (
						<div
							key={index}
							className="mb-4 flex items-center justify-center"
							onClick={() => setSelectedImage(image.url)}
						>
							{/* Centered Image */}
							<img
								src={image.url}
								alt={`Photo ${index + 1}`}
								className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
							/>
						</div>
					))}
				</div>
			)}

			{selectedImage && (
				<div
					className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
					onClick={() => setSelectedImage(null)}
				>
					<div className="relative">
						<img
							src={selectedImage}
							alt="Selected"
							className="w-auto h-auto max-h-[90vh] max-w-[90vw] rounded-lg border border-gray-300 shadow-lg"
						/>
						<button
							className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
							onClick={(e) => {
								e.stopPropagation();
								setSelectedImage(null);
							}}
						>
							✕
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
