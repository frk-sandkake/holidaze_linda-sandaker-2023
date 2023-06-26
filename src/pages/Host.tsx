import ProfileCard from "./profile/ProfileCard";
import { useAppSelector } from "../redux/hooks";

const Host = () => {
    const {user} = useAppSelector((state) => state.auth);

    return (
        <>
        <h1>Hello Host {user?.name}</h1>
        <p>Is venueManager {user?.venueManager}</p>
        <ProfileCard />
        </>
    )
}

export default Host;
