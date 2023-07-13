import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/protect.tsx/Protected';
import { MainPage } from './pages/MainPage';
import { Layout } from './components/Layout';
import { AuthPage } from './pages/AuthPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotFoundPage } from './pages/NotFoundPage';
import { AdminPage } from './pages/AdminPage';
import AdminTemplate from './pages/AdminTemplate';
import AdminCompanie from './pages/AdminCompanie';
import CompaniePage from './pages/CompaniePage';
import AdminUser from './pages/AdminUser';
import { AuthContext } from './store/AuthContext';

function App() {
	const { user, setUser } = useContext(AuthContext);
	console.log(user)
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<MainPage />} />
				<Route path="auth" element={<AuthPage />} />

				<Route element={<Protected user={user} role="company" />}>
					<Route path="companie" element={<CompaniePage />} />
				</Route>

				{/* <Route
					element={<Protected user={user} role="admin" />}
				> */}
					<Route path="admin" element={<AdminPage />} />
					<Route path="admin/templates" element={<AdminTemplate />} />
					<Route path="admin/companies" element={<AdminCompanie />} />
					<Route path="admin/users" element={<AdminUser />} />
				{/* </Route> */}

				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
