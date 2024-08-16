import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from "../../context/AuthContext.jsx";

const Navbar = () => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();
    const handleLogout = () => {
        logoutUser()
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Teebay
                </Typography>
                <Button color="inherit" component={Link} to="/my-products">
                    My Products
                </Button>
                <Button color="inherit" component={Link} to="/products">
                    All Products
                </Button>
                <Button color="inherit" component={Link} to="/create-product">
                    Create Product
                </Button>
                <Button color="inherit" component={Link} to="/bought-product">
                    Bought
                </Button>
                <Button color="inherit" component={Link} to="/sold-product">
                    Sold
                </Button>
                <Button color="inherit" component={Link} to="/borrowed-product">
                    Borrowed
                </Button>
                <Button color="inherit" component={Link} to="/lent-product">
                    Lent
                </Button>
                <Button color="error" variant="contained" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;