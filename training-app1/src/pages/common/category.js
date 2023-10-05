import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
      setImageUrl(response.data);
    }
    fetchCategories();
  }, []);

  console.log("dead",categories);

  return (
    <>
      <br /><Container>
        <br />
        <Row xs={1} md={4} className="g-5">
          {
            categories.map(category => (
              <Col>
                <a class="thumbnail" href="">
                  <Link to={`/categories/${category._id}/subcategories`}>
                  <Card className="bg-secondary border-primary border-4" border="info" style={{ width: '20rem', height: '12rem' }}>
                    <Card.Img variant="top" style={{ height: '130px', width: '100%' }}
                      src={category?.image}
                    />
                    <Card.Body style={{ height: '50px' }}>
                      <Card.Text className="text-white">
                      {category.name}
                      {category.imageUrl}
                        {/* <Link to={`/categories/${category._id}/subcategories`} >
                          {category.name}
                          {category.imageUrl}
                        </Link> */}
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