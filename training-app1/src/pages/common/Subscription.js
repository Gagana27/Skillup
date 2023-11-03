import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RazorPay from './RazorPay';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { useAuthContext } from '../../hooks/UserAuthContext';
import { CartContextHook } from '../../hooks/CartContextHook';
import { SubscribedContextHook } from '../../hooks/SubscribedContextHook';
function Subscription() {

  const { categoryId, subcategoryId } = useParams();
  // const [subcategories, setSubcategories] = useState([]);
  const [cart, setCart] = useState([]);
  const {user}=useAuthContext()
  const {dispatch,cartItems}=CartContextHook();
  const subscribedContext=SubscribedContextHook();
  const [subscribe, setSubscribe] = useState([]);

  const location = useLocation();
  // const Data = location.state.subscriptionVideos;

  useEffect(() => {

   async function fetchPaidVideos()
   {
    const response=await axios.get(`http://localhost:5000/getAllPaidVideos/${user?.loginUser._id}`);
    setSubscribe(response.data);
    subscribedContext.dispatch({type:'GET_ALL_SUBSCRIBED_VIDEOS',payload:response.data})
    console.log(response.data)
   }
   fetchPaidVideos()
  }, [categoryId, subcategoryId,user]);

  return (
    <Container>
      <Row xs={1} md={4} className="g-6" style={{
        height: 500,
        background: "LightGrey",
        justifyContent: "center",

      }}>
        {subscribedContext.subScribedItems?.map(cart => (
          <Col key={cart._id}>
            {/* <Link to={`/categories/${cart._id}/subcategories`}> */}

            <Card
              className="subcategory bg-secondary border-primary border-4 m-4 relative"
              border="blue"
            >

              <Card.Img
                variant="top"
                // className="w-full h-40 object-cover"
                style={{ height: '135px', width: '100%' }}
                src={cart?.image}
              />

              <Card.Body className="flex flex-col justify-between" style={{ height: '50px' }}>
                <Card.Text className="text-white">
                  {cart.courseName}
                  {cart.priceDetails}
                  {/* {cart.description} */}

                </Card.Text>&nbsp;
              </Card.Body>
            </Card>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Subscription;
