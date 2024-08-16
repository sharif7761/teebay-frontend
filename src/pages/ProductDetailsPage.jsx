import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper } from '@mui/material';
import { SINGLE_PRODUCT_QUERY } from '../graphql/productQueries.js';

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL params
    const { loading, error, data } = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: { productDetailsId: id },
    });

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error: {error.message}</Typography>;

    const { productDetails } = data;

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    {productDetails.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {productDetails.description}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Purchase Price: ${productDetails.purchasePrice.toFixed(2)}
                </Typography>
                {productDetails.rentPrice && (
                    <>
                        <Typography variant="h6" gutterBottom>
                            Rent Price: ${productDetails.rentPrice.toFixed(2)} ({productDetails.rentType})
                        </Typography>
                    </>
                )}
                <Typography variant="subtitle1" gutterBottom>
                    Categories: {productDetails.categories.join(', ')}
                </Typography>
            </Paper>
        </Box>
    );
};

export default ProductDetails;