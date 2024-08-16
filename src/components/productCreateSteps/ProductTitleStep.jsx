import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

const validationSchema = Yup.object({
    title: Yup.string().required('Product title is required'),
});

const ProductTitleStep = ({ values, onNext }) => {
    return (
        <Formik
            initialValues={{ title: values.title }}
            validationSchema={validationSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <Box>
                        <Field
                            name="title"
                            as={TextField}
                            label="Product Title"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={Boolean(errors.title && touched.title)}
                            helperText={touched.title && errors.title}
                        />
                    </Box>
                    <Box mt={2}>
                        <Button type="submit" variant="contained" color="primary">
                            Next
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default ProductTitleStep;