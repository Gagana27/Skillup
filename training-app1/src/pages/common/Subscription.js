import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RazorPay from './RazorPay';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

function Subscription() {

  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get(`http://localhost:5000/categories/${categoryId}/subcategories`);
      setSubcategories(response.data);
      // console.log("state",subcategories)
    }
    fetchSubcategories();
    
  }, [categoryId]);

  return (
    <>
      <div>
        <Row xs={1} md={2} className="g-4">
        {/* {subcategories.map(subcategory => (
            <Col key={subcategory._id}>
                 <Card
                  className="bg-secondary border-primary border-4 m-4 "
                  border="warning"
                  style={{ width: '28rem', height: '12rem' }}>
                  <Card.Img
                    variant="top"
                    style={{ height: '135px', width: '100%' }}
                    src={subcategory?.image}
                  />

                  <Card.Body style={{ height: '50px' }}>
                    <Card.Text className="text-white">
                      {subcategory.name}
                      - Rs. {subcategory.price}
                    </Card.Text>&nbsp;
                  </Card.Body>
                </Card>
            </Col>
          ))} */}
          
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <RazorPay />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Subscription;
