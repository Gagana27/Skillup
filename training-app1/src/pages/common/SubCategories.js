import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useLocation ,useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AddCartButton from './AddToCart';
import Button from 'react-bootstrap/Button';
import { useAuthContext } from "../../hooks/UserAuthContext"

function SubcategoryList() {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const userId = localStorage.getItem('user');
  const { user } = useAuthContext();
  const navigate=useNavigate()
  console.log("object", user)

  const AddtoCart =async (subCatData, userId) => {
    console.log("ffff", subCatData, userId)
    // navigate(`/subscription/${subCatData._id}`)
    const categoryResponse = await axios.post(
      "http://localhost:5000/cart",
      {
        courseName: subCatData.name,
        image: subCatData.videos.image,
        description:subCatData.videos.description,
        userId: userId,
        categoryId:subCatData.category,
        subcategoryId: subCatData._id,
        price:subCatData.priceDetails

      }
    );
    console.log("demos", categoryResponse.data);
  }

 
  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get(`http://localhost:5000/categories/${categoryId}/subcategories`);
      setSubcategories(response.data);
    }
    fetchSubcategories();
  }, [categoryId]);

  // console.log("sub", userId)

  // const subCatData =
  //   subcategories.map((subCategory) => {
  //     subCategory.name,
  //       subCategory.price,
  //       subCategory.image
      
  //   })

  //   console.log("subCategories", subCatData);
  //   console.log("dead",subcategories);

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {
          subcategories.map(subcategory => (
            <Col key={subcategory._id}>
              <Link to={`/subcategories/${subcategory._id}/videos`}>
                <Card
                  className=" subcategory bg-secondary border-primary border-4 m-4 relative">
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
                        variant="primary">
                        Buy Now
                      </Button>

                      <Link to="/my-cart" state={subcategories}>
                        <Button
                          className="w-1/1"
                          variant="primary"
                          onClick={() => AddtoCart(subcategory, user.loginUser._id)}
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




