import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image from '../../assets/study.svg';

function Subscription_Data() {
  const [subscribe, setSubscribe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getAllSubscriptin");
        setSubscribe(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(subscribe);

  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
      {subscribe.map((category) => (
        <div className="card" style={{ width: '18rem',margin:"10px" }} key={category._id}>
          <img src={category.image} className="card-img-top" alt="Subscription Image" />
          <div className="card-body" style={{height:"40px",display:"flex"}}>
            <h5 className="card-title" style={{ margin: "auto 0",  flex: "1" ,}}>{category.courseName}</h5>
            <p className="card-text" style={{ margin: "auto 0",  textAlign: "right" }}>{category.price}</p>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default Subscription_Data;
