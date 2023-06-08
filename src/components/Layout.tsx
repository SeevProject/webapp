import { Outlet } from "react-router-dom";
import { Nav } from "./navbar/Nav";
import { useLocation } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import CompaniePage from "../pages/CompaniePage";

export function Layout() {
	const location = useLocation();

	return (
		<>
			{location.pathname.startsWith("/auth") ? (
				<div className="grid grid-cols-2">
					<AuthPage />
				</div>
			) : location.pathname.startsWith("/companie") ? (
				<div className="min-w-screen flex min-h-screen flex-col gap-8">
					<CompaniePage />
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
