import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import { GET_BOUGHT_PRODUCTS } from '../graphql/productQueries.js';

const BoughtProductsPage = () => {
    const { loading, error, data } = useQuery(GET_BOUGHT_PRODUCTS);

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
            {data.boughtProducts.map((data) => (
                <ProductCard
                    key={data.product.id}
                    product={data.product}
                    onDelete={handleDelete}
                    onDetails={handleDetails}
                />
            ))}
        </Box>
    );
};

export default BoughtProductsPage;