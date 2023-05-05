import { useMutation, useQuery } from "@tanstack/react-query";
import { tryLogout } from "../data/mutations";
import { getUserInfo } from "../data/queries";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

export function Nav() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("templates");
  const navigate = useNavigate();
  // try to logout
  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: tryLogout,
  });

  // get user info from server
  const userInfoQuery = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    retry: 1,
  });

  return (
    <div>
      {location.pathname === "/admin" ? (
        <div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
          <Link to={"/"}>
            <p className="font-bold">Logo</p>
          </Link>
          <div className=" flex flex-row rounded-md border border-border bg-box ">
            <Button
              style={{
                backgroundColor:
                  activeButton === "templates" ? "#555" : "#EBEBEB", // when user click this button the background color would change
                color: activeButton === "templates" ? "#fff" : "#000000",
                padding: "0 0.9rem",
              }}
              className="!important rounded-3xl hover:bg-accentPrimary"
              handleClick={() => {
                setActiveButton("templates");
                {
                  /* Go to these route if button is active */
                }
              }}
              title="Templates"
            />

            <Button
              title="Companies"
              style={{
                backgroundColor:
                  activeButton === "companies" ? "#555" : "#EBEBEB",
                color: activeButton === "companies" ? "#fff" : "#000000",
                padding: "0 0.9rem",
              }}
              className="!important rounded-3xl hover:bg-accentPrimary"
              handleClick={() => {
                setActiveButton("companies");
                navigate("/");
              }}
            />

            <Button
              style={{
                backgroundColor: activeButton === "users" ? "#555" : "#EBEBEB",
                color: activeButton === "users" ? "#fff" : "#000000",
                padding: "0 0.9rem",
              }}
              className="!important rounded-3xl hover:bg-accentPrimary"
              handleClick={() => {
                setActiveButton("users");
              }}
              title="Users"
            />
          </div>

          <div className="flex flex-row gap-2">
            <Button handleClick={() => {}} title="Profile Icon" />
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
          <Link to={"/"}>
            <p className="font-bold">Logo</p>
          </Link>
          <div className="flex flex-row gap-2">
            {userInfoQuery.isLoading ? (
              <p>Loading...</p>
            ) : userInfoQuery.data ? (
              <Button
                title="Logout"
                handleClick={() => logoutMutation.mutate()}
              />
            ) : (
              <Link to={"/auth"}>
                <Button title="Login" handleClick={() => {}} />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
