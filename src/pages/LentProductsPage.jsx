import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import {GET_LENT_PRODUCTS} from '../graphql/productQueries.js';

const LentProductsPage = () => {
    const { loading, error, data, refetch } = useQuery(GET_LENT_PRODUCTS);

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (loading) return <CircularProgress />;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <Box>
            {data.lentProducts.map((data) => (
                <Box
                    key={data.id}
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
                        product={data}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default LentProductsPage;