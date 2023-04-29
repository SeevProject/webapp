import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import AdminNav from "../components/AdminNav";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-w-screen flex min-h-screen flex-col gap-8">
      {location.pathname === "/admin" ? <AdminNav /> : <Nav />}

      <div className="grow px-24">
        <Outlet />
      </div>
    </div>
  );
}
