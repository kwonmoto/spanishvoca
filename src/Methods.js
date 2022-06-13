export const logFormat = data => {
	const date = data.toLocaleDateString();
	const time = data.toTimeString().split(' ')[0];

	return date + ' ' + time;
};
