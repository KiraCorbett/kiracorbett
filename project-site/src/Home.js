import Figure from 'react-bootstrap/Figure';
import FeaturedComponent from './FeaturedComponent';

import './Home.css'
import crow from './images/crow.png';

const Home = () => {
  return (
    <div className="home">
      <div className="elements">
        <h1>Software Developer</h1>
        <h1>HCI Researcher</h1>
        <h1>Athlete</h1>
      </div>
      <h1>Featured Projects</h1>
        <FeaturedComponent />
        <FeaturedComponent />
        <FeaturedComponent />
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