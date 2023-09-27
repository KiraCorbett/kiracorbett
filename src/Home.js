import rhizome from './images/rhizome.jpg';
import crow from './images/crow.png';
import gravel from './images/gravel.jpg';
import bob from './images/best-of-both.jpg';
import gbw from './images/gbw-bike.jpg';
import content from './images/content.png';
import team from './images/team-up.png';
import dark from './images/dark.png';
import wellsaver from './images/wellsaver.png'
import bsocial from './images/bob-social.png';
import cbd from './images/cool-cream.jpg';
import mint from './images/mint-tincture.jpg';
import tropical from './images/tropical-tincture.jpg';
import fractals from './images/fractals.jpg';
import abstraction from './images/background-abstract2.png';
import linkedin from './images/linkedin.png';
import github from './images/Octocat.png';
import logo from './images/logo.png';
import flying from './images/flying.jpeg';

import './Home.css'
import LandingImage from './components/LandingImage';
import LandingTitle from './components/LandingTitle';
import Panel from './components/Panel';
import FeaturedComponent from './components/FeaturedComponent';

import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <img src={flying}></img>
      <h1>Software Consulting</h1>
      {/* <div className="socials">
        <a href="https://www.linkedin.com/in/kira-corbett/" target="_blank"><img src={linkedin} /></a>
        <a href="https://github.com/KiraCorbett" target="_blank"><img src={github} /></a>
      </div>

      <div className="projects">
        <h1>Web and eCommerce services for small businesses.</h1>
      </div>

      <div className="contact">
        <p>Email: kiracorbett00@gmail.com</p>
        <p>GitHub: @KiraCorbett</p>
      </div> */}
    </div>
  )
}

export default Home;