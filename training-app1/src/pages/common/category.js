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
  console.log("categ",categories)

  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
    }
    fetchCategories();
  }, []);

  return (
    <>
      <br />
      <Container>
        <br />
        <Row xs={1} md={2} lg={3} xl={4} className="g-5 mb-5">
          {categories.map((category) => (
            <Col key={category._id} className="mb-4">
              <Link to={`/categories/${category._id}/subcategories`} state={category}>
                <Card
                  className="bg-secondary border-primary border-4"
                  border="blue"
                  style={{ width: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{ height: '135px', width: '100%', objectFit: 'cover' }}
                    src={category?.image}
                  />
                  <Card.Body>
                    <Card.Text className="text-white">
                      {category.name}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CategoryList;
