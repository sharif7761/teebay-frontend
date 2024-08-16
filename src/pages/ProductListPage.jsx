import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import { GET_ALL_PRODUCTS } from '../graphql/productQueries.js';
import {useNavigate} from "react-router-dom";

const ProductListPage = () => {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
    const navigate = useNavigate();
    if (loading) return <CircularProgress />;
    if (error) return <p>Error: {error.message}</p>;

    // const handleDelete = (id) => {
    //     // Implement delete functionality
    // };

    const handleDetails = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <Box>
            {data.allProducts.map((product) => (
                <Box
                    key={product.id}
                    sx={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        margin: '16px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <ProductCard
                        product={product}
                        onDetails={handleDetails}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default ProductListPage;