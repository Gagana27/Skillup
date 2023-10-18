import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RazorPay from './RazorPay';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams, useLocation } from 'react-router-dom';

function MyCart() {
  const { categoryId, subcategoryId } = useParams();
  // const [subcategories, setSubcategories] = useState([]);
  const [cart, setCart] = useState([]);

  const location = useLocation();
  const Data = location.state;

  console.log("demo", Data);

  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get("http://localhost:5000/cart");
      setCart(response.data);
      console.log("state", response.data)
    }
    fetchSubcategories();

  }, [categoryId, subcategoryId]);

  return (
    <>
      <div>
        <Row xs={1} md={3} className="g-6" style={{
          height: 500,
          background: "LightGrey",
          // justifyContent: "center",

        }}>
          {cart?.map(cart => (
            <Col key={cart._id}>
              <Card
                className="bg-secondary border-primary border-4 m-4 "
                border="warning"
                style={{ width: '26rem', height: '12rem' }}>

                <Card.Img
                  variant="top"
                  // className="w-full h-40 object-cover"
                  style={{ height: '135px', width: '100%' }}
                  src={cart?.image}
                />

                <Card.Body style={{ height: '50px' }}>
                  <Card.Text className="text-white">
                    {cart.courseName}
                  </Card.Text>&nbsp;

                  <Card.Text style={{ height: '50px', marginTop: -50, textAlign: 'right' }} className="text-white">
                    Rs . {cart.price}
                  </Card.Text>&nbsp;
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default MyCart;
