import crow from './images/crow.png';
import './FeaturedComponent.css';

const FeaturedComponent = () => {
  return ( 
    <div className="featured">
      <div className="projects">
        <div className="gallery">
          <img src={crow} alt="crow logo" />
        </div>
      </div>
    </div>
   );
}
 
export default FeaturedComponent;