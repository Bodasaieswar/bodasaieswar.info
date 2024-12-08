import { createBrowserRouter } from 'react-router';
import Photos from '../components/photos'; // Adjust the path as necessary
import Homepage from '../components/homepage';
import ErrorPage from './error-page';
import About from '../components/about';
import Contact from '../components/contact';
import Root from './root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: '/about',
				element: <About />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/contact',
				element: <Contact />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/photos',
				element: <Photos />,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

export default router;
