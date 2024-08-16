import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import { GET_BOUGHT_PRODUCTS } from '../graphql/productQueries.js';

const BoughtProductsPage = () => {
    const { loading, error, data, refetch } = useQuery(GET_BOUGHT_PRODUCTS);

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (loading) return <CircularProgress />;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <Box>
            {data.boughtProducts.map((data) => (
                <Box
                    key={data.product.id}
                    sx={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        margin: '16px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <ProductCard
                        product={data.product}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default BoughtProductsPage;