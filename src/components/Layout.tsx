import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

export function Layout() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col gap-8">
      <Nav />

      <div className="grow px-24">
        <Outlet />
      </div>
    </div>
  );
}
