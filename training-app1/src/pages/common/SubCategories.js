import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    /*  <ul>
         {subcategories.map(subcategory => (
             <li key={subcategory._id}>
                 <Link to={`/subcategories/${subcategory._id}/videos`}>
                     {subcategory.name}
                 </Link>
             </li>
         ))}
     </ul> */

    <Row xs={1} md={3} className="g-4">
      {
        subcategories.map(subcategory => (
          <Col key={subcategory._id}>
            <Card >

              {/*      <Card.Img variant="top"  style={{ height: '85px' } } 
              
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSW1earfT4VmVcmPvWfsrpBE4Saiv3WHVGaA&usqp=CAU" /> */}
              {/*   <Card.Header> <i class="bi bi-caret-right" padding="100px"></i>
            </Card.Header>  */}
              {/* <i class="bi bi-caret-right"></i> */}
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
              <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
              <div class="row">
                <div class='col-sm-4 col-xs-12 col-md-12 col-lg-12'>
                  <a class="thumbnail" href="/subcategories/${subcategory._id}/videos">
                    <div class="img">
                      <img class="img-responsive" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSW1earfT4VmVcmPvWfsrpBE4Saiv3WHVGaA&usqp=CAU" width={600} />
                      <i class="fa fa-play-circle-o fa-4x"></i>
                    </div>
                  </a>
                </div>
              </div>

              <Card.Body style={{ height: '100px' }}>
                <Card.Text>
                  <Link to={`/subcategories/${subcategory._id}/videos`}>
                    {subcategory.name}</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>

  );
}
export default SubcategoryList;
