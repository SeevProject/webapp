export async function getUserInfo() {
	// fetch user info
	const res = await fetch("http://localhost:3000/users/me", {
		credentials: "include",
	});

	// throw error if request failed
	if (!res.ok) throw new Error("Failed to get user info");

	// otherwise return data
	const data = await res.json();
	return data;
}
