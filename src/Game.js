import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const Game = () => {
  const [selectedPrize, setSelectedPrize] = useState('');

  const prizes = ['Gold', 'Silver', 'Bronze'];

  const handlePrizeClick = (prize) => {
    setSelectedPrize(prize);
  };

  return (
    <section id="game" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Game and Prizes</h2>
        <div className="text-center">
          <p>Click on a prize to change its display:</p>
          <div className="prizes">
            {prizes.map((prize, index) => (
              <Button
                key={index}
                variant={selectedPrize === prize ? 'dark' : 'outline-dark'}
                className="mr-2"
                onClick={() => handlePrizeClick(prize)}
              >
                {prize} Prize
              </Button>
            ))}
          </div>
          <div className={`prize-display ${selectedPrize.toLowerCase()}`}>
            {selectedPrize && <p>Congratulations to the {selectedPrize} Prize winner!</p>}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Game;
