import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Footer from './components/footer';
import Homepage from './components/homepage';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
