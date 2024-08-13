import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Typography, Grid, Box, Card, CardContent, CircularProgress, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = ({ title, query, variables }) => {
    const { loading, error, data } = useQuery(query, { variables });

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error: {error.message}</Typography>;

    const products = data.products || data.myProducts;

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                {products.length > 0 ? (
                    <Grid container spacing={3}>
                        {products.map((product) => (
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
                                        <Button
                                            component={Link}
                                            to={`/products/${product.id}`}
                                            variant="contained"
                                            color="primary"
                                        >
                                            View Details
                                        </Button>
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

export default ProductList;