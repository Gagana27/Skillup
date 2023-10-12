import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
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
      console.log("dem", subcategories)
    }
    fetchSubcategories();
  }, [categoryId]);

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {
          subcategories.map(subcategory => (
            <Col key={subcategory._id}>
              <Link to={`/subcategories/${subcategory._id}/videos`}>
              <Card
      className=" subcategory bg-secondary border-primary border-4 m-4 relative"
      
    >
      <Card.Img
        variant="top"
        className="w-full h-40 object-cover"
        src={subcategory?.image}
      />

<Card.Body
        className="flex flex-col justify-between"
        style={{ minHeight: '2rem' }} 
      >
        <div>
          <Card.Text className="text-white ">
            {subcategory.name} - Rs. {subcategory.price}
          </Card.Text>
        </div>

        <div className="flex justify-between items-center mt-2">
          <Button
            className="w-1/1"
            variant="primary"
            onClick={openPayModal}
          >
            Buy Now
          </Button>

          <Link to="/subscription">
            <Button
              className="w-1/1"
              variant="primary"
            >
              Add to Cart
            </Button>
          </Link>
        </div>
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




