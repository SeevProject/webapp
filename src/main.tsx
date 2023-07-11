import ReactDOM from 'react-dom/client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	BrowserRouter,
	// Route,
	// RouterProvider,
	// createBrowserRouter,
	// createRoutesFromElements,
} from 'react-router-dom';
// import { Layout } from './components/Layout';
// import { AuthPage } from './pages/AuthPage';
// import { NotFoundPage } from './pages/NotFoundPage';
// import { MainPage } from './pages/MainPage';
// import { AdminPage } from './pages/AdminPage';
// import AdminTemplate from './pages/AdminTemplate';
// import AdminCompanie from './pages/AdminCompanie';
// import AdminUser from './pages/AdminUser';
// import CompaniePage from './pages/CompaniePage';
// import Protected from './components/protect.tsx/Protected';

// import in all logic related to translation
import './translation';
import App from './App';
import AuthContextProvider from './store/AuthContext';

// set routes for app
// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path="/" element={<Layout />}>
// 			{/* <Route path="/" element={<MainPage />} /> */}
// 			<Route path="auth" element={<AuthPage />} />
// 			<Route path="admin" element={<AdminPage />} />
// 			<Route path="admin/templates" element={<AdminTemplate />} />
// 			<Route path="admin/companies" element={<AdminCompanie />} />
// 			<Route path="admin/users" element={<AdminUser />} />
// 			<Route path="companie" element={<CompaniePage />} />
// 			<Route path="*" element={<NotFoundPage />} />
// 			<App/>
// 		</Route>,
// 	),
// );

// configure queries and mutations
const queryClient = new QueryClient({
	defaultOptions: {
		mutations: {
			retry: 0,
		},
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
		},
	},
});

// render app
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
);
