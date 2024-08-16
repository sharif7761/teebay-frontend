import React, {useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

const LoginPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/products');
        }
    }, [isAuthenticated, navigate]);
    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default LoginPage;