import { forwardRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export interface CarouselItemProps {
    interval?: number;
    src: string;
    alt: string;
    title?: string;
    caption?: string;
}

interface CarouselProps {
    items: CarouselItemProps[];
}

const SharedCarousel = forwardRef<HTMLDivElement, CarouselProps>(({ items }, ref) => {
    return (
        <Carousel >
            {items.map((item, index) => (
                <Carousel.Item ref={ref} key={index} className='shadow text-center' style={{maxHeight: '50vh'}}>
                <img className="img-fluid w-100" style={{ objectFit: "cover", maxHeight: '50vh'}} src={item.src} alt={item.alt} />
                <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
})

export default SharedCarousel;

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/public/images/2.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/public/images/2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/public/images/2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export {IndividualIntervalsExample};