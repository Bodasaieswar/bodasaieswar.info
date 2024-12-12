export default function Loading() {
	return (
		<div className="flex justify-center items-center h-64">
			<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
			<p className="text-gray-600 text-lg ml-4">Loading....</p>
		</div>
	);
}
