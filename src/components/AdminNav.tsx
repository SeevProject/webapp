import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { AdminButton } from "../components/AdminButton";

export function AdminNav() {
  return (
    <div>
      <div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
        <Link to={"/"}>
          <p className="font-bold">Logo</p>
        </Link>
        <div className="flex flex-row ">
          <AdminButton
            style={{ borderRadius: "15px 0 0 15px" }}
            title="Templates"
          />
          <AdminButton title="Companies" />
          <AdminButton
            style={{ borderRadius: "0 15px 15px 0" }}
            title="Users"
          />
        </div>

        <div className="flex flex-row gap-2">
          <Button title="Profile Icon" />
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
