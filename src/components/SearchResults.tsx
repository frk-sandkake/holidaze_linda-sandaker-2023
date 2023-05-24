import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import { VenueData } from "../types/VenueData";
import axios from "axios";

interface SearchResultsProps {
  isHomePage?: boolean;
}

const SearchResults = ({ isHomePage }: SearchResultsProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [venues, setVenues] = useState<VenueData[]>([]);
  const params = useParams<{ searchTerm: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/venues?search=${params.searchTerm}`
        );
        setVenues(response.data);
        console.log("fetchData", response.data);
        setLoading(false);
      } catch (error) {
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, [params.searchTerm]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-5">{error}</div>;
  }

  if (venues.length === 0) {
    return (
      <div className="text-center mt-5">No venues found for this search.</div>
    );
  }

  return (
    <div className={isHomePage ? "row mt-4" : ""}>
      {venues.map((venue) => (
        <div key={venue.id} className={isHomePage ? "col-md-4 mb-4" : ""}>
          <Card>
            <Card.Img variant="top" src={venue.media[0]} />
            <Card.Body>
              <Card.Title>{venue.name}</Card.Title>
              <Card.Text>{venue.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
      </div>
    )
 }

 export default SearchResults
