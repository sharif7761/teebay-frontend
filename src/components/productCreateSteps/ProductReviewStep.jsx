import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const ProductReviewStep = ({ values, onBack, onSave }) => {
    return (
        <Box>
            <Typography variant="h6">Review Your Product</Typography>
            <Box mt={2}>
                <Typography><strong>Title:</strong> {values.title}</Typography>
                <Typography><strong>Description:</strong> {values.description}</Typography>
                <Typography><strong>Categories:</strong> {values.categories.join(', ')}</Typography>
                <Typography><strong>Purchase Price:</strong> {values.purchasePrice}</Typography>
                <Typography><strong>Rent Price:</strong> {values.rentPrice}</Typography>
                <Typography><strong>Rent Type:</strong> {values.rentType}</Typography>
            </Box>
            <Box mt={2}>
                <Button type="button" variant="outlined" color="secondary" onClick={onBack}>
                    Back
                </Button>
                <Button type="button" variant="contained" color="primary" sx={{ ml: 2 }} onClick={onSave}>
                    Save
                </Button>
            </Box>
        </Box>
    );
};

export default ProductReviewStep;