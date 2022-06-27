module.exports = {
	globDirectory: 'build/',
	globPatterns: ['**/*.{json,ico,png,txt,css,js}'],
	swDest: 'build/service-worker.js',
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
