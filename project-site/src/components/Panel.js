import './Panel.css';

import React from 'react';
import Button from 'react-bootstrap/Button';

const Panel = ({ heading, video, image, description, link, btnTitle, skills }) => {
  const isImage = image;

  return (
    <div className="projects">
      <div className="project1">
        <h3>{heading}</h3>
        {
          isImage && <img src={image} />
        }
        { 
          !isImage && <div className="project1-video"><iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        }
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