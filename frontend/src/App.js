import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import BillingService from "./pages/BillingService";
import DataTopUp from "./pages/DataTopUp";
import RingTonePersonalisation from "./pages/RingTonePersonalization";
import ServiceActivation from "./pages/ServiceActivation";

function App() {
  return (
      <>
          <Router>
              <div className='container'>
                  <Header/>
                  <h1>Middleware Assignment</h1>
                  <Routes>
                      <Route path='/login' element={<Login />} />
                      <Route path='/register' element={<Register />} />
                      <Route path='/home' element={<Home />} />
                      <Route path='/' element={<Home />} />
                      <Route path='/data-top-up' element={<DataTopUp/>} />
                      <Route path='/billing' element={<BillingService/>} />
                      <Route path='/service-activation' element={<ServiceActivation />} />
                      <Route path='/ring-tone-personalization' element={<RingTonePersonalisation />} />
                  </Routes>
              </div>
          </Router>
          <ToastContainer/>
      </>
  );
}

export default App;
