export function saveUser(user: any): void {
	localStorage.setItem("USER_LOCAL_STORAGE", JSON.stringify(user));
}

export function getUser(): any | undefined {
	const user = localStorage.getItem("USER_LOCAL_STORAGE");
	return user ? JSON.parse(user) : undefined;
}

export function removeUser(): void {
	localStorage.removeItem("USER_LOCAL_STORAGE");
}
