import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Button, Box } from '@mui/material';

const validationSchema = Yup.object({
    categories: Yup.array().of(Yup.string()).min(1, 'At least one category is required'),
});

const categoriesOptions = ['ELECTRONICS', 'FURNITURE', 'HOME_APPLIANCES', 'SPORTING_GOODS', 'OUTDOOR', 'TOYS'];

const ProductCategoriesStep = ({ values, onNext, onBack }) => {
    return (
        <Formik
            initialValues={{ categories: values.categories }}
            validationSchema={validationSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <Box>
                        <FormControl fullWidth variant="outlined" margin="normal" error={Boolean(errors.categories && touched.categories)}>
                            <InputLabel>Product Categories</InputLabel>
                            <Field
                                name="categories"
                                as={Select}
                                multiple
                                renderValue={(selected) => selected.join(', ')}
                            >
                                {categoriesOptions.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Field>
                            <FormHelperText>{touched.categories && errors.categories}</FormHelperText>
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

export default ProductCategoriesStep;