import React from 'react';
import './PhotoGroup.css';

const PhotoGroup = ({ photos, title }) => {
  return (
    <div className="photo-group-container" key={Math.random()}>
      <div className="photo-group-title">
        <h2>{title}</h2>
      </div>
      <div className="photo-group">
        {photos.map((photo, index) => (
          <div className="photo-wrapper" key={index}>
            <img src={photo.image} alt={photo.title} />
            <div className="photo-description">
              <p>{photo.description.line1}</p>
              <p>{photo.description.line2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGroup;
