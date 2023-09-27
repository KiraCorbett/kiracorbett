import './LandingImage.css';

import React from 'react';

const LandingImage = ({ image, left, mid, right, logo }) => {
  return (
    <div className="elements" style={{ backgroundImage: `url(${image})` }}>
      <h1>{left}</h1>
      <h1>{mid}</h1>
      <h1>{right}</h1>
      <img src={logo}></img>
    </div>
  );
}

export default LandingImage;