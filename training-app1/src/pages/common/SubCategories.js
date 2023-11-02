import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AddCartButton from './AddToCart';
import Button from 'react-bootstrap/Button';
import { useAuthContext } from "../../hooks/UserAuthContext";
import RazorPay from './RazorPay';


function SubcategoryList() {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const userId = localStorage.getItem('user');
  const { user } = useAuthContext();
  const [buttonClicked, setButtonClicked] = useState(false);

  const navigate = useNavigate()

  console.log("object", subcategories)

  const AddtoCart = async (event, subCatData, userId) => {
    event.preventDefault();
    console.log("ffff", subCatData, userId)
    // navigate(`/subscription/${subCatData._id}`)
    const categoryResponse = await axios.post(
      "http://localhost:5000/cart",
      {
        courseName: subCatData.name,
        image: subCatData.videos[0].image,
        description: subCatData.videos[0].description,
        userId: userId,
        categoryId: subCatData.category,
        subcategoryId: subCatData._id,
        price: subCatData.priceDetails

      }
    );
    console.log("demos", categoryResponse.data);
    navigate("/my-cart")
  }


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
              <Link to={`/subcategories/${subcategory._id}/videos`} state={{ video: subcategory.videos[0]._id }}>
                <Card
                  className=" subcategory bg-secondary border-primary border-4 m-4 relative">
                  <Card.Img
                    variant="top"
                    // className="w-full h-40 object-cover"
                    style={{ height: '150px', width: '100%' }}
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
                      {/* <Button
                        className="w-1/1"
                        variant="primary"
                        style={{ background: "orange" }}
                        active>
                        Buy Now
                      </Button> */}
                      <RazorPay
                        amount={subcategory.priceDetails}
                        subcategory={subcategory}
                      />

                      <Button
                        className="w-auto ml-4"  // Adjust the ml (margin-left) value as needed
                        variant="primary"
                        active
                        onClick={(event) => {
                          AddtoCart(event, subcategory, user.loginUser._id);
                          setButtonClicked(true);
                        }}
                        disabled={buttonClicked}
                      >
                        {buttonClicked ? "Added to Cart" : "Add to Cart"}
                      </Button>

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




