import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// import { VenueResponse } from "../../redux/types";
import http from "../../services/http-common";
import { Button, Card, Container } from "react-bootstrap";
import SharedCarousel from "../../components/Carousel";
import { FaStar, FaWifi, FaParking, FaCoffee, FaDog } from "react-icons/fa";

export interface Venue {
    id: string;
    name: string;
    description: string;
    media: string[];
    price: number;
    maxGuests: number;
    rating: number;
    created: string;
    updated: string;
    meta: {
        wifi: boolean;
        parking: boolean;
        breakfast: boolean;
        pets: boolean;
    };
    location: {
        address: string;
        city: string;
        zip: string;
        country: string;
        continent: string;
        lat: number;
        lng: number;
    };
}

export const VenueID = () => {
    const params = useParams();
    const [venue, setVenue] = useState<Venue>();
    const [media, setMedia] = useState<string[]>([]);
   const [isLoading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string>('');
   const location = useLocation()
   const [isViewed, setIsViewed] = useState(false)
   const search = location.state?.search || "";
   const type = location.state?.type || "all";

   useEffect(() => {
     const fetchVenue = async () => {
       setLoading(isLoading);
       try {
         const response = await http.get<Venue>(`/venues/${params.id}`);
         setMedia(response.data.media)
         setVenue(response.data);
         setLoading(!isLoading);
       } catch (error) {
         setError(`Error fetching: ${error}`);
         setLoading(!isLoading);
       }
     };
     fetchVenue();
   }, [params.id]);

   if (error) {
     return <div>{error}</div>;
   }

   const items = media.length > 0
   ? media.map((item) => ({
       src: item,
       alt: venue?.name || '',
       title: venue?.name || '',
       caption: "Is this Your next place to visit?!",
     }))
   : ([
       {
         src: "/public/images/7.png",
         alt: 'Default Image',
         title: venue?.name,
         caption: "Venue images coming SOON",
       },
     ]);

    return (
        <div>
     <div>
          <Link to={`..${search}`} relative="path" aria-label="Back button" onClick={() => setIsViewed(isViewed)}>
            Back to {type} venues
          </Link>
        </div>
            {venue ? (
                <>
                <Container className="w-100 d-flex flex-column align-items-center" >
                    <Card key={venue.id} className='shadow-sm' >
                    <Card.Img variant='top' src={media[0]} height='300px' style={{ objectFit: "cover"}}/>
                        <Card.Body className='d-flex flex-column justify-content-between pb-4 pt-2'>
                            <Card.Text title='Rating' className="fs-6 d-flex gap-2 align-items-center m-0"><FaStar aria-label="Star" className='text-warning'/> {venue.rating}</Card.Text>
                            <Card.Title className='fs-2 fw-semibold'>{venue.name}</Card.Title>
                            <Card.Text className='fs-small m-0 color-tertiary'>{`Location: ${venue.location.city}, ${venue.location.country}`}</Card.Text>
                            <Card.Text className='fs-small m-0 color-tertiary'>{`Max guests: ${venue.maxGuests}`}</Card.Text>
                            <Card.Text className='d-flex gap-3 align-items-center m-0 color-tertiary'>
                            {venue.meta.wifi ? (
                                    <span title="We have WiFi">
                                    <FaWifi aria-label="WiFi" color="blue" />
                                    </span>
                                ): (
                                    <span title="Sorry, we don't have WiFi">
                                    <FaWifi aria-label="No WiFi" color="gray" />
                                    </span>
                                )}
                                {venue.meta.parking ? (
                                    <span title="We have parking">
                                    <FaParking aria-label="Parking" color="blue" />
                                    </span>
                                ): (
                                    <span title="Sorry, we don't have parking">
                                    <FaParking aria-label="No Parking" color="gray" />
                                    </span>
                                )}
                                {venue.meta.breakfast ? (
                                    <span title="We serve breakfast">
                                    <FaCoffee aria-label="Breakfast" color="blue" />
                                    </span>
                                ): (
                                    <span title="Sorry, we don't serve breakfast">
                                    <FaCoffee aria-label="No Breakfast" color="gray" />
                                    </span>
                                )}
                                {venue.meta.pets ? (
                                    <span title="Pets are welcome">
                                    <FaDog aria-label="Pets" color="blue" />
                                    </span>
                                ): (
                                    <span title="Sorry, pets are not welcome">
                                    <FaDog aria-label="No Pets" color="gray" />
                                    </span>
                                )}
                            </Card.Text>
                            <Card.Text className='fs-5 text-center fw-bold py-3  m-0'>
                                <span className='fs-6 pe-2'>Price, per night: </span>{`${venue.price} kr`}
                            </Card.Text>
                            <Card.Text>{venue.description}</Card.Text>
                            <Button type="button" className='btn-sm' variant='primary'>Book venue Today</Button>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>{venue.created}</Card.Text>
                        </Card.Footer>
                    </Card>
                    <SharedCarousel items={items} />
                </Container>
                </>
            ) : <h2>Loading.. </h2>}
        </div>
    )
}
