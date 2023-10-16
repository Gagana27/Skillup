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

 


  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get(`http://localhost:5000/categories/${categoryId}/subcategories`);
      setSubcategories(response.data);
    }
    fetchSubcategories();
  }, [categoryId]);

  const subCatData =
    subcategories.map((subCategory) => {
      subCategory.name,
      subCategory.price,
      subCategory.image
      console.log("subCategories", subCategory);
    })

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
                    // className="w-full h-40 object-cover"
                    style={{ height: '135px', width: '100%' }}

                    src={subcategory?.image}
                  />

                  <Card.Body
                    className="flex flex-col justify-between"
                    style={{ minHeight: '2rem' }}
                  >
                    <div>
                      <Card.Text className="text-white ">
                        {subcategory.name} - Rs. {subcategory.priceDetails}
                      </Card.Text>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <Button
                        className="w-1/1"
                        variant="primary"
                      
                      >
                        Buy Now
                      </Button>

                      <Link to="/subscription/categoryId" state={subCatData}>
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
        {subcategories.map(subcategory => (
          <Col key={subcategory._id}>
            <Link to={`/subcategories/${subcategory._id}/videos`}>

            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SubcategoryList;




