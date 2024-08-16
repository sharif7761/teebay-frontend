import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

const validationSchema = Yup.object({
    description: Yup.string().required('Product description is required'),
});

const ProductDescriptionStep = ({ values, onNext, onBack }) => {
    return (
        <Formik
            initialValues={{ description: values.description }}
            validationSchema={validationSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <Box>
                        <Field
                            name="description"
                            as={TextField}
                            label="Product Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            error={Boolean(errors.description && touched.description)}
                            helperText={touched.description && errors.description}
                        />
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

export default ProductDescriptionStep;