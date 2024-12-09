import { useRouteError } from 'react-router-dom';

function ErrorPage() {
	const error = useRouteError() as { statusText?: string; message?: string };

	return (
		<div>
			<div className="flex flex-col items-center justify-center">
				<div className="relative">
					<svg
						className="w-64 h-64"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M10.29 3.86L1.82 12.34c-.25.25-.25.66 0 .91l8.47 8.47c.25.25.66.25.91 0l8.47-8.47c.25-.25.25-.66 0-.91L11.2 3.86c-.25-.25-.66-.25-.91 0z"></path>
						<line
							x1="10.5"
							y1="9"
							x2="10.5"
							y2="13"
						></line>
						<line
							x1="10.5"
							y1="17"
							x2="10.5"
							y2="17"
						></line>
					</svg>
				</div>
				<h1 className="mt-4 text-5xl font-extrabold text-red-600">
					Oops!
				</h1>
				<p className="mt-2 text-lg text-gray-700">
					We’re sorry, something went wrong.
				</p>
				{error && (
					<div className="mt-4 bg-white shadow-lg rounded-lg p-4 border border-red-200">
						<strong className="text-red-600">Error Details:</strong>
						<pre className="mt-2 text-gray-600">
							{error.statusText || (error as any).message}
						</pre>
					</div>
				)}
			</div>
		</div>
	);
}

export default ErrorPage;
