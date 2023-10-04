import { useState } from "react";
import React from "react";

function Form(props){
    const names=props.name
    const[name,setName]=useState("");

const handleChange=(e)=>{
    setName(e.target.value);
}
const handleSubmit=(e)=>{
    e.preventDefault();
    props.onSubmit(name);
    
}

return(
    <form onSubmit={handleSubmit}>
        <div>
        <h1>My name is {names}.</h1> 
        </div>
    <div>
    <label >name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
                <button type="submit">submit</button>
    </div>
    </form>
)
}
export default Form;


// import { Card, Col, Row } from 'antd';
// import React from '../assets/react.png'
// import Second from '../assets/native.jpg'
// import Java from '../assets/java.jpg'
// import Navbar from '../components/Navbar';

// const { Meta } = Card;

// const Landing = () => (
//   <>
//   <Navbar/>
//    <div className="min-h-30% bg-white w-100%">
         
//          <main>
//            <div>
//              <div className="relative">
//                <div className="absolute inset-x-0 bottom-0 h-30% bg-gray-100" />
//                <div className="max-w-7xl mx-50%">
//                  <div className="relative shadow-xl  sm:overflow-hidden">
//                    <div className="absolute inset-0">
//                    <img className="  banner img-fluid w-full lg:absolute lg:inset-y-0 lg:left-0 ml-40 lg:h-full lg:w-auto lg:max-w-none  " src="https://i.ytimg.com/vi/UmEpcyX1TiM/maxresdefault.jpg " alt />
//                      <div className="absolute inset-0 bg-red-300" style={{mixBlendMode: 'multiply'}} />
//                    </div>
//                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
//                      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//                        <span className="block text-white">Take control of your</span>
//                        <span className="block text-white">career</span>
//                      </h1>
//                      <h1 className="  mt-6 max-w-10xl mx-auto text-center text-xl text-indigo-200 sm:max-w-4xl">
//                      Technologies which supports all types of platform for the customer
//                         in order to explore new pathways.                      </h1>
                     
//                    </div>
//                  </div>
//                </div>
//              </div>             
//            </div>
//            {/* More main page content here... */}
//          </main>
//        </div>
//        <div className='pt-50'>
//   <Row gutter={16}>
//   <Col span={8}>
//   <Card
//     hoverable
//     style={{
//       width: 240,
//       margin:50
//     }}
//     cover={<img alt="example" src={React} />}
//   >
    
    
//     <div className="w-1/2">
//         <h2 className="text-xl font-semibold">REACTJS</h2>
//         <p className="text-gray-600">reactjs is a java script-based open-source web application framework led by the Angular Team at Google and by a community of individuals.</p>
//         <h2 className=''>Price:$ 25.3</h2>

//         <div className="flex items-center mt-2">
//           {/* Star Rating */}
//           <div className="flex">
//             <span className="text-black-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//           </div>
//           <span className="text-gray-600 ml-2">(5 Reviews)</span>
//         </div>
//       </div>
//   </Card>
//   </Col>
//   <Col span={8}>

//   <Card
//     hoverable
//     style={{
//       width: 240,
//       margin:50

//     }}
//     cover={<img alt="example" src={Second} />}
//   >

   
//     <div className="w-1/2">
//         <h2 className="text-xl font-semibold">React native</h2>
//         <p className="text-gray-600">React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android , Android TV, iOS , macOS, tvOS, Web, Windows.</p>
//         <h2 className=''>Price:$ 25.3</h2>

//         <div className="flex items-center mt-2">
//           {/* Star Rating */}
//           <div className="flex">
//             <span className="text-black-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9734;</span>
//           </div>
//           <span className="text-gray-600 ml-2">(4 Reviews)</span>
//         </div>
//       </div>
      
    
            
                
//   </Card>
//   </Col>

//   <Col span={8}>

//   <Card
//     hoverable
//     style={{
//       width: 240,
//       margin:50

//     }}
//     cover={<img alt="example" src={Java} />}
//   >
//  <div className="w-1/2">
//         <h2 className="text-xl font-semibold">JAVASCRIPT</h2>
//         <p className="text-gray-600">JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions</p>
//         <h2 className=''>Price:$ 25.3</h2>
//         <div className="flex items-center mt-2">
//           {/* Star Rating */}
//           <div className="flex">
//             <span className="text-black-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9733;</span>
//             <span className="text-yellow-500">&#9734;</span>
//           </div>
//           <span className="text-gray-600 ml-2">(4 Reviews)</span>
//         </div>
//       </div>
//         </Card>
//   </Col>
//   {/* <Col span={8}>

//   <Card
//     hoverable
//     style={{
//       width: 240,
//       margin:30

//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//   </Col>
//   <Col span={8}>

//   <Card
//     hoverable
//     style={{
//       width: 240,
//       margin:30

//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//   </Col>
//   <Col span={8}>

//   <Card
//     hoverable
//     style={{
//       width: 240,
//       margin:60

//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//   </Col>
//    */}
//   </Row>
//   </div>
//   </>
// );
// export default Landing;