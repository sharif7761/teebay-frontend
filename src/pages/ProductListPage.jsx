import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import { GET_ALL_PRODUCTS } from '../graphql/productQueries.js';

const ProductListPage = () => {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
    console.log(data)
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
            {data.allProducts.map((product) => (
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

export default ProductListPage;