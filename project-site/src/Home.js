import bike from './images/gbw-bike.jpg';
import crow from './images/crow.png';
import background from './images/background.jpg';
import FeaturedComponent from './components/FeaturedComponent';

import './Home.css'
import LandingImage from './components/LandingImage';

const Home = () => {
  return (
    <div className="home">
    {/* <div className="landing">
      <img src={bike} alt="bike"/>
    </div> */}
      <LandingImage />
      <div className="featured">
        <h1>Featured Projects</h1>
        <FeaturedComponent image={bike} title={"bike"}/>
        <FeaturedComponent image={crow} title={"bike"}/>
        <FeaturedComponent image={background} title={"background"}/>
      </div>
      <div className="skills">
        <h3>Dev</h3>
        <h3>Design</h3>
        <h3>eCommerce</h3>
      </div>
      <div className="awards">
        <h3>Awards & Publications</h3>
      </div>
      <div className="about">
        <p>Some lorem ipsum text for now because that works. Lorem ipsum.</p>
      </div>
    </div>
  )
}

export default Home;