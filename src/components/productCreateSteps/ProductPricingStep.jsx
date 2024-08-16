import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Box } from '@mui/material';

const validationSchema = Yup.object({
    purchasePrice: Yup.number().required('Purchase price is required').positive('Must be positive'),
    rentPrice: Yup.number().nullable().positive('Must be positive'),
    rentType: Yup.string().required('Rent type is required'),
});

const rentTypeOptions = ['PER_DAY', 'PER_HOUR'];

const ProductPricingStep = ({ values, onNext, onBack }) => {
    return (
        <Formik
            initialValues={{
                purchasePrice: values.purchasePrice,
                rentPrice: values.rentPrice,
                rentType: values.rentType
            }}
            validationSchema={validationSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <Box>
                        <Field
                            name="purchasePrice"
                            as={TextField}
                            label="Purchase Price"
                            variant="outlined"
                            type="number"
                            fullWidth
                            margin="normal"
                            error={Boolean(errors.purchasePrice && touched.purchasePrice)}
                            helperText={touched.purchasePrice && errors.purchasePrice}
                        />
                        <Field
                            name="rentPrice"
                            as={TextField}
                            label="Rent Price"
                            variant="outlined"
                            type="number"
                            fullWidth
                            margin="normal"
                            error={Boolean(errors.rentPrice && touched.rentPrice)}
                            helperText={touched.rentPrice && errors.rentPrice}
                        />
                        <FormControl fullWidth variant="outlined" margin="normal" error={Boolean(errors.rentType && touched.rentType)}>
                            <InputLabel>Rent Type</InputLabel>
                            <Field
                                name="rentType"
                                as={Select}
                            >
                                {rentTypeOptions.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Field>
                        </FormControl>
                    </Box>
                    <Box mt={2}>
                        <Button type="button" variant="outlined" color="secondary" onClick={onBack}>
                            Back
                        </Button>
                        <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
                            Next
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default ProductPricingStep;