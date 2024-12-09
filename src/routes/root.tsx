import { Outlet } from 'react-router';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Root() {
	return (
		<div>
			<Navbar />
			<div className="bg-white text-black font-sans leading-relaxed">
				<div
					className="max-w-3xl mx-auto p-8"
				>
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
}
