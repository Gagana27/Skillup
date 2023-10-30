import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RazorPay from './RazorPay';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams , useLocation } from 'react-router-dom';

function Subscription() {

  const { categoryId,subcategoryId } = useParams();
  // const [subcategories, setSubcategories] = useState([]);
  const [cart, setCart] = useState([]);

  const location  = useLocation();
  const Data = location.state;

  console.log("demo",Data);
  console.log("demmmmmm",cart);

  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get("http://localhost:5000/cart");
      setCart(response.data);
      console.log("state",response.data)
    }
    fetchSubcategories();

  }, [categoryId,subcategoryId]);

  return (
    <>
      <div>
        <Row xs={1} md={4} className="g-4" style={{
          height: 500,
          background: "LightGrey",
          justifyContent: "center",
          
        }}>
           {cart?.map(cart => (
            <Col key={cart._id}>
              {/* <Link to={`/categories/${cart._id}/subcategories`}> */}

                 <Card
                  className="bg-secondary border-primary border-4 m-4 "
                  border="warning"
                  style={{ width: '28rem', height: '12rem' }}>

                   <Card.Img
                    variant="top"
                    // className="w-full h-40 object-cover"
                    style={{ height: '135px', width: '100%' }}
                    src={cart?.image}
                  />
                
                  <Card.Body style={{ height: '50px' }}>
                    <Card.Text className="text-white">
                      {cart.courseName}
                      {cart.priceDetails}
                      {cart.description}

                    </Card.Text>&nbsp;
                  </Card.Body>
                </Card>
                {/* </Link> */}
            </Col>
          ))} 

          {/* {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

            }}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                   {coursename}
                  </Card.Text>
                </Card.Body>
                <RazorPay />
              </Card>
            </Col>
          ))} */}
        </Row>
      </div>
    </>
  );
}

export default Subscription;
