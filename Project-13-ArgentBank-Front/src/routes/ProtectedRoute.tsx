
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { stateType } from '../global-state/authSlice';

type ProtectedRouteProps = {
    children: React.ReactNode;
}

function ProtectedRoute( { children } : ProtectedRouteProps) {

    const isAuthenticated = useSelector((state: stateType) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>;;
    } 
    return <>{children}</>;
}

export default ProtectedRoute;

