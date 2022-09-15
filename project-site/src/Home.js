import Figure from 'react-bootstrap/Figure';

import './Home.css'
import crow from './images/crow.png';

const Home = () => {
  return (
    <div className="home">
      <img src={crow} alt="crow logo" />
      <div>
        <h1>Software Developer</h1>
        <h1>HCI Researcher</h1>
        <h1>Athlete</h1>
      </div>
      <div className="projects">
        <h1>Featured Projects</h1>
        <img src={crow} alt="crow logo" />
        <img src={crow} alt="crow logo" />
        <img src={crow} alt="crow logo" />
      </div>
      <div className="skills">
      {/* <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={crow}
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={crow}
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure> */}
        <h3>Dev</h3>
        <h3>Design</h3>
        <h3>eCommerce</h3>
      </div>
      <div className="awards">
        <h3>Awards & Publications</h3>
        <img src={crow} alt="crow logo" />
        <img src={crow} alt="crow logo" />
        <img src={crow} alt="crow logo" />
      </div>
      <div className="about">
        <p>Some lorem ipsum text for now because that works. Lorem ipsum.</p>
      </div>
    </div>
  )
}

export default Home;