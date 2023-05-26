import { Card, Button } from 'react-bootstrap'
import { VenueData } from "../types/VenueData"
import { Link } from 'react-router-dom'
import { FaWifi, FaParking, FaCoffee, FaDog, FaStar } from 'react-icons/fa';

interface VenueCardProps {
    venue: VenueData
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue }) =>
{ const {id, name, media, price, maxGuests, rating, meta, location } = venue;
    return (
        <Card key={id} className='h-100 shadow-sm' style={{maxWidth:'320px'}}>
            <Card.Img variant='top' src={media[0]} height='164px' style={{ objectFit: "cover"}}/>
            <Card.Body className='d-flex flex-column justify-content-between pb-4 pt-2'>
                <Card.Text title='Rating' className="fs-6 d-flex gap-2 align-items-center m-0"><FaStar aria-label="Star" className='text-warning'/> {rating}</Card.Text>
                <Card.Title className='fs-5 fw-semibold'>{name}</Card.Title>
                <Card.Text className='fs-small m-0 color-tertiary'>{`Location: ${location.city}, ${location.country}`}</Card.Text>
                <Card.Text className='d-flex gap-3 align-items-center m-0 color-tertiary'>
                <span>{`Max guests: ${maxGuests}`}</span>
                    {meta.wifi && (
                        <span title="We have WiFi">
                        <FaWifi aria-label="WiFi" />
                        </span>
                    )}
                    {meta.parking && (
                        <span title="We have parking">
                        <FaParking aria-label="Parking" />
                        </span>
                    )}
                    {meta.breakfast && (
                        <span title="We serve breakfast">
                        <FaCoffee aria-label="Breakfast" />
                        </span>
                    )}
                    {meta.pets && (
                        <span title="Pets are welcome">
                        <FaDog aria-label="Pets" />
                        </span>
                    )}
                </Card.Text>
                <Card.Text className='fs-5 text-center fw-bold py-3  m-0'>
                    <span className='fs-6 pe-2 fw-'>Price, per night: </span>{`${price} kr`}</Card.Text>
                <Link to={`/venues/${id}`} >
                    <Button variant='primary' className='w-100'>View Venue</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
