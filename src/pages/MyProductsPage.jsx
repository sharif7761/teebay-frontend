import React from 'react';
import { useQuery } from '@apollo/client';
import { Container, Typography, Grid, Box, Card, CardContent, CircularProgress } from '@mui/material';
import { GET_MY_PRODUCTS } from '../graphql/productQueries';

const ProductListPage = () => {
    const { loading, error, data } = useQuery(GET_MY_PRODUCTS);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error: {error.message}</Typography>;

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    My Products
                </Typography>
                {data.myProducts.length > 0 ? (
                    <Grid container spacing={3}>
                        {data.myProducts.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">{product.title}</Typography>
                                        <Typography variant="body2">{product.description}</Typography>
                                        <Typography variant="body2">
                                            Purchase Price: ${product.purchasePrice}
                                        </Typography>
                                        <Typography variant="body2">
                                            Rent Price: ${product.rentPrice}
                                        </Typography>
                                        <Typography variant="body2">
                                            Categories: {product.categories.join(', ')}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography>No products found.</Typography>
                )}
            </Box>
        </Container>
    );
};

export default ProductListPage;