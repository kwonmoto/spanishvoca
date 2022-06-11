const WarningMessage = ({ message, condition }) => {
	return <div>{condition && <h4 className="WarningMessage">{message}</h4>}</div>;
};

export default WarningMessage;
