import React, {useEffect} from 'react';
import Register from '../components/RegistrationForm.jsx';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../context/AuthContext.jsx';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/products');
        }
    }, [isAuthenticated, navigate]);
    return (
        <div>
            <Register />
        </div>
    );
};

export default RegisterPage;