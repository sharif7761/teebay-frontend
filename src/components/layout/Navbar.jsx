import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logic for logout
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
                <Button color="inherit" component={Link} to="/all-products">
                    All Products
                </Button>
                <Button color="inherit" component={Link} to="/create-product">
                    Create Product
                </Button>
                <Button color="error" variant="contained" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;