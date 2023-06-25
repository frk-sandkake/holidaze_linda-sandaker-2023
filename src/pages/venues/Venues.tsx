import Container from "react-bootstrap/Container";
import ShuffleButton from "../../components/ShuffleButton";
import CustomPagination from "../../components/Pagination";
import { useEffect, useState, } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchVenues, selectStatus, selectError, selectAllVenues } from "../../redux/venuesSlice";
import { VenueCard } from "../venues/VenueCard";
import { Col, Row, Spinner } from "react-bootstrap";
import { VenueResponse } from "../../redux/types";

const Venues = () => {
  const dispatch = useAppDispatch();
  const venues = useAppSelector((selectAllVenues));
  const status = useAppSelector((selectStatus));
  const error = useAppSelector((selectError));

  const [currentPage, setCurrentPage] = useState(1);
  const venuesPerPage = 12;
  const totalPages = venuesPerPage > 0 ? Math.ceil(venues.length / venuesPerPage) : 0;
  const startIndex = (currentPage - 1) * venuesPerPage;
  const endIndex = startIndex + venuesPerPage;
  const currentVenues = venues.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVenues());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error || status === "failed") {
    return <div className="text-center mt-5">Error: {error}</div>;
  }

  return (
    <>
      <Container className="d-flex flex-column gap-2">
        <h1>Venues Page</h1>
        <Container>
        <ShuffleButton />
        </Container>
        <Row md={2} xs={1} lg={3} xl={4} className=" gx-3 mb-4">
          {currentVenues.map((venue: VenueResponse) => (
            <Col key={venue.id} style={{ maxWidth: '424px' }} className="mx-auto pt-4 px-2">
              <VenueCard venue={venue} />
            </Col>
          ))}
          <Col className="text-center pt-4 px-2">
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Venues;

