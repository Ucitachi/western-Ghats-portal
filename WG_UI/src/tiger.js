import React from 'react';
import './WGstyling.css'; 
import Hero from './Hero';// Import your CSS file for styling

class TigerComponent extends React.Component {
  render() {
    return (
      <div className="fullscreen-image">
        <Hero/>
        <img
          src="tiger.jpg"
          alt="Example Image"
          className="cropped-image"
        />
      </div>
    );
  }
}

export default TigerComponent;
