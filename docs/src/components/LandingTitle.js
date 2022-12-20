import './LandingTitle.css';

import React from 'react';

const LandingTitle = ({ image, mid }) => {
  return (
    <div className="title-elements" style={{ backgroundImage:`url(${image})` } }>
        <h1>{mid}</h1>
    </div>
  );
}

export default LandingTitle;