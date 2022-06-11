/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import InputTextForm from '../../Component/InputForm/InputTextForm';
import { setStateOption } from '../../redux/State/StateOption/reducer';
import WarningMessage from '../WarningMessage';
import SelectGrammarCategory from '../../Component/Grammar/Upload/SelectGrammarCategory';

const GrammarUpload = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// word reducer
	const grammar = useSelector(state => state.grammarReducer).map(row => row.sentence.toLowerCase());
	const inputOption = useSelector(state => state.inputOptionReducer);

	const condition = grammar.indexOf(inputOption.word.toLowerCase()) !== -1;
	const isNanCondition = inputOption.sentence === '' || inputOption.translate === '';

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'grammarUpload'));
	};

	// 마운트 시 한 번만 실행
	useEffect(() => {
		changeState();
	}, []);

	return (
		<Row>
			<Col>
				<InputTextForm title="문장" optionKey="sentence" />
				<InputTextForm title="해석" optionKey="translate" />
				<SelectGrammarCategory />
				<WarningMessage message="문장과 해석을 입력해주세요." condition={isNanCondition} />
				<WarningMessage
					message="중복된 문장이 있습니다. 그래도 등록하시겠습니까?"
					condition={condition}
				/>
			</Col>
		</Row>
	);
};

export default GrammarUpload;
