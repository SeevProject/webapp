import { useMutation, useQuery } from '@tanstack/react-query';
import {
	tryLogin,
	tryLoginWithGoogle,
	tryLogout
} from '../data/mutations';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../components/button/Button';
import { TbLogin } from 'react-icons/tb';
import { TbFingerprint } from 'react-icons/tb';
import ProfileDropdown from '../components/dropdown/ProfileDropdown';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/AuthContext';
import { getUserInfo, getUserOrAdminInfo } from '../data/queries';
import { Iput } from '../components/input/Iput';
import { NavLink } from 'react-router-dom';

export function AuthPage() {
	const { user, setUser } = useContext(AuthContext);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	// do login and logout mutations to server
	const loginWithGoogleMutation = useMutation({
		mutationKey: ['login'],
		mutationFn: tryLoginWithGoogle,
		onSuccess: () => {
			// Trigger userInfoQuery after loginMutation is successful
			userInfoQuery.refetch();
		},
	});
	// get user info from server
	const userInfoQuery = useQuery({
		queryKey: ['userInfo'],
		queryFn: getUserInfo,
		onSuccess: (data) => {
			setUser(data);
		},
		onError: (err) => {
			// setUser(null);
		},
		retry: 1,
	});
	// get user and admin info from server
	const getUserAdminInfo = useQuery({
		queryKey: ['userAdminInfo'],
		queryFn: getUserOrAdminInfo,
		onSuccess: (data) => {
			setUser(data);
		},
		onError: (err) => {
			// setUser(null);
		},
		retry: 1,
	});

	const mutationConfig = {
		mutationKey: ['loginn'],
		mutationFn: (data) => tryLogin(data.username, data.password),
		onSuccess: () => {
			getUserAdminInfo.refetch();
		},
		onError: (err) => {
			console.log(err);
		},
	};
	const mutation = useMutation(mutationConfig);

	const handleSubmit = (e) => {
		e.preventDefault();
		mutation.mutate({
			username: formData.username,
			password: formData.password,
		});
		console.log('submit');
	};

	const handleInput = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	if (user?.data) {
		if (user?.data.type === 'admin') {
			return <Navigate replace to={'/admin'} />;
		} else if (user?.data.type === 'company') {
			return <Navigate replace to={'/companie'} />;
		}
	}

	return (
		<>
			<div className="min-h-screen bg-box pl-14 pt-8 ">
				<div className="font-bold">
					Logo
					<p className="inline pl-12 text-[0.8rem] font-thin">Make it easier</p>
				</div>
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
								style={{ color: 'white' }}
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
					{userInfoQuery.status === 'loading' && (
						<p className="text-gray-500">Loading</p>
					)}
					<h1 className="mb-6 text-3xl font-bold">Login with your account</h1>
					<p className="inline-block w-[15rem] text-start font-thin text-textAlt">
						If you do not already have an account. You should
						<Link to={'/'}>
							<span className=" text-accentPrimary"> contact </span>
						</Link>
						us to create one.
					</p>
					<form action="#">
						<div className="loginInputs">
							<Iput
								type="text"
								className="font text-md mt-[.8rem] w-[14rem] py-2"
								placeholder="username"
								handleClick={handleInput}
								value={formData.username}
								name="username"
							/>
							<Iput
								type="text"
								className="font text-md mt-[.8rem] w-[14rem] py-2"
								placeholder="password"
								handleClick={handleInput}
								value={formData.password}
								name="password"
							/>
						</div>
						<div>
							<Button
								className="font mt-[.8rem] w-[14rem] py-2 text-lg"
								title="Login"
								icon={<TbLogin />}
								handleClick={handleSubmit}
							/>
						</div>
						<div>
							<Button
								className="font mt-[.8rem] w-[14rem] py-2 text-lg"
								title="Login with Google"
								icon={<TbLogin />}
								handleClick={() => loginWithGoogleMutation.mutate()}
							/>
						</div>
						
					</form>

					{/* on errors */}
					{userInfoQuery.status === 'error' && (
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

// 	mutationKey: ['login'],
// 	mutationFn: tryLogin,
// 	onSuccess: () => {
// 		// Trigger userInfoQuery after loginMutation is successful
// 		userInfoQuery.refetch();
// 	},
// });
