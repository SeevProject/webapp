import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export function AdminNav() {
  return (
    <div>
      <div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
        <Link to={"/"}>
          <p className="font-bold">Logo</p>
        </Link>
        <div className="flex flex-row ">
          <Button
            style={{ borderRadius: "15px 0 0 15px" }}
            handleClick={() => {}}
            title="Templates"
          />

          <Button
            title="Companies"
            style={{ borderRadius: "0" }}
            handleClick={() => {}}
          />

          <Button
            style={{ borderRadius: "0px 15px 15px 0px" }}
            handleClick={() => {}}
            title="Users"
          />
        </div>

        <div className="flex flex-row gap-2">
          <Button handleClick={() => {}} title="Profile Icon" />
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
