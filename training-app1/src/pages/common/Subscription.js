import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RazorPay from './RazorPay';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useParams, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../hooks/UserAuthContext';
import { CartContextHook } from '../../hooks/CartContextHook';
import { SubscribedContextHook } from '../../hooks/SubscribedContextHook';

function Subscription() {
  const { categoryId, subcategoryId } = useParams();
  const [cart, setCart] = useState([]);
  const { user } = useAuthContext();
  const { dispatch, cartItems } = CartContextHook();
  const subscribedContext = SubscribedContextHook();
  const [subscribe, setSubscribe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    async function fetchPaidVideos() {
      try {
        const response = await axios.get(`http://localhost:5000/getAllPaidVideos/${user?.loginUser._id}`);
        setSubscribe(response.data);
        subscribedContext.dispatch({ type: 'GET_ALL_SUBSCRIBED_VIDEOS', payload: response.data });
        setIsLoading(false); 
      } catch (error) {
        console.error(error);
        setIsLoading(false); 
      }
    }

    
    setTimeout(fetchPaidVideos, 1000); 
  }, [categoryId, subcategoryId, user]);

  return (
    <Container className="mt-6">
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center loader mb-5 mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} xl={4} className="g-5 mb-5">
          {subscribedContext.subScribedItems?.map((cart) => (
            <Col className="mb-4" key={cart._id}>
              {user && user.loginUser && user.loginUser.firstname}
              <Card
                className="bg-secondary border-primary border-4"
                border="blue"
                style={{ width: '100%' }
                }>
                <Card.Img
                  variant="top"
                  style={{ height: '135px', width: '100%', objectFit: 'cover' }}
                  src={cart?.image}
                />
                <Card.Body className="flex flex-col justify-between" style={{ height: '50px' }}>
                  <Card.Text className="text-white">
                    {cart.courseName}
                    {cart.priceDetails}
                  </Card.Text>&nbsp;
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Subscription;
