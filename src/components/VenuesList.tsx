import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Spinner, Col } from "react-bootstrap";
import { VenueData } from "../types/VenueData";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchVenues, selectVenues, selectStatus, selectError } from "../services/venuesSlice";
import { VenueCard } from "../components/VenueCard";

const VenuesList = () => {
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
      <Row  md={2} xs={1} lg={3} xl={4} className="g-3">
        {venues.map((venue: VenueData) => (
          <Col key={venue.id} className="mb-4">
            <VenueCard venue={venue}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VenuesList;