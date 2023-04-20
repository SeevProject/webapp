import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./routes/Layout";
import { AuthPage } from "./routes/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// set routes for app
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="auth" element={<AuthPage />} />
		</Route>,
	),
);

// configure queries and mutations
const queryClient = new QueryClient({
	defaultOptions: {
		mutations: {
			retry: 1,
		},
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
});

// render app
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}></RouterProvider>
		</QueryClientProvider>
	</React.StrictMode>,
);
