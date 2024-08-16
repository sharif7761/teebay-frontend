import './App.css'
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import RegistrationPage from "./pages/RegistrationPage";
import BoughtProductsPage from "./pages/BoughtProductsPage";
import Layout from "./components/layout/Layout.jsx";
import MyProductsPage from "./pages/MyProductsPage.jsx";

const App = () => {
    const isAuthenticated = !!localStorage.getItem('teebayToken');

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route
                path="/products/:id"
                element={isAuthenticated ? <ProductDetailsPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/products"
                element={isAuthenticated ? <Layout><ProductListPage /></Layout> : <Navigate to="/login" />}
            />
            <Route
                path="/my-products"
                element={isAuthenticated ? <Layout><MyProductsPage /></Layout> : <Navigate to="/login" />}
            />
            <Route
                path="/bought-products"
                element={isAuthenticated ? <Layout><BoughtProductsPage /></Layout>: <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default App;
