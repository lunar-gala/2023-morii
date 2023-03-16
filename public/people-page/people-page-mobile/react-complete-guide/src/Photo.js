import React from "react";
import PropTypes from "prop-types";

const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <img src={photo.imageUrl} alt={photo.description} />
      <div className="description">
        <p>{photo.description}</p>
        <p>{photo.description}</p>
      </div>
    </div>
  );
};

Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Photo;
