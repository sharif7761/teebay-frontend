import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ProductCard = ({ product, onDelete, onDetails }) => {
    return (
        <Box
            sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                margin: '16px 0',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2" sx={{ margin: '8px 0' }}>
                {product.description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="primary" onClick={() => onDetails(product.id)}>
                    Details
                </Button>
                <Button variant="contained" color="secondary" onClick={() => onDelete(product.id)}>
                    Delete
                </Button>
            </Box>
        </Box>
    );
};

export default ProductCard;