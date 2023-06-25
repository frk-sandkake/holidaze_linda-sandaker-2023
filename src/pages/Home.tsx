import { Col, Row } from "react-bootstrap";
import SharedCarousel, { CarouselItemProps } from "../components/Carousel";
import { Link } from "react-router-dom";


export default function Home() {

  const items: CarouselItemProps[] = [
    {
      interval: 2000,
      src: "/public/images/7.png",
      alt: "First slide",
      title: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      interval: 2000,
      src: "/public/images/2.png",
      alt: "Second slide",
      title: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      interval: 2000,
      src: "/public/images/3.png",
      alt: "Third slide",
      title: "Third slide label",
      caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  return (
      <Row className="gap-2">
       <Col>
      <h1>Welcome to Holidaze!</h1>
      <p>
        Holidaze is a web application for finding and booking holiday venues.
      </p>
      <Link to="/venues" className="btn btn-primary">
        View Venues
      </Link>
      </Col>
       <Col className="" >
          <SharedCarousel items={items} />
        </Col>
      </Row>
  );
}

