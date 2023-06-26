import { useDispatch } from "react-redux";
import  Button from "react-bootstrap/Button";
import { shuffle } from "../redux/venuesSlice";

const ShuffleButton = () => {
  const dispatch = useDispatch();

  return (
    <>
    <Button
        className="btn-sm"
        type='button'
        variant="outline-secondary"
        onClick={() => dispatch(shuffle())}>
        Shuffle Venues
    </Button>
    </>
  )

};

export default ShuffleButton;
