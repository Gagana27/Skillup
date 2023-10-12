import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AddCartButton from './AddToCart';
import Button from 'react-bootstrap/Button';

function SubcategoryList() {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);

  const openPayModal = options => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };


  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get(`http://localhost:5000/categories/${categoryId}/subcategories`);
      setSubcategories(response.data);
    }
    fetchSubcategories();
  }, [categoryId]);

  const subCatData =
    subcategories.map((dead) => {
      dead.name,
      dead.price,
      dead.image
      console.log("dem1", dead);
    })

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {subcategories.map(subcategory => (
          <Col key={subcategory._id}>
            <Link to={`/subcategories/${subcategory._id}/videos`}>
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

                  {/* <Card.Text style={{ position: "absolute", bottom: 0, right: 10 , top: 150 }} className="text-white">
                      Rs. {subcategory.price}
                    </Card.Text> &nbsp; */}

                  <Button
                    style={{
                      width: '7rem',
                      height: '2rem',
                      position: "absolute",
                      right: 20,
                      top: 145,
                      backgroundColor: 'green'
                    }}
                    variant="primary"
                    onClick={openPayModal}>
                    Buy Now
                  </Button>

                  <Link to="/subscription/categoryId" state={subcategory._id}>
                    <Button
                      style={{
                        width: '7rem',
                        height: '2rem',
                        position: "absolute",
                        right: 160,
                        top: 145,
                        backgroundColor: 'gray'
                      }}
                      variant="primary">
                      Add to Cart
                    </Button>&nbsp;
                  </Link>

                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SubcategoryList;




