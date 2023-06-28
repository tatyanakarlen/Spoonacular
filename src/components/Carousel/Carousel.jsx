import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './Carousel.css';



export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls className="carousel-wrapper">
      {/* // own carousel item */}
      <div className="carousel-item active" itemId={1}>
          <div className="carousel-item-inner-content">
         
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" />
        <h1>SOME STUFF HERE</h1>
        </div>
      </div>

      {/* <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem> */}
      {/* // own carousel item */}
      <div className="carousel-item" itemId={2}>
          <div className="carousel-item-inner-content">
         
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" />
        <h1>SOME OTHER STUFF HERE</h1>
        </div>
      </div>

      {/* <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem> */}

      {/* <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem> */}
      {/* // own carousel item */}
      <div className="carousel-item" itemId={3}>
          <div className="carousel-item-inner-content">
         
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" />
        <h1>SOME OTHER OTHER STUFF HERE</h1>
        </div>
      </div>
     
    </MDBCarousel>
  );
}
