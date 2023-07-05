import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Carousel.css';
import asparagusSalad from '../../Assets/asparagus-salad.jpeg';
import cauliflowerRice from '../../Assets/Cauliflower-rice.jpg';
import berrySmoothie from '../../Assets/berrySmoothie.jpeg';

export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls className="carousel-wrapper">
      <div className="carousel-item active" itemID={1}>
        <div className="carousel-item-inner-content">
          <div className="carousel-img-container">
            <img src={asparagusSalad} />
            <h5 className="highlight">Vegan</h5>
          </div>
          <div className="carousel-inner-text">
            <Link className="carousel-links" to={'/recipes/782585'}>
              <h2>Cannellini Bean and Asparagus Salad with Mushrooms</h2>
            </Link>

            <p>
              Delight your taste buds with a satisfying Cannellini Bean and
              Asparagus Salad, featuring tender asparagus, hearty cannellini
              beans, and savory mushrooms for a delightful burst of flavors.
            </p>
          </div>
        </div>
      </div>

      <div className="carousel-item" itemID={2}>
        <div className="carousel-item-inner-content">
          <div className="carousel-img-container">
            <img src={cauliflowerRice} />
            <h5 className="highlight">Plant based</h5>
          </div>
          <div className="carousel-inner-text">
            <Link className="carousel-links" to={'/recipes/716426'}>
              <h2>Cauliflower, Brown Rice, and Vegetable Fried Rice</h2>
            </Link>
            <p>
              Experience a flavorful fusion of nutritious cauliflower, hearty
              brown rice, and a vibrant medley of vegetables in our delectable
              Cauliflower, Brown Rice, and Vegetable Fried Rice.
            </p>
          </div>
        </div>
      </div>

      <div className="carousel-item" itemID={3}>
        <div className="carousel-item-inner-content">
          <div className="carousel-img-container">
            <img src={berrySmoothie} />
            <h5 className="highlight">Breakfast</h5>
          </div>
          <div className="carousel-inner-text">
            <Link className="carousel-links" to={'/recipes/715497'}>
              <h2>Berry Banana Breakfast Smoothie</h2>
            </Link>
            <p>
              Energize your morning with a delicious breakfast smoothie! Indulge
              in the refreshing blend of ripe berries and creamy bananas with
              our irresistible berry banana smoothie that's bursting with
              antioxidants and natural goodness.
            </p>
          </div>
        </div>
      </div>
    </MDBCarousel>
  );
}
