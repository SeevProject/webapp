import { useParams } from 'react-router-dom';
import UserDataPopup from '../components/popup/UserDataPopup';
import Table from '../components/table/Table';
const CompaniePage = () => {
	const id = useParams();
	return (
		<div className="w-full">
			<Table />

			<UserDataPopup id={id.id} />
		</div>
	);
};

export default CompaniePage;
