import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Container, Typography, Box, CircularProgress, Card, CardContent } from '@mui/material';

const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($id: ID!) {
    product(id: $id) {
      id
      title
      description
      purchasePrice
      rentPrice
      rentType
      categories
      createdAt
      updatedAt
    }
  }
`;

const ProductDetailsPage = () => {
    const { id } = useParams(); // Get product ID from the URL
    const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
        variables: { id },
    });

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error: {error.message}</Typography>;

    const product = data.product;

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            Categories: {product.categories.join(', ')}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Purchase Price: ${product.purchasePrice}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Rent Price: ${product.rentPrice} / {product.rentType}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Created At: {new Date(product.createdAt).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Last Updated: {new Date(product.updatedAt).toLocaleString()}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default ProductDetailsPage;