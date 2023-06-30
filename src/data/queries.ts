export async function getUserInfo() {
	// fetch user info
	const res = await fetch("http://localhost:8080/users/me", {
		credentials: "include",
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.statusText}`);

	const data = await res.json();

	return data;
}
