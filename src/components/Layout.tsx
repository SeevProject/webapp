import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export function Layout() {
	const location = useLocation();

	return (
		<>
			{location.pathname.includes("/login") ? (
				<div className="grid grid-cols-2">
					<LoginPage />
				</div>
			) : (
				<div className="min-w-screen flex min-h-screen flex-col gap-8">
					<Nav />

					<div className="">
						<Outlet />
					</div>
				</div>
			)}
		</>
	);
}
