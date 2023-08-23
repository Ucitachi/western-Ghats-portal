import React, { useState } from 'react';
import './FarewellPage.css';

const FarewellPage = () => {
  const [selectedPrize, setSelectedPrize] = useState('');

  const seniors = [
    { name: 'Senior 1', image: 'rahul.jpg' },
    { name: 'Senior 1', image: 'rahul.jpg' },
    { name: 'Senior 1', image: 'rahul.jpg' },
    { name: 'Senior 1', image: 'rahul.jpg' },
    { name: 'Senior 2', image: 'rahul.jpg' },
    { name: 'Senior 2', image: 'rahul.jpg' },
    { name: 'Senior 2', image: 'rahul.jpg' },
    { name: 'Senior 2', image: 'rahul.jpg' },
    // Add more seniors
  ];

  const prizes = ['Gold', 'Silver', 'Bronze'];

  const handlePrizeClick = (prize) => {
    setSelectedPrize(prize);
  };

  return (
    <div className="farewell-page">
      <div className="welcome-section">
        <img src="/welcome-bg.jpg" alt="Welcome" className="welcome-bg" />
        <div className="welcome-content">
          <h1 className="college-name">MSRIT</h1>
          <h2 className="branch">MCA</h2>
          <h3 className="year">Class of 2023</h3>
        </div>
      </div>

      <div className="container">
        <h1 className="mt-4">Seniors Farewell</h1>
        <p>Join us in bidding farewell to our beloved seniors!</p>

        <div className="row">
          {seniors.map((senior, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={senior.image} className="card-img-top" alt={senior.name} />
                <div className="card-body">
                  <h5 className="card-title">{senior.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h3>Game Scores and Prizes</h3>
          <p>Click on a prize to change its display:</p>
          <div className="prizes">
            {prizes.map((prize, index) => (
              <button
                key={index}
                className={`btn btn-outline-dark ${selectedPrize === prize ? 'active' : ''}`}
                onClick={() => handlePrizeClick(prize)}
              >
                {prize} Prize
              </button>
            ))}
          </div>
          <div className={`prize-display ${selectedPrize.toLowerCase()}`}>
            {selectedPrize && <p>Congratulations to the {selectedPrize} Prize winner!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarewellPage;
