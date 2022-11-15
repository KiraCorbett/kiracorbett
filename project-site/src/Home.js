import robots from './images/robots.png';
import rhizome from './images/rhizome.jpg';
import crow from './images/crow.png';
import gbwBike from './images/gbw-bike.jpg';
import background from './images/background.jpg';
import wallpaper from './images/wallpaper.jpg';

import './Home.css'
import LandingImage from './components/LandingImage';
import FeaturedComponent from './components/FeaturedComponent';
import Panel from './components/Panel';

import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className="home">
      <LandingImage image={background} left={"Design"} mid={"HCI Researcher"} right={"Developer"}/>

      <div className="projects">
        <h1>Featured Projects</h1>
          
          <Panel heading={"Synthesis: An Autodesk Technology"} video={"https://www.youtube.com/embed/MEW_JCmHTo0"} description={"Built by students, for students, Synthesis is an open source simulator used to design, test, and experiment with 3D CAD models."} link={"http://synthesis.autodesk.com"} btnTitle={"Synthesis Website"} skills={"C# | Python | Unity | UX | Project Management"} />

          <Panel heading={"Rhizome: Towards and Information Centric OS Shell"} image={rhizome} description={"Rhizome is an information-centric model that uses different interaction methods than traditional desktop systems to measure the cognitive load each OS shell has on a its users. The results indicate that people were 60% more efficient on average in completing their task using Rhizome instead of a traditional WIMP model."} link={"https://ir.library.oregonstate.edu/concern/honors_college_theses/3t945z87r"} btnTitle={"Oregon State University Thesis"} skills={"Flutter SDK | Dart | User Research | Human-Computer Interaction"} />

          <Panel heading={"Costa Rica: Nature & Cultural Immersion"} video={"https://www.google.com/maps/embed?pb=!4v1577667882368!6m8!1m7!1sCAoSLEFGMVFpcFBoeDl4QmR6NUpxcHQteUdSR2VHS3YweVJnRnJsZFhmZ0FCd2VC!2m2!1d8.540835399999999!2d-83.57096399999999!3f17.629331880410597!4f-9.639552171459115!5f0.7820865974627469"} description={"As a computer science major, I wanted a way to provide a diverse perspective to my current skills and thinking. To accomplish this, I decided to study in Costa Rica to capture the experiences on family farms and ecosystems. This project documents our geographical class explorations and through immersive 360 photo spheres."} link={"https://kiracorbett.github.io/costa-rica/"} btnTitle={"Costa Rica Mapping"} skills={"Adobe Premiere Pro & Photoshop | CAD | Content Creation"} />

          <Panel heading={"Entrepreneurship"} image={crow} description={"Starting my first eCommerce at age 12 to working at a non-profit, Dirty Freehub creating route guides for cyclists to putting on the local race Best of Both."} link={"#"} btnTitle={"LINK"} skills={"Adobe Premiere Pro & Photoshop | CAD | Content Creation"} />

        </div>

      {/* <div className="skills">
        <h3>Dev</h3>
        <h3>Design</h3>
        <h3>eCommerce</h3>
      </div> */}

      {/* <div className="project2">
        <LandingImage image={wallpaper}/>
      </div>
      <div className="project3">
        <LandingImage image={wallpaper}/>
      </div>
      <div className="awards">
        <h1>Awards & Publications</h1>
        <FeaturedComponent image={gbwBike} title="2022 Oregon XC Champion" subtitle={"Cross Country Mountain Biking"}/>
        <FeaturedComponent image={gbwBike} title="National Runner-Up Aspirations in Computing" subtitle={"National Center for Women in Information Technology"} skills={"2019"}/>
        <FeaturedComponent image={gbwBike} title="Scholar" subtitle={"Grace Hopper Celebration"} skills={"2019"}/>
        <FeaturedComponent image={gbwBike} title="Aspirations in Computing" subtitle={"National Center for Women in Information Technology"} skills={"2016 | 2017 | 2018 | 2019"}/>
      </div> */}
      {/* <div className="about">
        <p>Some lorem ipsum text for now because that works. Lorem ipsum.</p>
      </div> */}
    </div>
  )
}

export default Home;