import Host from "./Host";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
      dispatch(logout());
      navigate("/");
  };

  return (
    <>
     <ProfileCard />
      {user?.venueManager ? (
        <Host />
      ) : (
        <>

        </>
      )}
    <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
