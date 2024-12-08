const Footer = () => {
	return (
		<footer className="mt-6 text-center">
			<div className="flex justify-center space-x-4 mb-4">
				<a
					href="https://github.com/Bodasaieswar"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-gray-900 text-lg font-extrabold hover: text-black-600"
				>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/bodasaieswar/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-gray-900 text-lg font-extrabold"
				>
					LinkedIn
				</a>
				<a
					href="http://bodasaieswar.info/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-gray-900 text-lg font-extrabold"
				>
					Portfolio
				</a>
			</div>
			<p className="text-gray-900 text-lg font-extrabold">
				&copy; 2024 Sai Eswar Boda. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
