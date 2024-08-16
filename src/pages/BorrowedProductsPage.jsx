import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import {GET_BORROWED_PRODUCTS, GET_BOUGHT_PRODUCTS} from '../graphql/productQueries.js';

const BorrowedProductsPage = () => {
    const { loading, error, data } = useQuery(GET_BORROWED_PRODUCTS);

    if (loading) return <CircularProgress />;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <Box>
            {data.rentProducts.map((data) => (
                <Box
                    key={data.product.id}
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
                        product={data.product}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default BorrowedProductsPage;