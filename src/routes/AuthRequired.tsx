import { Outlet, Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "../redux/hooks";

export default function AuthRequired() {
    const { isAuthenticated } = useAppSelector(state => state.auth)
    const location = useLocation()

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                state={{
                    message: "You must log in first.",
                    from: location.pathname
                }}
                replace
            />
        )
    }
    return <Outlet />
}