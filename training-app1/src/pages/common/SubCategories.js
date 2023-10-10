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
  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get(`http://localhost:5000/categories/${categoryId}/subcategories`);
      setSubcategories(response.data);
      console.log("dem",subcategories)
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
                  className="bg-secondary border-primary border-4 m-4 "
                  border="warning"
                  style={{ width: '22rem', height: '12rem' }}>
                  <Card.Img
                    variant="top"
                    style={{ height: '135px', width: '100%' }}
                    src={subcategory?.image}
                  />
                  
                  <Card.Body style={{ height: '50px' }}>
                    <Card.Text className="text-white">
                      {subcategory.name}
                    </Card.Text>&nbsp;

                    <Card.Text style={{ position: "absolute", bottom: 0, right: 10 , top: 150 }} className="text-white">
                      Rs. {subcategory.price}
                    </Card.Text> &nbsp;

                    <Button 
                      style={{
                        width: '5rem', 
                        height: '2rem', 
                        position: "absolute", 
                        right: 75 , 
                        top: 145 , 
                        backgroundColor: 'green'
                      }} 
                      variant="primary">
                        Add
                    </Button>
                    
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




