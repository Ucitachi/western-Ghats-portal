import React from 'react';
import '../WGstyling.css'; 
import Hero from './Hero';// Import your CSS file for styling

class TigerComponent extends React.Component {
  render() {
    return (
      <div className="fullscreen-image">
        <Hero/>
        <img
          src="https://images.unsplash.com/photo-1602491453439-8f207298a202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="Example Image"
          className="cropped-image"
        />
      </div>
    );
  }
}

export default TigerComponent;
