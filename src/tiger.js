import React from 'react';
import './FarewellPage.css'; // Import your CSS file for styling

class ImageComponent extends React.Component {
  render() {
    return (
      <div className="fullscreen-image">
        <img
          src="https://t4.ftcdn.net/jpg/02/10/54/59/360_F_210545946_H8K0CJih9ToRMqbBczgr2BLWJYcrNb1V.jpg"
          alt="Example Image"
          className="cropped-image"
        />
      </div>
    );
  }
}

export default ImageComponent;
