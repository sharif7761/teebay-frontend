import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Box
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
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2">Categories: {product?.categories?.join(', ')}</Typography>
            <Typography variant="body2">Price: ${product?.purchasePrice} | Rent: ${product?.rentPrice} {product?.rentType?.replace('_', ' ')}</Typography>
            <Typography variant="body2" sx={{ margin: '8px 0' }}>
                {product.description}
            </Typography>
            <Typography variant="body2">Views: {product?.views}</Typography>
        </Box>
    );
};

export default ProductCard;