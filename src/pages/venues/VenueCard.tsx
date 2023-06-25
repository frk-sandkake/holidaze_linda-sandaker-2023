import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaWifi, FaParking, FaCoffee, FaDog, FaStar } from 'react-icons/fa';
import { VenueResponse } from '../../redux/types';
import { useState } from 'react';

interface VenueCardProps {
    venue: VenueResponse;
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
    const {id, name, media, price, rating, meta, location } = venue;
const [isViewed, setIsViewed] = useState(false)

    return (
        <Link to={venue.id} key={venue.id} className='text-decoration-none mx-auto' onClick={() => setIsViewed(isViewed)}>
        <Card key={id} className='h-100 shadow-sm' >
            <Card.Img variant='top' src={media[0]} height='164px' style={{ objectFit: "cover"}}/>
            <Card.Body className='d-flex flex-column justify-content-between pb-4 pt-2'>
                <Card.Text title='Rating' className="fs-6 d-flex gap-2 align-items-center m-0"><FaStar aria-label="Star" className='text-warning'/> {rating}</Card.Text>
                <Card.Title className='fs-5 fw-semibold'>{name}</Card.Title>
                <Card.Text className='fs-small m-0 color-tertiary'>{`Location: ${location.city}, ${location.country}`}</Card.Text>
                <Card.Text className='d-flex gap-3 align-items-center m-0 color-tertiary'>
                {meta.wifi ? (
                        <span title="We have WiFi">
                        <FaWifi aria-label="WiFi" color="blue" />
                        </span>
                    ): (
                        <span title="Sorry, we don't have WiFi">
                        <FaWifi aria-label="No WiFi" color="gray" />
                        </span>
                    )}
                      {meta.parking ? (
                        <span title="We have parking">
                        <FaParking aria-label="Parking" color="blue" />
                        </span>
                    ): (
                        <span title="Sorry, we don't have parking">
                        <FaParking aria-label="No Parking" color="gray" />
                        </span>
                    )}
                    {meta.breakfast ? (
                        <span title="We serve breakfast">
                        <FaCoffee aria-label="Breakfast" color="blue" />
                        </span>
                    ): (
                        <span title="Sorry, we don't serve breakfast">
                        <FaCoffee aria-label="No Breakfast" color="gray" />
                        </span>
                    )}
                    {meta.pets ? (
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
                    <span className='fs-6 pe-2'>Price, per night: </span>{`${price} kr`}</Card.Text>
            </Card.Body>
        </Card>
        </Link>
    )
};
