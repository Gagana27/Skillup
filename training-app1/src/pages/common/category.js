import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import VideoList from './videos';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
      console.log("iii",response.data);
    }
    fetchCategories();
  }, []);

  console.log("dead");

  return (
    <>
      <br /><Container>
        <br />
        <Row xs={1} md={4} className="g-5">
          {
            categories.map(category => (
              <Col key={category._id}>
              <a class="thumbnail" href="">
                  <Link to={`/categories/${category._id}/subcategories`}>
                    <Card 
                        className="bg-secondary border-primary border-4" 
                        border="warning" 
                        style={{ width: '20rem', height: '12rem' }}>
                      <Card.Img 
                        variant="top" 
                        style={{ height: '135px', width: '100%' }}
                        src={category?.image}
                      />
                      <Card.Body 
                        style={{ height: '50px'}}>
                        <Card.Text 
                          className="text-white">
                          {category.name}<span className='categoryprice'>
                          ₹ {category.price}</span>
                          </Card.Text>

                      </Card.Body>
                    </Card>
                  </Link>
                </a>
              </Col>
            ))}
        </Row>
        
      </Container>
    </>
  );
}

export default CategoryList;