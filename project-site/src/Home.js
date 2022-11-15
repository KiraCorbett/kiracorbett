import robots from './images/robots.png';
import rhizome from './images/rhizome.jpg';
import crow from './images/crow.png';
import gbwBike from './images/gbw-bike.jpg';
import background from './images/background.jpg';
import wallpaper from './images/wallpaper.jpg';

import './Home.css'
import LandingImage from './components/LandingImage';
import FeaturedComponent from './components/FeaturedComponent';

import React from 'react';
import Button from 'react-bootstrap/Button';

// const styles = StyleSheet.create({
//   imageStyle: {
//     width: 700,
//     height: 400,
//   }
// })


const Home = () => {
  return (
    <div className="home">
      <LandingImage image={background} left={"Design"} mid={"HCI Researcher"} right={"Developer"}/>

      <div className="projects">
        <h1>Featured Projects</h1>
          
        <div className="project1">
          <h3>Synthesis: An Autodesk Technology</h3>
          <div className="project1-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MEW_JCmHTo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="project1-info">
            <p className="p1">Built by students, for students, Synthesis is an open source simulator used to design, test, and experiment with 3D CAD models.</p>
            <Button href="http://synthesis.autodesk.com" variant="light" className="btn-light">
              Synthesis Website
            </Button>
            <p className="p3">C# | Python | Unity | UX | Project Management</p>
          </div>
        </div>

      </div>

        {/* <div>
        <FeaturedComponent image={robots} title={"Synthesis: An Autodesk Technology"} subtitle={"Built by students, for students, Synthesis is an open source simulator used to design, test, and experiment with 3D CAD models."} skills={"C# | Python | Unity | UX | Project Management"}/>
        <FeaturedComponent image={rhizome} title={"Rhizome: Towards and Information Centric OS Shell"} subtitle={"Rhizome uses different interactions than traditional desktop systems like WIMP. Results indicate people were 60% more efficient on average."} skills={"Flutter SDK | Dart | User Research | Human-Computer Interaction"}/>
        <FeaturedComponent image={crow} title={"Entrepreneurship"} subtitle={"Starting my first eCommerce at age 12 to working at a non-profit, Dirty Freehub creating route guides for cyclists to putting on the local race Best of Both."} skills={"Adobe Premiere Pro & Photoshop | Content Creation"}/>
      </div> */}

      {/* <div className="skills">
        <h3>Dev</h3>
        <h3>Design</h3>
        <h3>eCommerce</h3>
      </div> */}

      <div className="project2">
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
      </div>
      <div className="about">
        <p>Some lorem ipsum text for now because that works. Lorem ipsum.</p>
      </div>
    </div>
  )
}

export default Home;