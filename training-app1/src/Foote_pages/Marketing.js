import React from 'react';
import img from '../assets/Marketing.svg'

const Marketing = () => {
  const heroLeftStyles = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '1.2rem',
    justifyContent: 'space-around',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid block',
    height: '300px',
    width: '500px',
    padding: '30px',
    paddingLeft: '90px',
    borderRadius: '100%',
    marginTop: '100px',
    marginLeft: '20px',
    boxShadow: '100px 90px 100px rgba(32, 206, 99, 0.2)',
  };
  const heroRightStyles = {
    marginLeft:'100px',
marginTop:'20px'
   
  };
  return (
    <div>
     
      <div className="two-column-layout" style={{ display: "flex" }}>
        {/* Left Column */}
        <div className="left-column" style={heroLeftStyles} >
          <h1>Marketing</h1>
          <h3>Lorem Ipsum is simply dummy text</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s.
          </p>
          <button style={{borderRadius:"6px",width:"auto",padding:"5px",border: "2px solid black" }}>Marketing</button>
        </div>

        {/* Right Column */}
        <div className='right-column' style={heroRightStyles} >
          <img style={{height:"500px",width:"auto"}} src={img} alt="image" />
          
        </div>
      </div>
    </div>
  );
};

export default Marketing;
