import { Outlet, Navigate, useLocation } from "react-router-dom"

export const AuthRequired = () => {
    const isLoggedIn = localStorage.getItem('loggedin') === 'true'
    const location = useLocation()
    const token = localStorage.getItem('accessToken')

    return <>
    {token || isLoggedIn ? <Outlet /> :
        <Navigate
            to="/login"
            state={{
                message: "You must log in first.",
                from: location.pathname
            }}
            replace
        />
    }
    </>

}
