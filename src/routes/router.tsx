import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Loading from '../components/loading';
import Root from './root';

const Homepage = React.lazy(() => import('../components/homepage'));
const Photos = React.lazy(() => import('../components/photos'));
const ErrorPage = React.lazy(() => import('./error-page'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: (
			<Suspense fallback={<Loading />}>
				<ErrorPage />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loading />}>
						<Homepage />
					</Suspense>
				),
			},
			{
				path: '/photos',
				element: (
					<Suspense fallback={<Loading />}>
						<Photos />
					</Suspense>
				),
				errorElement: (
					<Suspense fallback={<Loading />}>
						<ErrorPage />
					</Suspense>
				),
			},
			{
				path: '*',
				element: (
					<Suspense fallback={<Loading />}>
						<ErrorPage />
					</Suspense>
				),
			},
		],
	},
]);

export default router;
