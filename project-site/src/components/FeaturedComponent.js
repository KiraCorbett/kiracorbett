import crow from '../images/crow.png';
import './FeaturedComponent.css';

const FeaturedComponent = ({ image, title, subtitle, skills }) => {
  return ( 
    <div className="gallery">
      <h3>{title}</h3>
      <h5>{subtitle}</h5>
      <img src={image} alt="project" />
      <p>{skills}</p>
    </div>
   );
}
 
export default FeaturedComponent;