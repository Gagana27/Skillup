import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function SubcategoryList() {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get(`http://localhost:5000/categories/${categoryId}/subcategories`);
      setSubcategories(response.data);
    }
    fetchSubcategories();
  }, [categoryId]);
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {
          subcategories.map(subcategory => (
            <Col key={subcategory._id}>
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
                    <Link to={`/subcategories/${subcategory._id}/videos`}>
                      {subcategory.name}</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
export default SubcategoryList;




