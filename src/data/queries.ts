export async function getUserInfo() {
	// fetch user info
	const res = await fetch('http://localhost:8080/companies/me', {
		method: 'GET',
		credentials: 'include',
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.statusText}`);

	const data = await res.json();

	return data;
}
export async function getAllUserInfo() {
	// fetch user info
	const res = await fetch('http://localhost:8080/users', {
		method: 'GET',
		credentials: 'include',
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.statusText}`);

	const data = await res.json();

	return data;
}
