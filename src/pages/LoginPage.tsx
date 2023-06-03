import { TbFingerprint } from "react-icons/tb";
import ProfileDropdown from "../components/ProfileDropdown";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const LoginPage = () => {
	return (
		<>
			<div className="min-h-screen bg-box pl-14 pt-8 ">
				<p className="font-bold">
					Logo
					<p className="inline pl-12 text-[0.8rem] font-thin">Make it easier</p>
				</p>
				<div className="ml-16 mt-[7rem]">
					<h1 className="mb-6 text-3xl font-bold">SIGN IN</h1>
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
							handleClick={() => {}}
							title="Google"
						/>
					</div>
					<div>
						<Button
							className="font mt-[.8rem] w-[14rem] py-2 text-lg"
							handleClick={() => {}}
							title="Facebook"
						/>
					</div>
					<p className="mt-3 font-thin text-accentSecondary">
						Failed to login. Try again!
					</p>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
