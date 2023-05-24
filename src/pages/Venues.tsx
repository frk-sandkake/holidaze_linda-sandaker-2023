import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Spinner, Card } from "react-bootstrap";
import { VenueData } from "../types/VenueData";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchVenues, selectVenues, selectStatus, selectError } from "../services/venuesSlice";

const Venues = () => {
  const dispatch = useAppDispatch();
  const venues = useAppSelector((selectVenues));
  const status = useSelector((selectStatus));
  const error = useSelector((selectError));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVenues());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (status === "failed") {
    return <div className="text-center mt-5">{error}</div>;
  }

  return (
    <Container>
      <Row>
        {venues.map((venue: VenueData) => (
          <div key={venue.id} className="mb-4">
            <Card>
            <Card.Img variant="top" src={venue.media[0]} />
            <Card.Body>
              <Card.Title>{venue.name}</Card.Title>
              <Card.Text>{venue.description}</Card.Text>
            </Card.Body>
          </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Venues;

