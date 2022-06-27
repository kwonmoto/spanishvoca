import React from 'react';

interface Props {
	title: string;
}

const TitleIcon: React.FC<Props> = ({ title }) => {
	return (
		<div className="center">
			<h4 style={{ margin: 'auto' }}>{title}</h4>
		</div>
	);
};

export default TitleIcon;
