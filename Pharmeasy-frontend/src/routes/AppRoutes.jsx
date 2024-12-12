import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepages";
import ProductPage from "../pages/Productpages";
import LoginPage from "../pages/Loginpages";
import SignupPage from "../pages/Signuppages";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
);

export default AppRoutes;
