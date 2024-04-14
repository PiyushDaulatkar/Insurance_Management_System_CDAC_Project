import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyNavbar from './Components/Navbar.js';
import HomePage from './Pages/HomePage.js';
import Login from './Pages/Login.js';
import Logout from './Pages/Logout.js';
import Register from './Pages/Register.js';
import Profile from './Pages/Profile.js';
import CarForm from './Insurances/Car/CarForm.js';
import CarInsurance from './Insurances/Car/CarInsurance.js';
import MyPolicies from './Pages/MyPolicies/MyPolicies.js';
import HomeForm from './Insurances/Home/HomeForm.js';
import HomeInsurance from './Insurances/Home/HomeInsurance.js';
import TravelForm from './Insurances/Travel/TravelForm.js';
import TravelInsurance from './Insurances/Travel/TravelInsurance.js';
import Claims from './Pages/Claims.js';
import HealthForm from './Insurances/Health/HealthForm.js';
import HealthInsurance from './Insurances/Health/HealthInsurance.js';
import Temp from './Pages/Temp.js';
import VendorLogin from './Pages/Vendor/VendorLogin.js';
import VendorHome from './Pages/Vendor/VendorHomePage.js';
import VendorRegister from './Pages/Vendor/VendorRegister.js';
import AddInsurance from './Pages/Vendor/Add/AddCar.js';
import AddCar from './Pages/Vendor/Add/AddCar.js';
import AddHome from './Pages/Vendor/Add/AddHome.js';
import AddHealth from './Pages/Vendor/Add/AddHealth.js';
import AddTravel from './Pages/Vendor/Add/AddTravel.js';
import Payment from './Pages/Payment.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}> </Route>
          <Route exact path="/home" element={<HomePage />}> </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/profile" element={<Profile/>}></Route>
          <Route exact path="/claims" element={<Claims/>}></Route>
          <Route exact path="/mypolicies" element={<MyPolicies/>}></Route>
          <Route exact path="/car-form" element={<CarForm />}></Route>
          <Route exact path="/carinsurance" element={<CarInsurance/>}></Route>
          <Route exact path="/home-form" element={<HomeForm />}></Route>
          <Route exact path="/homeinsurance" element={<HomeInsurance/>}></Route>
          <Route exact path="/travel-form" element={<TravelForm />}></Route>
          <Route exact path="/travelinsurance" element={<TravelInsurance/>}></Route>
          <Route exact path="/health-form" element={<HealthForm />}></Route>
          <Route exact path="/healthinsurance" element={<HealthInsurance/>}></Route>
          {/* <Route exact path="/payment" element={<Payment />}> </Route> */}
          <Route exact path="/temp" element={<Temp />}> </Route>
          {/* ------------------------------------------------------------------------- */}
          <Route exact path="/vendor/home" element={<VendorHome />}> </Route>
          <Route exact path="/vendor/login" element={<VendorLogin />} />
          <Route exact path="/vendor/register" element={<VendorRegister />}></Route>
          <Route exact path="/vendor/addinsurance/car" element={<AddCar />}></Route>
          <Route exact path="/vendor/addinsurance/home" element={<AddHome/>}></Route>
          <Route exact path="/vendor/addinsurance/health" element={<AddHealth/>}></Route>
          <Route exact path="/vendor/addinsurance/travel" element={<AddTravel/>}></Route>
          {/* service_3u3gf2h */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
