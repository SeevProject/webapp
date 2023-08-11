import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

interface User {
	role: string;
}

function Protected(props: { user?: any; role?: string }) {
	
	if (!props.user?.data) {
		return <Navigate to="/auth" replace />;
	}
	if (props.role && props.user?.data?.type !== props.role)
		return <Navigate to="/403" replace />;

	return <Outlet />;
}

export default Protected;
