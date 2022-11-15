import './Panel.css';

import React from 'react';
import Button from 'react-bootstrap/Button';

const Panel = ({ heading, video, image, description, link, btnTitle, skills }) => {
  const isImage = image;

  return (
    <div className="projects">
      <div className="project1">
        <h3>{heading}</h3>
        <div className="project1-video">
          {
            isImage && <img src={image} />
          }
          { 
            !isImage && <iframe width="560" height="315" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          }
        </div>
        <div className="project1-info">
          <p>{description}</p>
          <Button href={link} variant="light" className="btn-light">
            {btnTitle}
          </Button>
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );
}

export default Panel;