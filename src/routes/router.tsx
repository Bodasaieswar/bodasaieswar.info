import { createBrowserRouter } from 'react-router';
import Photos from '../components/photos';
import Homepage from '../components/homepage';
import ErrorPage from './error-page';
import Root from './root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: '/photos',
				element: <Photos />,
				errorElement: <ErrorPage />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			}
		],
	},
]);

export default router;
