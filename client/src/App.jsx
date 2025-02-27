import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Homepage/Homepage";
import Categories from "./Components/Categories/Categories";
import Popular from "./Components/PopularSellers/Popular";
import WhyUs from "./Components/WhyUs/WhyUs";
import Seller_Invitation from "./Components/Seller_Invitation/Seller_Invitation";
import FooterSection from "./Components/FooterSection/FooterSection";
import AboutUs from "./Components/AboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Serviceprovider from "./Components/ServiceProvider/ServiceProvider";
// import AddressSection from './Components/AddressSection/AddressSection';
import ContactUs from "./Components/ContactUs/ContactUs";
import SignupPage from "./Components/SignupPage/SignupPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import Done from "./Components/Booking/Done";
import BookingSummary from "./Components/Booking/BookingSummary";
import Information from "./Components/Booking/Information";
import Schedule from "./Components/Booking/Schedule";
import Service from "./Components/Booking/Service";
// import PartnerSignUp from './Components/PartnerSignUp/PartnerSignUp';
import BasicInfo from "./Components/PartnerSignUp/BasicInfo";
import ContactInfo from "./Components/PartnerSignUp/ContactInfo";
import LogInInfo from "./Components/PartnerSignUp/LogInInfo";
import OtpPage from "./Components/OtpPage/OtpPage";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
// import Dashboard from './Components/Dashboard/Dashboard';
// import SideMenu from "./Components/Dashboard/SideMenu";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import OrderSummary from "./Components/Dashboard/OrderSummary";
import Profile from "./Components/Dashboard/Profile";
import Review from "./Components/Dashboard/Review";
import SideBar from "./Components/Dashboard/SideBar";
import ProfileEdit from "./Components/Dashboard/ProfileEdit";
import Email from '../src/Components/Email/Email'
import ForgotPassword from '../src/Components/ForgotPassword/ForgotPassword'
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminOrderSummary from "./Components/Admin/AdminOrderList";
import AdminSideBar from "./Components/Admin/AdminSideBar";
import CustomerList from "./Components/Admin/CustomerList";
import AdminServiceList from "./Components/Admin/AdminServiceList";
import ServiveProviderList from "./Components/Admin/ServiceProviderList";
// import AdminSideMenu from "./Components/Admin/AdminSideMenu";

const App = () => {
  
  const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
  return (
    <Router>
      <Wrapper>
      <div className="web-main-container">
        <Navbar className="main-nav"></Navbar>
        <div className="overlays"></div>
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <Categories />
                <Popular Title="Popular Sellers" />
                <WhyUs />
                <Seller_Invitation />
                <FooterSection/>
              </>
            }
          />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Serviceprovider" element={<Serviceprovider />} />
          <Route path="/SignUp" element={<HeaderComponent />}>
            <Route
              index
              element={
                <>
                  <HomePage />
                  <Categories />
                  <Popular Title="Popular Sellers" />
                  <WhyUs />
                  <Seller_Invitation />
                  <SignupPage />
                </>
              }
            />
            <Route
              path="OTP"
              element={
                <>
                  <HomePage />
                  <Categories />
                  <Popular Title="Popular Sellers" />
                  <WhyUs />
                  <Seller_Invitation />
                  <OtpPage />
                </>
              }
            />
          </Route>
          <Route
            path="/Login"
            element={
              <>
                <HomePage />
                <Categories />
                <Popular Title="Popular Sellers" />
                <WhyUs />
                <Seller_Invitation />
                <LoginPage />
              </>
            }
          />
          <Route path="/Done" element={<Done />} />
          <Route path="/BookingSummary" element={<BookingSummary />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Service" element={<Service />} />
          {/* <Route path='/Address' element={<AddressSection/>}/> */}
          <Route path="/PartnerSignUp/BasicInfo" element={<BasicInfo />} />
          <Route
            path="/PartnerSignUp/BasicInfo/ContactInfo"
            element={<ContactInfo />}
          />
          <Route
            path="/PartnerSignUp/BasicInfo/ContactInfo/LogInInfo"
            element={<LogInInfo />}
          />

          <Route
            path="/Email"
            element={
              <>
              <HomePage />
              <Categories />
              <Popular Title="Popular Sellers" />
              <WhyUs />
              <Seller_Invitation />
              <Email/>
            </>
            } 
          />

          <Route
            path="/ForgotPassword/:userId/:token"
            element={
              <>
              <HomePage />
              <Categories />
              <Popular Title="Popular Sellers" />
              <WhyUs />
              <Seller_Invitation />
              <ForgotPassword/>
            </>
            }
          />
          
          <Route path="/Dashboard"
            element={
              <PrivateRoute>
                <SideBar />
              </PrivateRoute>
            }>
            <Route index element={
              <>
              <Dashboard/>
              <OrderSummary/>
              <Profile/>
              <Review/>
              </>
            }/>
            <Route path="EditProfile" element={
              <ProfileEdit/>
            }/>
          </Route>
          <Route path="/AdminDashboard"
            element={
                <AdminSideBar />
            }>
            <Route index element={
              <>
              <AdminDashboard/>
              <AdminOrderSummary/>
              <AdminServiceList/>
              <ServiveProviderList/>
              <CustomerList/>
              </>
            }/>
          </Route> 
        </Routes>
        {/* <FooterSection /> */}
      </div>
      </Wrapper>
    </Router>
  );
};

export default App;