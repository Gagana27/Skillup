import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import AboutPage from "./about_page";
// import Form from '../Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./common/login_page";
import SignUpPage from "./common/signup_page";
import LandingPage from "./landing_page/landing_page";
import HomePage from "./home_page/home_page";
// import VideoCoursePage from './video_course_page/video_course_page';
import VideoPlayerSample from "./video_course_page/video_player_sample";
import CategoryList from "./common/category";
import SubcategoryList from "./common/SubCategories";
import VideoList from "./common/videos";
import AddCategory from "./common/addcat";
import Addvideo from "./common/addvideo";
import ContactPage from "./Contact";
import FreeTrail from "./FreeTrail";
import ForgotPassword from "./common/ForgotPassword";
import OTPPage from "./common/OTP";
import ConfirmPassword from "./common/ConfirmPassword";
import Marketing from "../Foote_pages/Marketing";
import { Pricing } from "../Foote_pages/Pricing";
import { Claim } from "../Foote_pages/Claim";
import MyCart from "./common/Mycart";
import MyLearn from "./common/Mylearn";
import Subscription from "./common/Subscription";
import RazorPay from "./common/RazorPay";

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
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/video" element={<VideoPlayerSample />} />
            {/* <VideoCoursePage/> */}
            {/* <VideoPlayerSampleApp/> */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/carees" element={<AboutPage />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/category" element={<CategoryList />} />
            <Route
              path="/categories/:categoryId/subcategories"
              element={<SubcategoryList />}
            />
            {/* <Route  path="/videos/:videoId/subcategories" element={<VideoList/>} /> */}
            <Route path="/freetrial" element={<FreeTrail />} />
            <Route path="/catnew" element={<AddCategory />} />
            <Route path="/newvideo" element={<Addvideo />} />
            <Route
              path="/subcategories/:subcategoryId/videos"
              element={<VideoList />}
            />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/otp" element={<OTPPage />} />
            <Route path="/resetpassword" element={<ConfirmPassword />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/my-cart" element={<MyCart />} />
            <Route path="/my-learning" element={<MyLearn />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/razorpay" element={<RazorPay />} />
            <Route path="/otp" element={<OTPPage />} />
            <Route path="/resetpassword" element={<ConfirmPassword />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/claim" element={<Claim />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
