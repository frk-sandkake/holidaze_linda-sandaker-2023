import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Traveller = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };
    return (
        <>
        <h1>Hello Traveller</h1>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Traveller;