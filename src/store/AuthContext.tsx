import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext<any | null>(null);

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState<any | null>(null);

	const updateUser = (newUser) => {
		setUser(newUser);
	};

	return (
		<AuthContext.Provider value={{ user, setUser: updateUser }}>
			{children}
		</AuthContext.Provider>
	);
}
