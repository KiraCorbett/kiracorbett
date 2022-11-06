import crow from '../images/crow.png';
import './FeaturedComponent.css';

const FeaturedComponent = ({ image, title }) => {
  return ( 
    <div className="gallery">
      <h3>{title}</h3>
      <img src={image} alt="project" />
    </div>
   );
}
 
export default FeaturedComponent;