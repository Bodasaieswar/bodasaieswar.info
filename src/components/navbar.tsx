import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="flex justify-center my-10">
			<Link to="/" className="text-gray-300 hover:text-gray-900 text-2xl font-extrabold italic hover:text-black-600 px-3">Home</Link>
			<Link to="/photos" className="text-gray-300 hover:text-gray-900 text-2xl font-extrabold italic hover:text-black-600 px-3">Photos</Link>
		</nav>
	);
}
