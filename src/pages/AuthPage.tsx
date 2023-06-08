import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../data/queries";
import { tryLogin, tryRegister } from "../data/mutations";
import { Navigate } from "react-router-dom";
import { Button } from "../components/button/Button";
import { TbLogin } from "react-icons/tb";
import { TbFingerprint } from "react-icons/tb";
import ProfileDropdown from "../components/dropdown/ProfileDropdown";
import { Link } from "react-router-dom";

export function AuthPage() {
	// do login and logout mutations to server
	const loginMutation = useMutation({
		mutationKey: ["login"],
		mutationFn: tryLogin,
	});

	const registerMutation = useMutation({
		mutationKey: ["register"],
		mutationFn: tryRegister,
	});

	// get user info from server
	const userInfoQuery = useQuery({
		queryKey: ["userInfo"],
		queryFn: getUserInfo,
		retry: 1,
	});

	// redirect to home if user is logged in
	if (userInfoQuery.isSuccess) return <Navigate replace to={"/"}></Navigate>;

	return (
		<>
			<div className="min-h-screen bg-box pl-14 pt-8 ">
				<p className="font-bold">
					Logo
					<p className="inline pl-12 text-[0.8rem] font-thin">Make it easier</p>
				</p>
				<div className="ml-16 mt-[7rem]">
					<h1 className="mb-6 text-3xl font-bold">AUTHENTICATE</h1>
					<div className="w-[15rem]">
						<p>
							Use one of the providers to sign in. No need to worry about
							passwords or the like.
						</p>

						<div className="mt-[3rem]  h-56 w-56 rounded-full bg-accentSecondary">
							<TbFingerprint
								className="h-48 w-56 pt-8"
								style={{ color: "white" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="grid-item pr-14 pt-8 text-end">
					<ProfileDropdown />
				</div>

				<div className="ml-[10rem] mt-[7rem] w-min ">
					{/* on loading */}
					{userInfoQuery.status === "loading" && (
						<p className="text-gray-500">Loading</p>
					)}
					<h1 className="mb-6 text-3xl font-bold">Login with your account</h1>
					<p className="inline-block w-[15rem] text-start font-thin text-textAlt">
						If you do not already have an account. You should
						<Link to={"/"}>
							<span className=" text-accentPrimary"> contact </span>
						</Link>
						us to create one.
					</p>
					<div>
						<Button
							className="font mt-[.8rem] w-[14rem] py-2 text-lg"
							title="Login with Google"
							icon={<TbLogin />}
							handleClick={() => loginMutation.mutate()}
						/>
					</div>
					<div>
						<Button
							className="font mt-[.8rem] w-[14rem] py-2 text-lg"
							icon={<TbLogin />}
							handleClick={() => registerMutation.mutate()}
							title="Register"
						/>
					</div>
					{/* on errors */}
					{userInfoQuery.status === "error" && (
						<>
							<p className="mt-3 font-thin text-accentSecondary">
								Failed to login. Try again!
								{/* {JSON.stringify(userInfoQuery.error)} */}
							</p>
						</>
					)}
				</div>
			</div>
		</>
	);
}
