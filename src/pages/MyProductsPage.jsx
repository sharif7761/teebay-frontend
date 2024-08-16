import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import { GET_MY_PRODUCTS } from '../graphql/productQueries.js';

const MyProductsPage = () => {
    const { loading, error, data } = useQuery(GET_MY_PRODUCTS);

    if (loading) return <CircularProgress />;
    if (error) return <p>Error: {error.message}</p>;

    const handleDelete = (id) => {
        // Implement delete functionality
    };

    const handleDetails = (id) => {
        // Implement details functionality
    };

    return (
        <Box>
            {data.userProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onDelete={handleDelete}
                    onDetails={handleDetails}
                />
            ))}
        </Box>
    );
};

export default MyProductsPage;