import React from 'react';
import PhotoGroup from './PhotoGroup';
import designers from '../json/designers.json'
import producers from '../json/producers.json'
import cinematography from '../json/cinematography.json'
import creative from '../json/creative.json'
import dance from '../json/dance.json'
import model from '../json/model.json'
import photo from '../json/photo.json'
import motion from '../json/motion.json'
import pr from '../json/pr.json'
import print from '../json/print.json'
import production from '../json/production.json'
import web from '../json/web.json'



const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      <div className="bg">
        {/* <div className="peopleTitle">People</div> */}
        <div className="subTitle">Producers</div>
        <PhotoGroup photos={producers }  />
        <div className="subTitle">Designers</div>
        <PhotoGroup photos={designers}  />
        <div className="subTitle">Creative</div>
        <PhotoGroup photos={creative}/>
        <div className="subTitle">Web</div>
        <PhotoGroup photos={web}/>
        <div className="subTitle">Print</div>
        <PhotoGroup photos={print}/>
        <div className="subTitle">Photo</div>
        <PhotoGroup photos={photo}/>
        <div className="subTitle">Motion</div>
        <PhotoGroup photos={motion}/>
        <div className="subTitle">Cinematography</div>
        <PhotoGroup photos={cinematography} />
        <div className="subTitle">Dance</div>
        <PhotoGroup photos={dance}/>
        <div className="subTitle">Model</div>
        <PhotoGroup photos={model}/>
        <div className="subTitle">PR</div>
        <PhotoGroup photos={pr}/>
        <div className="subTitle">Production</div>
        <PhotoGroup photos={production}/>
        {/* <div>
          <p>Not Pictured </p>
          <p>Natalia Ramirez Video & Camera Technician</p>
          <p>Hannah Wyatt Video & Camera Technician</p>
          <p>Ethan Huang Web Developer</p>
          <p>Camille Chandler </p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          
        </div> */}
      </div>
      
    </div>
  );
};

export default PhotoGallery;
