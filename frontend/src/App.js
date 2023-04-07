import './App.css';
import './index.css';
import React, { Fragment } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/dashboard/DashBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customer from './components/dashboard/customer/Customer';
import Product from './components/dashboard/product/Product';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<DashBoard />} /> */}
          <Route path="/dashboard/customer" element={<Customer />} />
          <Route path="/dashboard/product" element={<Product />} />
        </Routes>
      </Fragment>

    </Router>


  );
}

export default App;
