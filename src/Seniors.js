   
    
    import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Seniors = () => {
  const [activeCards, setActiveCards] = useState([]);

  const seniors = [
    // ... (your data)
    { name: 'Abhijeet', image: './images/abhijit.jpg', price: 'price :0 ' },
    { name: 'Abhishek', image: './images/abhishek.jpg', price: 'price : 0' },
    { name: 'Aditya paul', image: './images/aditya_paul.jpg', price: 'price:0' },
    { name: 'Aditya Raj', image: './images/aditya.jpg', price: 'price:0' },
    { name: 'Aiman', image: './images/aiman.jpg', price: 'price:0' },
    { name: 'Ajay', image: './images/ajay.jpg', price: 'price: 09' },
    { name: 'Ankitha', image: './images/ankita.jpg', price: 'price: 03' },
    { name: 'Anup', image: './images/anup.jpg', price: 'price:0' },
    { name: 'Ashok Kumar', image: './images/Ashoka.jpg', price: 'price:0' },
    { name: 'Ashok mahala', image: './images/ashokc.jpg', price: 'price:  08' },
    { name: 'Ayush', image: './images/Ayush.jpg', price: 'price: 04' },
    { name: 'Chetan', image: './images/chetan.jpg', price: 'price:0' },
    { name: 'Chhaya', image: './images/chaya.jpg', price: 'price:0' },
    { name: 'Darshan', image: './images/darshan.jpg', price: 'price: 02' },
    { name: 'Deep narayan', image: './images/deepun.jpg', price: 'price:0' },
    { name: 'Deepu', image: './images/deepu.jpg', price: 'price: 08' },
    { name: 'Divya', image: './images/divya.jpg', price: 'price: 09' },
    { name: 'G Janaki', image: './images/gjanaki.jpg', price: 'price:0' },
    { name: 'Gandluri Navya', image: './images/navya.jpg', price: 'price:0' },
    { name: 'Hrithik', image: './images/hritik.jpg', price: 'price:0' },
    { name: 'K Hindu', image: './images/hindu.jpg', price: 'price:0' },
    { name: 'Kushalappa', image: './images/kushalappa.jpg', price: 'price:0' },
    { name: 'Lakshmi', image: './images/lakshmi.jpg', price: 'price:0' },
    { name: 'Lavanya', image: './images/lavanya.jpg', price: 'price: 06' },
    { name: 'Likhitha', image: './images/likhita.jpg', price: 'price: 03' },
    { name: 'Madasa Akanksha', image: './images/madasa.jpg', price: 'price:0' },
    { name: 'Mahendra', image: './images/mahendra.jpg', price: 'price:0' },
    { name: 'Manasi', image: './images/manasi.jpg', price: 'price:0' },
    { name: 'Manohar', image: './images/manohar.jpg', price: 'price:0' },
    { name: 'Zaheen', image: './images/zahin.jpg', price: 'price:  07' },
    { name: 'Wasim', image: './images/wasim.jpg', price: 'price:0' },
    { name: 'Monisha', image: './images/monisha.jpg', price: 'price:0' },
    { name: 'Mounika', image: './images/monika.jpg', price: 'price:0' },
    { name: 'Neha', image: './images/neha.jpg', price: 'price: 10' },
    { name: 'Nehal', image: './images/nehal.jpg', price: 'price: 03' },
    { name: 'Nikhil', image: './images/nikhil.jpg', price: 'price:0' },
    { name: 'Niranjan', image: './images/Niranjan.jpg', price: 'price:0' },
    { name: 'Nisha', image: './images/nisha.jpg', price: 'price:0' },
    { name: 'Prajwal', image: './images/prajwal.jpg', price: 'price:0' },
    { name: 'Priya', image: './images/priya.jpg', price: 'price:  03' },
    { name: 'Ramesh', image: './images/ram.jpg', price: 'price:  07' },
    { name: 'Reena', image: './images/reena.jpg', price: 'price:0' },
    { name: 'Reshma', image: './images/reshma.jpg', price: 'price:  03' },
    { name: 'Sadath', image: './images/sadat.jpg', price: 'price:0' },
    { name: 'Sahana', image: './images/sahana.jpg', price: 'price:  10' },
    { name: 'Sonam', image: './images/sonam.jpg', price: 'price: 1' },
    { name: 'Sharat', image: './images/sharat.jpg', price: 'price:  05' },
    { name: 'Sharmila', image: './images/sharmila.jpg', price: 'price:0' },
    { name: 'Shashank', image: './images/shashank.jpg', price: 'price:0' },
    { name: 'Shonit', image: './images/Sonit.jpg', price: 'price:0' },
    { name: 'Shravan', image: './images/shravan.jpg', price: 'price:  04' },
    { name: 'Sheyans', image: './images/shreyas.jpg', price: 'price:  03' },
    { name: 'Shubham', image: './images/Shubam.jpg', price: 'price:  06' },
    { name: 'Shweta', image: './images/shweata.jpg', price: 'price:0' },
    { name: 'Simran', image: './images/simran.jpg', price: 'price:  07' },
    { name: 'Smriti', image: './images/smriti.jpg', price: 'price:0' },
    { name: 'Swapnil', image: './images/swapnil.jpg', price: 'price:0' },
    { name: 'Varshitha', image: './images/varshita.jpg', price: 'price: 02' },
    { name: 'Vasantha', image: './images/vasanta.jpg', price: 'price:  05' },
    { name: 'Y Swetha', image: './images/swata.jpg', price: 'price:  11' },
  ];

  const handleCardClick = (index) => {
    if (activeCards.includes(index)) {
      setActiveCards(activeCards.filter((cardIndex) => cardIndex !== index));
    } else {
      setActiveCards([...activeCards, index]);
    }
  };

  
  return (
    <section id="seniors" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Biddings</h2>
        <Row className="justify-content-center">
          {seniors.map((senior, index) => (
            <Col key={index} xs={6} md={3} lg={2} className="mb-3">
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
                  <Card.Text className='pri'>{senior.price}</Card.Text>
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
