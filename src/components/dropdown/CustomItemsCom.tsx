import { Menu } from '@headlessui/react';
import React from 'react';
import { ProfileDropdownItem } from './ProfileDropdownItem';
import { HiArrowRight, HiCog } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';
import { useMutation } from '@tanstack/react-query';
import { tryLogout } from '../../data/mutations';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';

function CustomItemsCom() {
	const { user, setUser } = useContext(AuthContext);
	// try to logout
	const logoutMutation = useMutation({
		mutationKey: ['logout'],
		mutationFn: tryLogout,
		onSuccess:()=>{
			setUser(null);
		}
	});


	return (
		<>
			<p className="mb-[0.3rem] border-b border-b-border pl-3 pt-2 ">
				CMP Name
			</p>
			<Menu.Item>
				<ProfileDropdownItem
					text="Settings"
					icon={<HiCog className="text-gray-500 mr-2 inline h-5 w-5 " />}
					handleClick={() => {}}
				/>
			</Menu.Item>
			<Menu.Item>
				<ProfileDropdownItem
					text="Support"
					icon={<BiSupport className="text-gray-500 mr-2 inline h-5 w-5" />}
					handleClick={() => null}
				/>
			</Menu.Item>
			<Menu.Item>
				<ProfileDropdownItem
					text="Logout"
					icon={<HiArrowRight className="text-gray-500 mr-2 inline h-5 w-5" />}
					handleClick={() => logoutMutation.mutate()}
				/>
			</Menu.Item>
		</>
	);
}

export default CustomItemsCom;
