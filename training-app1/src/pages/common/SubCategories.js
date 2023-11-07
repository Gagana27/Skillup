import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AddCartButton from './AddToCart';
import Button from 'react-bootstrap/Button';
import { useAuthContext } from "../../hooks/UserAuthContext";
import { CartContextHook } from "../../hooks/CartContextHook";
import { SubscribedContextHook } from '../../hooks/SubscribedContextHook';
import RazorPay from './RazorPay';
function SubcategoryList() {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const userId = localStorage.getItem('user');
  const { user } = useAuthContext();
  const value = useLocation()
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate()
  const { dispatch, cartItems } = CartContextHook();
  const { dispatch: subScribedDispatch, subScribedItems } = SubscribedContextHook()



  const AddtoCart = async (event, subCatData, userId) => {
    event.preventDefault();
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
    navigate("/my-cart")
  }
  const buttonValidation = (id) => {
    return cartItems && cartItems.some((items) => {
      return items.subcategory === id
    })
  }
  const buyNowValidation = (id) => {
    return subScribedItems && subScribedItems.some((items) => {
      return items.subcategory === id
    })
  }
  useEffect(() => {
    async function fetchSubcategories() {
      const response = await axios.get(`http://localhost:5000/categories/${categoryId}/subcategories`);
      setSubcategories(response.data);
    }
fetchSubcategories()
    if(user)
   {
    async function fetchCartItems() {
      const response = await axios.get(`http://localhost:5000/cart/${user?.loginUser._id}`);
      dispatch({ type: 'GET_ALL_CARTS', payload: response.data });
    }
    fetchCartItems();
   }
    async function fetchSubscribedVideos() {
      const response = await axios.get(`http://localhost:5000/getAllPaidVideos/${user?.loginUser._id}`);
      subScribedDispatch({ type: 'GET_ALL_SUBSCRIBED_VIDEOS', payload: response.data })
    }
    fetchSubscribedVideos();
  }, [categoryId,user]);
  return (
    <Container>
      <Row xs={1} md={4} className="g-4 ">
        {
          subcategories.map(subcategory => {
            const hide = buttonValidation(subcategory._id)
            const sunScribeButtonHide = buyNowValidation(subcategory._id)
            return (
              <Col key={subcategory._id}>
                <Link to={`/subcategories/${subcategory._id}/videos`} state={{ video: subcategory.videos[0]._id }}>
                  <Card
                    className=" subcategory bg-secondary border-primary border-4 m-2 relative">
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
                        {!sunScribeButtonHide && <RazorPay
                          amount={subcategory.priceDetails}
                          subcategory={subcategory}
                        />}
                        {!hide && !sunScribeButtonHide && <Button
                          className="  py-2 px-2 rounded sm:py-2 sm:px-4 ml-5 md:py-3 md:px-6 lg:py-4 lg:px-2 xl:py-2 xl:px-8 "  // Adjust the ml (margin-left) value as needed
                          variant="warning"
                          active
                          onClick={(event) => {
                            AddtoCart(event, subcategory, user.loginUser._id);
                          }}
                        >
                          Add To Cart
                        </Button>}
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
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