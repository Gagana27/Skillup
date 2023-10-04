import React from 'react'
import Header from './common/header';
import Footer from './common/footer';
import AboutPage from './about_page';
// import Form from '../Form';


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoginPage from './common/login_page';
import SignUpPage from './common/signup_page';
import LandingPage from './landing_page/landing_page';
import HomePage from './home_page/home_page';
// import VideoCoursePage from './video_course_page/video_course_page';
import VideoPlayerSample from './video_course_page/video_player_sample';
import CategoryList from './common/category';
import SubcategoryList from './common/SubCategories';
import VideoList from './common/videos';
import AddCategory from './common/addcat';
import Addvideo from './common/addvideo';

export default function RoutePage() {

  /*  const getdata=(name)=>{
     console.log("from route",name)
 
   } */
  return (
    <Router>
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          <Header />
          <Routes>
            {/* <Route exact path="/" element= {<LandingPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/video" element={<VideoPlayerSample />} />
            {/* <VideoCoursePage/> */}
            {/* <VideoPlayerSampleApp/> */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/carees" element={<AboutPage />} />
            <Route path="/category" element={<CategoryList />} />
            <Route path="/categories/:categoryId/subcategories" element={<SubcategoryList />} />
            {/* <Route  path="/videos/:videoId/subcategories" element={<VideoList/>} /> */}

            <Route path="/catnew" element={<AddCategory />} />
            <Route path="/newvideo" element={<Addvideo />} />
            <Route path="/subcategories/:subcategoryId/videos" element={<VideoList />} />
          </Routes>
          {/* <Form onSubmit={getdata} name="raji"/> */}
          <Footer />
        </div>
      </div>
    </Router>
  )
}
