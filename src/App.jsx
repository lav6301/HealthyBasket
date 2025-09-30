// main.jsx or App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap from npm
import './assets/css/home.css';       // Your custom Bootstrap
import './assets/css/bootstrap.min.css'
import './assets/css/lightbox.min.css';
import './assets/css/owl.carousel.min.css';
// import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Navbar from './Components/navbar';
import FeaCategory from './Components/FeaCategories';
import AboutUs from './Components/about';
import BlogPage from './Components/blog';
import BlogDetails from './Components/blogDetails';
import AccountPage from './Components/MyAccount';
import ContactUs from './Components/contact';
import Footer from "./Components/footer";
import ServiceIcon from './Components/servicesicon';
import HomeAdvertisement from './Components/HomeAdvertisement';
import HomePageFeatu from './Components/homePageFeatu';
import TodayDeal from './Components/HomeDeal';
import HomeSecondOffer from './Components/homebanner';
import BestSeller from './Components/bestSeller';
function  HomePage() {
   return (
    <>
      <Navbar />
      <Header />
      <FeaCategory />
      <HomeAdvertisement />
      <HomePageFeatu />
      <TodayDeal />
      <HomeSecondOffer />
      <BestSeller />
      <ServiceIcon />
      <Footer/>
    </>
  );
};



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path ="/blogs" element={<BlogPage />}/>
        <Route path ="/blogDetails" 
        element={<BlogDetails/>} />
        <Route path ="/MyAccount" element={<AccountPage />} />
        <Route path ="/ContactUs" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
