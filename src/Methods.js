export const logFormat = data => {
	const date = () => {
		//yyyy-mm-dd 포맷 날짜 생성
		return (
			data.getFullYear() +
			'-' +
			(data.getMonth() + 1 > 9 ? (data.getMonth() + 1).toString() : '0' + (data.getMonth() + 1)) +
			'-' +
			(data.getDate() > 9 ? data.getDate().toString() : '0' + data.getDate().toString())
		);
	};
	const time = data.toTimeString().split(' ')[0];

	return date() + ' ' + time;
};

export const sortType = (arr, sort) => {
	switch (sort) {
		case 'latest':
			return arr.sort((a, b) => b.log.toDate() - a.log.toDate());
		case 'oldest':
			return arr.sort((a, b) => a.log.toDate() - b.log.toDate());
		case 'abc':
			return arr.sort((a, b) => {
				if (a.word < b.word) return -1;
				else if (a.word > b.word) return 1;
				else return 0;
			});
		case 'zyx':
			return arr.sort((a, b) => {
				if (a.word > b.word) return -1;
				else if (a.word < b.word) return 1;
				else return 0;
			});
		case 'random':
			return arr.sort(() => Math.random() - 0.5);
		default:
			return arr;
	}
};
