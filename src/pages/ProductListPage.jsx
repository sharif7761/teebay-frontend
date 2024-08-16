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

    const handleDetails = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <Box>
            {data.allProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onDetails={handleDetails}
                />
            ))}
        </Box>
    );
};

export default ProductListPage;