import crow from '../images/crow.png';
import './FeaturedComponent.css';

const FeaturedComponent = () => {
  return ( 
    <div className="gallery">
      <img src={crow} alt="crow logo" />
    </div>
   );
}
 
export default FeaturedComponent;