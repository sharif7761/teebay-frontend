import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ProductCard = ({ product, onDetails }) => {
    return (
        <>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2">Categories: {product?.categories?.join(', ')}</Typography>
            <Typography variant="body2">Price: ${product?.purchasePrice} | Rent: ${product?.rentPrice} {product?.rentType?.replace('_', ' ')}</Typography>
            <Typography variant="body2" sx={{ margin: '8px 0' }}>
                {product.description}
            </Typography>
            <Typography variant="body2">Views: {product?.views}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                {onDetails && (
                    <Button variant="contained" color="primary" onClick={() => onDetails(product.id)}>
                        Details
                    </Button>
                )}
            </Box>
        </>
    );
};

export default ProductCard;