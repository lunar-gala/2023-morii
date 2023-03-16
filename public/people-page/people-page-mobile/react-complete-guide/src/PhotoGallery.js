import React from 'react';
import PhotoGroup from './PhotoGroup';

const photos = [
  {
    image: './assets/melody-huang.png',
    title: 'Photo 1',
    description: {
      line1: 'This is photo 1',
      line2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Photo 2',
    description: {
      line1: 'This is photo 2',
      line2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Photo 2',
    description: {
      line1: 'This is photo 2',
      line2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Photo 2',
    description: {
      line1: 'This is photo 2',
      line2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Photo 2',
    description: {
      line1: 'This is photo 2',
      line2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Photo 2',
    description: {
      line1: 'This is photo 2',
      line2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Photo 2',
    description: {
      line1: 'This is photo 2',
      line2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Photo 2',
    description: {
      line1: 'This is photo 2',
      line2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Photo 2',
    description: {
      line1: 'This is photo 2',
      line2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  
  // add more photos here
];

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      <PhotoGroup photos={photos} title="Group 1" />
      <PhotoGroup photos={photos} title="Group 2" />
      <PhotoGroup photos={photos} title="Group 3" />
    </div>
  );
};

export default PhotoGallery;
