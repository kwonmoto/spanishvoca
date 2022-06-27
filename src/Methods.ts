import { GrammarRow } from './redux/Data/Grammar/reducer';
import { WordRow } from './redux/Data/Word/reducer';
import { SortType } from './redux/State/StateOption/reducer';

export const logFormat = (data: Date) => {
	const date = () => {
		//yyyy-mm-dd 포맷 날짜 생성
		return (
			(data.getMonth() + 1 > 9 ? (data.getMonth() + 1).toString() : '0' + (data.getMonth() + 1)) +
			'-' +
			(data.getDate() > 9 ? data.getDate().toString() : '0' + data.getDate().toString())
		);
	};
	const time = ('0' + data.getHours()).slice(-2) + ':' + ('0' + data.getMinutes()).slice(-2);

	return date() + ' ' + time;
};

export const sortWord = (arr: WordRow[], sort: SortType) => {
	const correctRate = (data: WordRow, sc: 'asc' | 'desc') => {
		const type = sc === 'asc' ? 2 : -1;
		return data.gameStat.try !== 0 ? data.gameStat.answer / data.gameStat.try : type;
	};
	switch (sort) {
		case 'latest':
			return arr.sort((a: WordRow, b: WordRow) => b.log.getTime() - a.log.getTime());
		case 'oldest':
			return arr.sort((a: WordRow, b: WordRow) => a.log.getTime() - b.log.getTime());
		case 'abc':
			return arr.sort((a: WordRow, b: WordRow) => {
				if (a.word > b.word) return -1;
				else if (a.word < b.word) return 1;
				else return 0;
			});
		case 'zyx':
			return arr.sort((a, b) => {
				if (a.word > b.word) return -1;
				else if (a.word < b.word) return 1;
				else return 0;
			});
		case 'statAsc':
			return arr.sort((a, b) => {
				if (correctRate(a, 'asc') < correctRate(b, 'asc')) return -1;
				else if (correctRate(a, 'asc') > correctRate(b, 'asc')) return 1;
				else if (a.gameStat.try < b.gameStat.try) return -1;
				else if (a.gameStat.try > b.gameStat.try) return 1;
				else return 0;
			});
		case 'statDesc':
			return arr.sort((a, b) => {
				if (correctRate(a, 'desc') > correctRate(b, 'desc')) return -1;
				else if (correctRate(a, 'desc') < correctRate(b, 'desc')) return 1;
				else if (a.gameStat.try > b.gameStat.try) return -1;
				else if (a.gameStat.try < b.gameStat.try) return 1;
				else return 0;
			});
		case 'random':
			return arr.sort(() => Math.random() - 0.5);
		default:
			return arr;
	}
};

export const sortGrammar = (arr: GrammarRow[], sort: SortType) => {
	switch (sort) {
		case 'latest':
			return arr.sort((a: GrammarRow, b: GrammarRow) => b.log.getTime() - a.log.getTime());
		case 'oldest':
			return arr.sort((a: GrammarRow, b: GrammarRow) => a.log.getTime() - b.log.getTime());
		case 'abc':
			return arr.sort((a: GrammarRow, b: GrammarRow) => {
				if (a.sentence > b.sentence) return -1;
				else if (a.sentence < b.sentence) return 1;
				else return 0;
			});
		case 'zyx':
			return arr.sort((a, b) => {
				if (a.sentence > b.sentence) return -1;
				else if (a.sentence < b.sentence) return 1;
				else return 0;
			});
		case 'random':
			return arr.sort(() => Math.random() - 0.5);
		default:
			return arr;
	}
};
