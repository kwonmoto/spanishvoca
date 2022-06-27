import React from 'react';

interface Props {
	message: string;
	condition: boolean;
}

const WarningMessage: React.FC<Props> = ({ message, condition }) => {
	return <div>{condition && <h4 className="WarningMessage">{message}</h4>}</div>;
};

export default WarningMessage;
