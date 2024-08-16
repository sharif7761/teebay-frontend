import React from 'react';
import { Box} from '@mui/material';
import MultiStepForm from "../components/productCreateSteps/MultiStepForm.jsx";

const ProductAddPage = () => {

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <MultiStepForm/>
        </Box>
    );
};

export default ProductAddPage;