import { Navigate, useNavigate } from 'react-router-dom';
import UserDataPopup from '../components/popup/UserDataPopup';
import { AuthContext } from '../store/AuthContext';
import { useContext, useEffect } from 'react';

const CompaniePage = () => {
	const { user } = useContext(AuthContext);

	if (!user )
	    return (<Navigate replace to={'/auth'} />);

	return (
		<div className="w-32">
			<UserDataPopup />
		</div>
	);
};

export default CompaniePage;
