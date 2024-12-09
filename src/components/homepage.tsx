const Homepage = () => {
	return (
		<>
			<header className="text-center mb-12">
				<h1 className="text-5xl font-extrabold mb-4 text-gray-800">
					Hello, I'm Sai Eswar
				</h1>
				<p className="text-2xl font-semibold text-gray-700 mb-4">
					Software Engineer & Entrepreneur
				</p>
				<p className="text-lg text-gray-600">
					I welcome
					<code className="bg-gray-500 text-white px-2 mx-2 py-1 rounded-md">
						&lt;p&gt; new challenges &lt;/p&gt;
					</code>
					<span className="px-1">as they keep me motivated.</span>
				</p>
			</header>

			<div className="flex items-center justify-center h-80">
				<div>
					<img
						src="SaiEswar.png"
						alt="Sai Eswar Boda Image"
						className="rounded-full border-4 border-gray-300 shadow-lg w-56 h-56"
					/>
				</div>
			</div>

			<section className="mb-12">
				<h2 className="text-3xl font-bold mb-6">About</h2>
				<p className="text-gray-700 leading-relaxed">
					I'm a passionate and dedicated professional aiming to
					push the boundaries of technology, blending technical
					expertise with a humorous touch. With a Master of
					Science in Information Technology from the University of
					Cincinnati under my belt, I use my superpowers to create
					awesome web applications. My work includes developing
					efficient, scalable distribution systems and innovative
					solutions in the web development space that make life
					easier (think less work, more play). When I'm not
					battling bugs and wrangling APIs, you'll find me
					spending quality time with my family and geeking out
					over the latest tech trends. Need a tech solution or
					just want to chat about the latest viral cat video?
					<a
						className="text-blue-300 font-bold text-lg hover:underline hover:text-blue-600"
						href="https://www.instagram.com/eswarcareless/"
						target="_blank"
					>
						Hit me up!
					</a>
				</p>
			</section>

			<section className="mb-12">
				<h2 className="text-3xl font-bold mb-6">Work Experience</h2>
				<div className="space-y-6">
					<div className="border-l-4 border-green-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-green-500 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
							</svg>
							<h3 className="font-semibold text-xl">
								University of Arizona
							</h3>
						</div>
						<p className="text-base font-medium text-gray-900">
							Solutions Developer | May 2023 - Present
						</p>
						<ul className="list-disc list-inside text-gray-700 mt-2">
							<li>
								Developing and maintaining full-stack web
								applications for the College of Medicine,
								University of Arizona.
							</li>
							<li>
								Optimizing workflows and automating data
								processes for various Power BI dashboards,
								enabling the College of Medicine to make
								informed strategic decisions.
							</li>
						</ul>
					</div>

					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-blue-500 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
							</svg>
							<h3 className="font-semibold text-xl">
								Anthem Inc. (Elevance Health)
							</h3>
						</div>
						<p className="text-base font-medium text-gray-900">
							Senior Software Engineer(L6) | August 2019 - January
							2022
						</p>
						<ul className="list-disc list-inside text-gray-700 mt-2">
							<li>
								Designed and implemented{' '}
								<span className="font-bold text-gray-800">
									10+
								</span>{' '}
								Short Service Change Request (SSCR)
								projects, each averaging{' '}
								<span className="font-bold text-gray-800">
									600+ hours
								</span>{' '}
								for design, development, testing, and
								implementation. Provided solutions by
								analyzing legacy system specifications,
								standards, and programming to address
								complex business challenges.
							</li>
							<li>
								Initiated, proposed, and implemented
								innovative system improvements and
								optimizations, achieving monthly savings of{' '}
								<span className="font-bold text-gray-800">
									$5K+
								</span>
								. Received an{' '}
								<span className="font-bold text-gray-800">
									IMPACT award
								</span>{' '}
								for improving the auto adjudication rate by{' '}
								<span className="font-bold text-gray-800">
									8%
								</span>
								, saving{' '}
								<span className="font-bold text-gray-800">
									$2M
								</span>
								annually for Anthem, Inc.
							</li>
							<li>
								Collaborated with vendors, stakeholders,
								product owners, business analysts, peers,
								and cross-functional teams to conduct root
								cause analyses, enhance software development
								processes, and automate tasks using
								innovative tools.
							</li>
							<li>
								Conducted comprehensive business and
								technical knowledge transfer training
								sessions for associates and new employees,
								ensuring seamless onboarding and skill
								development.
							</li>
						</ul>
					</div>

					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-blue-500 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
							</svg>
							<h3 className="font-semibold text-xl">
								DXC Technology
							</h3>
						</div>
						<p className="text-base font-medium text-gray-900">
							Software Engineer | August 2018 - August 2019
						</p>
						<ul className="list-disc list-inside text-gray-700 mt-2">
							<li>
								Acted as a key member of agile teams,
								developing and executing{' '}
								<span className="font-bold text-gray-800">
									40+
								</span>{' '}
								user stories, accelerating the launch of{' '}
								<span className="font-bold text-gray-800">
									3 products
								</span>
								.
							</li>
							<li>
								Automated operational and developer tasks
								using Python, Perl, and Bash scripts,
								reducing manual workload by{' '}
								<span className="font-bold text-gray-800">
									20%
								</span>{' '}
								and significantly enhancing team
								productivity.
							</li>
							<li>
								Developed and maintained data management
								systems and data warehouses, conducting
								analyses that informed strategic decisions
								and supported data-driven insights for
								business growth.
							</li>
						</ul>
					</div>
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-blue-500 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
							</svg>
							<h3 className="font-semibold text-xl">
								NTT DATA
							</h3>
						</div>
						<p className="text-base font-medium text-gray-900">
							Intern — Application Developer | October 2016 —
							August 2018
						</p>
						<ul className="list-disc list-inside text-gray-700 mt-2">
							<li>
								Collaborated in a waterfall SDLC to design,
								develop, and implement{' '}
								<span className="font-bold text-gray-800">
									10+
								</span>{' '}
								enhancement projects, each with an average
								effort of{' '}
								<span className="font-bold text-gray-800">
									200+ hours
								</span>
								.
							</li>
							<li>
								Resolved{' '}
								<span className="font-bold text-gray-800">
									600+
								</span>{' '}
								incidents reported by agents, addressing
								product and software troubleshooting
								effectively.
							</li>
							<li>
								Actively engaged in corporate social
								responsibility initiatives, contributing to
								community development and organizational
								values.
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-3xl font-bold mb-6">Education</h2>
				<div className="space-y-6">
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-blue-500 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
								<path d="M11 12.5v9.5h2v-9.5l-1-.45-1 .45z" />
							</svg>
							<h3 className="font-semibold text-xl">
								University of Cincinnati
							</h3>
						</div>
						<p className="text-base font-medium text-gray-900">
							Master of Science in Information Technology
						</p>
						<p className="text-sm text-gray-500">2022 - 2023</p>
					</div>
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-blue-500 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
								<path d="M11 12.5v9.5h2v-9.5l-1-.45-1 .45z" />
							</svg>
							<h3 className="font-semibold text-xl">
								International Institute of Information
								Technology, Bangalore
							</h3>
						</div>
						<p className="text-base font-medium text-gray-900">
							Post Graduate Certificate in Data Science
						</p>
						<p className="text-sm text-gray-500">2020 - 2021</p>
					</div>
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-blue-500 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
								<path d="M11 12.5v9.5h2v-9.5l-1-.45-1 .45z" />
							</svg>
							<h3 className="font-semibold text-xl">
								Jawaharlal Nehru Technological University
							</h3>
						</div>
						<p className="text-base font-medium text-gray-900">
							Bachelor of Technology in Electronics
							Engineering
						</p>
						<p className="text-sm text-gray-500">2012 - 2016</p>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-3xl font-bold mb-6">Skills</h2>
				<div className="flex flex-wrap gap-2">
					<span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
						Python
					</span>
					<span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
						Java
					</span>
					<span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
						JavaScript
					</span>
					<span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
						TypeScript
					</span>
					<span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
						SQL
					</span>

					<span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
						React
					</span>
					<span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
						Next.js
					</span>
					<span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
						Node.js
					</span>
					<span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
						Express
					</span>

					<span className="bg-blue-200 text-blue-900 text-sm font-medium px-3 py-1 rounded-full">
						MongoDB
					</span>
					<span className="bg-green-200 text-green-900 text-sm font-medium px-3 py-1 rounded-full">
						SQL Server
					</span>
					<span className="bg-purple-200 text-purple-900 text-sm font-medium px-3 py-1 rounded-full">
						MySQL
					</span>
					<span className="bg-yellow-200 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">
						Snowflake
					</span>
					<span className="bg-gray-200 text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
						Azure Cosmos DB
					</span>

					<span className="bg-indigo-200 text-indigo-900 text-sm font-medium px-3 py-1 rounded-full">
						AWS
					</span>
					<span className="bg-teal-200 text-teal-900 text-sm font-medium px-3 py-1 rounded-full">
						Azure
					</span>
					<span className="bg-pink-200 text-pink-900 text-sm font-medium px-3 py-1 rounded-full">
						Docker
					</span>
					<span className="bg-red-200 text-red-900 text-sm font-medium px-3 py-1 rounded-full">
						Kubernetes
					</span>

					<span className="bg-orange-200 text-orange-900 text-sm font-medium px-3 py-1 rounded-full">
						REST APIs
					</span>
					<span className="bg-blue-300 text-blue-900 text-sm font-medium px-3 py-1 rounded-full">
						Drupal
					</span>
					<span className="bg-green-300 text-green-900 text-sm font-medium px-3 py-1 rounded-full">
						Tailwind CSS
					</span>
					<span className="bg-purple-300 text-purple-900 text-sm font-medium px-3 py-1 rounded-full">
						OpenAI API
					</span>
					<span className="bg-yellow-300 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">
						Jira
					</span>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-3xl font-bold mb-6">Open Source</h2>
				<div className="space-y-6">
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-black mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.578 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.74 3.633 16.74c-1.087-.744.084-.73.084-.73 1.202.085 1.834 1.234 1.834 1.234 1.07 1.835 2.807 1.305 3.492.998.108-.774.42-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.47-2.382 1.235-3.222-.124-.303-.535-1.523.116-3.176 0 0 1.007-.323 3.3 1.231.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.005.403 2.29-1.554 3.297-1.231 3.297-1.231.653 1.653.242 2.873.118 3.176.768.84 1.234 1.912 1.234 3.222 0 4.609-2.806 5.625-5.476 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.801.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
							</svg>
							<h3 className="font-semibold text-xl">
								BioPython
							</h3>
						</div>
						<p className="text-base text-gray-600">
							Contributed to BioPython, a biological
							computation tool with over{' '}
							<span className="font-bold text-gray-800">
								13,000 users
							</span>
							, collaborating with an international team to
							enhance functionalities.
						</p>
					</div>
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-black mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.578 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.74 3.633 16.74c-1.087-.744.084-.73.084-.73 1.202.085 1.834 1.234 1.834 1.234 1.07 1.835 2.807 1.305 3.492.998.108-.774.42-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.47-2.382 1.235-3.222-.124-.303-.535-1.523.116-3.176 0 0 1.007-.323 3.3 1.231.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.005.403 2.29-1.554 3.297-1.231 3.297-1.231.653 1.653.242 2.873.118 3.176.768.84 1.234 1.912 1.234 3.222 0 4.609-2.806 5.625-5.476 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.801.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
							</svg>
							<h3 className="font-semibold text-xl">
								Emoji and Academic Language
							</h3>
						</div>
						<p className="text-base text-gray-600">
							Authored a research paper exploring the impact
							of emojis on academic language through
							interviews, machine learning models, and
							statistical analyses.
						</p>
					</div>
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-black mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.578 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.74 3.633 16.74c-1.087-.744.084-.73.084-.73 1.202.085 1.834 1.234 1.834 1.234 1.07 1.835 2.807 1.305 3.492.998.108-.774.42-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.47-2.382 1.235-3.222-.124-.303-.535-1.523.116-3.176 0 0 1.007-.323 3.3 1.231.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.005.403 2.29-1.554 3.297-1.231 3.297-1.231.653 1.653.242 2.873.118 3.176.768.84 1.234 1.912 1.234 3.222 0 4.609-2.806 5.625-5.476 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.801.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
							</svg>
							<h3 className="font-semibold text-xl">
								Fatal Police Encounters Analysis
							</h3>
						</div>
						<p className="text-base text-gray-600">
							Analyzed the impact of demographic factors on
							fatal police encounters using Python libraries
							such as{' '}
							<span className="font-bold text-gray-800">
								NumPy
							</span>
							,{' '}
							<span className="font-bold text-gray-800">
								matplotlib
							</span>
							, and
							<span className="font-bold text-gray-800">
								pandas
							</span>
							, delivering actionable data-driven insights.
						</p>
					</div>
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-black mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.578 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.74 3.633 16.74c-1.087-.744.084-.73.084-.73 1.202.085 1.834 1.234 1.834 1.234 1.07 1.835 2.807 1.305 3.492.998.108-.774.42-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.47-2.382 1.235-3.222-.124-.303-.535-1.523.116-3.176 0 0 1.007-.323 3.3 1.231.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.005.403 2.29-1.554 3.297-1.231 3.297-1.231.653 1.653.242 2.873.118 3.176.768.84 1.234 1.912 1.234 3.222 0 4.609-2.806 5.625-5.476 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.801.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
							</svg>
							<h3 className="font-semibold text-xl">
								Anomaly Detection System
							</h3>
						</div>
						<p className="text-base text-gray-600">
							Developed an anomaly detection system in Python
							using{' '}
							<span className="font-bold text-gray-800">
								NumPy
							</span>
							, identifying deviations exceeding three times
							the standard deviation.
						</p>
					</div>
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-black mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.578 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.74 3.633 16.74c-1.087-.744.084-.73.084-.73 1.202.085 1.834 1.234 1.834 1.234 1.07 1.835 2.807 1.305 3.492.998.108-.774.42-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.47-2.382 1.235-3.222-.124-.303-.535-1.523.116-3.176 0 0 1.007-.323 3.3 1.231.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.005.403 2.29-1.554 3.297-1.231 3.297-1.231.653 1.653.242 2.873.118 3.176.768.84 1.234 1.912 1.234 3.222 0 4.609-2.806 5.625-5.476 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.801.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
							</svg>
							<h3 className="font-semibold text-xl">
								FerraraNY Pizza
							</h3>
						</div>
						<p className="text-base text-gray-600">
							Created a full-stack pizza website,{' '}
							<a
								href="https://ferraranypizza.com"
								className="text-blue-600 hover:underline"
								target="_blank"
							>
								FerraraNYPizza.com
							</a>
							, enabling users to explore menu options and
							order authentic New York-style pizzas.
						</p>
					</div>
					<div className="border-l-4  border-gray-500 pl-4">
						<div className="flex items-center mb-2">
							<svg
								className="h-6 w-6 text-black mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.578 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.74 3.633 16.74c-1.087-.744.084-.73.084-.73 1.202.085 1.834 1.234 1.834 1.234 1.07 1.835 2.807 1.305 3.492.998.108-.774.42-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.47-2.382 1.235-3.222-.124-.303-.535-1.523.116-3.176 0 0 1.007-.323 3.3 1.231.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.005.403 2.29-1.554 3.297-1.231 3.297-1.231.653 1.653.242 2.873.118 3.176.768.84 1.234 1.912 1.234 3.222 0 4.609-2.806 5.625-5.476 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.801.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
							</svg>
							<h3 className="font-semibold text-xl">
								Web Data Scraper
							</h3>
						</div>
						<p className="text-base text-gray-600">
							Designed and developed a web scraper for the{' '}
							<span className="font-bold text-gray-800">
								National Vulnerability Database
							</span>{' '}
							to detect vulnerabilities based on severity and
							publication date, generating detailed risk
							assessment reports.
						</p>
					</div>
				</div>
			</section>

			<section className="text-center mb-5">
				<h2 className="text-gray-900 text-2xl font-extrabold">
					Get in Touch
				</h2>
				<p className="text-gray-700">
					If you'd like to connect, please send me a direct
					message on
					<a
						href="https://www.linkedin.com/in/bodasaieswar"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-300 font-bold text-lg hover:underline hover:text-blue-600 px-1"
					>
						LinkedIn
					</a>
					with your inquiry, and I'll respond as soon as possible.
					Please note that unsolicited messages will not receive a
					response.
				</p>
			</section>

		</>
	);
};
export default Homepage;
