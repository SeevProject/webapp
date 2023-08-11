export async function getUserInfo() {
	// fetch user info
	const res = await fetch('http://localhost:3000/companies/me', {
		method: 'GET',
		credentials: 'include',
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.statusText}`);

	const data = await res.json();

	return data;
}
export async function getUserOrAdminInfo() {
	// fetch user info
	const res = await fetch('http://localhost:3000/admin/admin', {
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
	const res = await fetch('http://localhost:3000/users', {
		method: 'GET',
		credentials: 'include',
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.statusText}`);

	const data = await res.json();

	return data;
}
