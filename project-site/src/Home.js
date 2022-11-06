import robots from './images/robots.png';
import rhizome from './images/rhizome.jpg';
import crow from './images/crow.png';

import './Home.css'
import LandingImage from './components/LandingImage';
import FeaturedComponent from './components/FeaturedComponent';

const Home = () => {
  return (
    <div className="home">
    {/* <div className="landing">
      <img src={bike} alt="bike"/>
    </div> */}
      <LandingImage />
      <div className="featured">
        <h1>Featured Projects</h1>
        <FeaturedComponent image={robots} title={"Synthesis: An Autodesk Technology"} subtitle={"Built by students, for students, Synthesis is an open source simulator used to design, test, and experiment with 3D CAD models."} skills={"C# | Python | Unity | UX | Project Management"}/>
        <FeaturedComponent image={rhizome} title={"Rhizome: Towards and Information Centric OS Shell"} subtitle={"Rhizome uses different interactions than traditional desktop systems like WIMP. Results indicate people were 60% more efficient on average."} skills={"Flutter SDK | Dart | User Research | Human-Computer Interaction"}/>
        <FeaturedComponent image={crow} title={"Entrepreneurship"} subtitle={"Starting my first eCommerce at age 12 to working at a non-profit, Dirty Freehub creating route guides for cyclists to putting on the local race Best of Both."} skills={"Adobe Premiere Pro & Photoshop | Content Creation"}/>
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