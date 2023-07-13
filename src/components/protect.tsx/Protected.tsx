import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface User {
	role: string;
}

function Protected(props: { user?: any; role?: string }) {
	if (!props.user?.userData?.data) {
		return <Navigate to="/auth" replace />;
	}

	if (props.role && props.user?.userData?.data?.type !== props.role)
		return <Navigate to="/403" replace />;

	return <Outlet />;
}

export default Protected;
