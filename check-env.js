const requiredEnvVars = [
	'VITE_AWS_REGION',
	'VITE_AWS_ACCESS_KEY_ID',
	'VITE_AWS_SECRET_ACCESS_KEY',
];

const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
	console.error(
		`Missing required environment variables: ${missingEnvVars.join(', ')}`,
	);
	process.exit(1); // Exit with an error code to stop the build
} else {
	console.log('All required environment variables are set.');
}
