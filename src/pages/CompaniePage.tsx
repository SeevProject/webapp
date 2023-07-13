import { Navigate } from 'react-router-dom';
import UserDataPopup from '../components/popup/UserDataPopup';
import { AuthContext } from '../store/AuthContext';
import { useContext} from 'react';
import { getIsLogin, getUser } from '../data/userStorage';

const CompaniePage = () => {
	const { user, setUser } = useContext(AuthContext);
	const userStorage = getUser();
	console.log(
		(userStorage === null || userStorage === 'undefined') &&
			user.userLogout === true &&
			!getIsLogin(),
	);

	// // redirect to login page if user is logout
	if ((userStorage === null || userStorage === 'undefined') && user.userLogout === true && !getIsLogin())
		return <Navigate replace to={'/auth'}></Navigate>;

	return (
		<div className="w-32">
			<UserDataPopup />
		</div>
	);
};

export default CompaniePage;
