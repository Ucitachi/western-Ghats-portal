   
    
import React, { useState } from 'react';
import './WGstyling.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Seniors = () => {
  const [activeCards, setActiveCards] = useState([]);

  const seniors = [
    // ... (your data)
    { name: 'Least-Concern', image: './images/abhijit.jpg', price: 'price :0 ' },
    { name: 'Near-Threatened', image: './images/abhishek.jpg', price: 'price : 0' },
    { name: 'Vulnerable', image: './images/aditya_paul.jpg', price: 'price:0' },
    { name: 'Endangered', image: './images/aditya.jpg', price: 'price:0' },
    { name: 'Critically-Endangered', image: './images/aiman.jpg', price: 'price:0' },
    { name: 'Extinct', image: './images/ajay.jpg', price: 'price: 09' },
   
  ];

  const handleCardClick = (index) => {
    if (activeCards.includes(index)) {
      setActiveCards(activeCards.filter((cardIndex) => cardIndex !== index));
    } else {
      setActiveCards([...activeCards, index]);
    }
  };

  //<section> element is a standard HTML element used to create separate sections or divisions within a webpage. 
  //A <Container> component from Bootstrap is used to contain the content within the section. It helps in managing the layout and responsive design.
  //A <Row> component is used to create a row of columns. The class justify-content-center centers the columns horizontally within the row.
  //Within this loop, it seems that the code is mapping over an array called seniors. For each senior in the array, it's creating a Bootstrap <Col> (column) component. 
  //The key attribute is set to the index of the map to help React keep track of the elements
  //<Card> component used to display content in a card-like format. 
  //The className attribute conditionally applies the class "senior-card active" if the current index is included in the activeCards array (not shown in this code). 
  //This is a common technique to dynamically apply styles based on certain conditions.the includes function if the index exists or not.

  return (
    <section id="seniors" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Red-list on Western Ghats</h2>
        <Row className="justify-content-center">
          {seniors.map((senior, index) => (
            <Col key={index} xs={4} md={4} lg={4} className=" mb-5">     
              <Card
                className={`senior-card ${activeCards.includes(index) ? 'active' : ''}`}
                onClick={() => handleCardClick(index)} 
              >
                <Card.Img
                  variant="top"
                  src={senior.image}
                  alt={senior.name}
                  className="senior-image"
                />
                <Card.Body className="text-center">
                  <Card.Title className='name'>{senior.name}</Card.Title>
                  {/* <Card.Text className='pri'>{senior.price}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Seniors;
