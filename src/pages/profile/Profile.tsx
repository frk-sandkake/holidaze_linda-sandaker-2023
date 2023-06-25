import Host from "../Host";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

// import { useMemo } from "react";
// import { getUserProfile } from "../../services/axiosApi";

interface ProfileProps {

}

const Profile = ({}: ProfileProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const auth = useAuth()
  const {user} = useAppSelector((state) => state.auth);

  const handleLogout = () => {
      dispatch(logout());
      navigate("/");
  };

  return (
    <>
      {user?.venueManager ? (
        <>
        <Host />
        </>
      ) : (
        <>
        <h1>Hello there {user?.name}</h1>
        <p>Is venueManager {user?.venueManager}</p>
           <ProfileCard />
        </>
      )}
    <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
