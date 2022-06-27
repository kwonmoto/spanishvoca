import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const EditCategory = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onClick = (link: string) => {
		link === 'voca' ? navigate('/category/edit') : navigate('/grammarcategory/edit');
		dispatch(setStateOption('offCanvasToggle', false));
	};
	return (
		<>
			<div className="menu" onClick={() => onClick('voca')} style={{ cursor: 'pointer' }}>
				<h2>단어 카테고리 편집</h2>
			</div>
			<div className="menu" onClick={() => onClick('grammar')} style={{ cursor: 'pointer' }}>
				<h2>문법 카테고리 편집</h2>
			</div>
		</>
	);
};

export default EditCategory;
