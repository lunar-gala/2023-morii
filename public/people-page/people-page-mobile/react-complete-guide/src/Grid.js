import React from 'react';
import './Grid.css';



const Grid = ({pictures}) => (
  <div className="grid">
    {pictures.map(picture => (
      <img key={picture.id} src={picture.src} alt={picture.alt} className="grid-item" />
    ))}
  </div>
);

export default Grid;

