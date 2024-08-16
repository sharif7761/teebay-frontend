import './App.css'
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import RegistrationPage from "./pages/RegistrationPage";
import BoughtProductsPage from "./pages/BoughtProductsPage";
import MyProductsPage from "./pages/MyProductsPage.jsx";
import ProductEditPage from "./pages/ProductEditPage.jsx";
import { useAuth } from './context/AuthContext.jsx';

const App = () => {
    const { isAuthenticated } = useAuth();
    const ProtectedRoute = ({ element, ...rest }) => {
        return isAuthenticated ? element : <Navigate to="/login" />;
    };

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/products" element={<ProtectedRoute element={<ProductListPage />} />} />
            <Route path="/my-products" element={<ProtectedRoute element={<MyProductsPage />} />} />
            <Route path="/product/:id" element={<ProtectedRoute element={<ProductDetailsPage />} />} />
            <Route path="edit-product/:id" element={<ProtectedRoute element={<ProductEditPage />} />} />
            <Route path="add-product" element={<ProtectedRoute element={<ProductEditPage />} />} />
            <Route path="/bought-product" element={<ProtectedRoute element={<BoughtProductsPage />} />} />
            <Route path="/sold-product" element={<ProtectedRoute element={<BoughtProductsPage />} />} />
            <Route path="/borrowed-product" element={<ProtectedRoute element={<BoughtProductsPage />} />} />
            <Route path="/lent-product" element={<ProtectedRoute element={<BoughtProductsPage />} />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default App;
