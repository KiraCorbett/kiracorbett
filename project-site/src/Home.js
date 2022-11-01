import bike from './images/gbw-bike.jpg';
import FeaturedComponent from './FeaturedComponent';

import './Home.css'

const Home = () => {
  return (
    <div className="home">
    <div className="landing">
      <img src={bike} alt="bike"/>
    </div>
      <div className="elements">
        <h1>Software Developer</h1>
        <h1>HCI Researcher</h1>
        <h1>Athlete</h1>
      </div>
      <div className="featured">
        <h1>Featured Projects</h1>
        <FeaturedComponent />
        <FeaturedComponent />
        <FeaturedComponent />
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