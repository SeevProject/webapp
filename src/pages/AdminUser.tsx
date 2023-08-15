import { useParams } from "react-router-dom";
import UserDataPopup from "../components/popup/UserDataPopup";
import Table from "../components/table/Table";

const AdminUser = () => {
	const id = useParams();
	return (
		<div>
			<h1>User Data</h1>
			<Table />
			<UserDataPopup id={id.id} />
		</div>
	);
};

export default AdminUser;
