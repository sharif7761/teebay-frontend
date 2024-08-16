import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box, Typography, MenuItem, Checkbox, ListItemText, FormControl, InputLabel, Select} from '@mui/material';
import { useParams } from 'react-router-dom';
import { SINGLE_PRODUCT_QUERY, UPDATE_PRODUCT } from '../graphql/productQueries';
import ProductEditSchema from "../validations/ProductEditSchema.js";

const ProductEditPage = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: { productDetailsId: id },
    });

    const [updateProduct] = useMutation(UPDATE_PRODUCT);
    const categoriesOptions = [
        'ELECTRONICS',
        'FURNITURE',
        'HOME_APPLIANCES',
        'SPORTING_GOODS',
        'OUTDOOR',
        'TOYS',
    ];

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await updateProduct({
                variables: {
                    updateProductId: product.id,
                    productInput: values,
                },
            });
            alert('Product updated successfully!');
        } catch (error) {
            console.error("Error updating product:", error);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (error) {
            console.error("Error fetching product details:", error);
        }
    }, [error]);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error loading product details</Typography>;

    const product = data.productDetails;

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Edit Product
            </Typography>
            <Formik
                initialValues={{
                    title: product.title,
                    categories: product.categories,
                    description: product.description,
                    purchasePrice: product.purchasePrice,
                    rentPrice: product.rentPrice || '',
                    rentType: product.rentType || '',
                }}
                validationSchema={ProductEditSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, setFieldValue }) => (
                    <Form>
                        <Box sx={{ mb: 3 }}>
                            <Field
                                as={TextField}
                                name="title"
                                label="Title"
                                fullWidth
                                error={touched.title && Boolean(errors.title)}
                                helperText={touched.title && errors.title}
                            />
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <FormControl fullWidth error={touched.categories && Boolean(errors.categories)}>
                                <InputLabel>Categories</InputLabel>
                                <Select
                                    name="categories"
                                    multiple
                                    value={values.categories}
                                    onChange={(event) => setFieldValue('categories', event.target.value)}
                                    renderValue={(selected) => selected.join(', ')}
                                >
                                    {categoriesOptions.map((category) => (
                                        <MenuItem key={category} value={category}>
                                            <Checkbox checked={values.categories.includes(category)} />
                                            <ListItemText primary={category} />
                                        </MenuItem>
                                    ))}
                                </Select>
                                {touched.categories && errors.categories && (
                                    <Typography variant="body2" color="error">
                                        {errors.categories}
                                    </Typography>
                                )}
                            </FormControl>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Field
                                as={TextField}
                                name="description"
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                                error={touched.description && Boolean(errors.description)}
                                helperText={touched.description && errors.description}
                            />
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Field
                                as={TextField}
                                name="purchasePrice"
                                label="Purchase Price"
                                fullWidth
                                error={touched.purchasePrice && Boolean(errors.purchasePrice)}
                                helperText={touched.purchasePrice && errors.purchasePrice}
                            />
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Field
                                as={TextField}
                                name="rentPrice"
                                label="Rent Price"
                                fullWidth
                                error={touched.rentPrice && Boolean(errors.rentPrice)}
                                helperText={touched.rentPrice && errors.rentPrice}
                            />
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Field
                                as={TextField}
                                name="rentType"
                                label="Rent Type"
                                select
                                fullWidth
                                error={touched.rentType && Boolean(errors.rentType)}
                                helperText={touched.rentType && errors.rentType}
                            >
                                <MenuItem value="PER_HOUR">Per Hour</MenuItem>
                                <MenuItem value="PER_DAY">Per Day</MenuItem>
                            </Field>
                        </Box>
                        <Button type="submit" variant="contained" color="primary">
                            Save Changes
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ProductEditPage;