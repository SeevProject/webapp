import UserDataPopup from "../components/popup/UserDataPopup";
import EditCompanyDataPopup from "../components/popup/EditCompanyDataPopup";
import { useState } from "react";

const CompaniePage = () => {
	const [isPopupOpen, setPopupOpen] = useState(false);
	const handleCancel = () => {
		setPopupOpen(false);
		// Additional logic for cancel action
	};
	return (
		<div className="w-32">
			<UserDataPopup />

			<button onClick={() => setPopupOpen(true)}>
				Open dialog to editing company data
			</button>
			{isPopupOpen && (
				<EditCompanyDataPopup
					show={true}
					onCancel={handleCancel}
					onClose={handleCancel}
				/>
			)}
		</div>
	);
};

export default CompaniePage;
