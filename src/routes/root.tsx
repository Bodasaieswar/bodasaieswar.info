import { Outlet } from 'react-router';
import Footer from '../components/footer';

export default function Root() {
	return (
		<div>
			<nav className="flex justify-center mb-8">
				<a
					href="#about"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-gray-900 text-2xl font-extrabold italic hover:text-black-600 px-3"
				>
					About me
				</a>
				<a
					href="https://www.linkedin.com/in/bodasaieswar/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-gray-900 text-2xl font-extrabold italic px-3"
				>
					Family
				</a>
				<a
					href="http://bodasaieswar.info/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-gray-900 text-2xl font-extrabold italic px-3"
				>
					Photo
				</a>
			</nav>
			<Outlet />
			<Footer />
		</div>
	);
}
