/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import InputTextForm from '../../Component/InputForm/InputTextForm';
import SelectCategory from '../../Component/Voca/Upload/SelectCategory';

import { setStateOption } from '../../redux/State/StateOption/reducer';
import WarningMessage from '../WarningMessage';

const VocaEdit = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// word reducer
	const word = useSelector(state => state.wordReducer).map(row => row.word.toLowerCase());
	const inputOption = useSelector(state => state.inputOptionReducer);

	const condition = word.indexOf(inputOption.word.toLowerCase()) !== -1;
	const isNanCondition = inputOption.word === '' || inputOption.translate === '';

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'vocaEdit'));
	};

	// 마운트 시 한 번만 실행
	useEffect(() => {
		changeState();
	}, []);

	return (
		<Row className="content-container">
			<Col>
				<InputTextForm title="단어 (필수)" optionKey="word" />
				<InputTextForm title="해석 (필수)" optionKey="translate" />
				<InputTextForm title="예문" optionKey="example" />
				<SelectCategory />
				<WarningMessage message="단어와 해석을 입력해주세요." condition={isNanCondition} />
				<WarningMessage
					message="중복된 단어가 있습니다. 그래도 등록하시겠습니까?"
					condition={condition}
				/>
			</Col>
		</Row>
	);
};

export default VocaEdit;
