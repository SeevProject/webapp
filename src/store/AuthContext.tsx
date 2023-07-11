import { createContext, useState } from 'react';

interface User {
	token: string;
}

export const AuthContext = createContext<any | null>(null);

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState<any | null>({
		userData: {},
		userLogin: false,
		userLogout: false,
	});


	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
