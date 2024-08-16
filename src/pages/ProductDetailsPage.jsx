import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {Box, Typography, CircularProgress, Paper, Button} from '@mui/material';
import {SINGLE_PRODUCT_QUERY, BUY_PRODUCT_MUTATION, RENT_PRODUCT_MUTATION} from '../graphql/productQueries.js';
import ProductActionModal from "../components/modal/ProductActions.jsx";

const ProductDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [actionType, setActionType] = useState('');
    const { id } = useParams(); // Get the product ID from the URL params
    const { loading, error, data, refetch  } = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: { productDetailsId: id },
    });

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error: {error.message}</Typography>;

    const { productDetails } = data;

    const handleOpenModal = (productId, type) => {
        setSelectedProductId(productId);
        setActionType(type);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedProductId(null);
        setActionType('');
    };

    const getMutationAndText = () => {
        switch (actionType) {
            case 'Buy':
                return {
                    mutation: BUY_PRODUCT_MUTATION,
                    confirmationText: 'Are you sure you want to buy this product?',
                    buttonText: 'Buy',
                };
            case 'Rent':
                return {
                    mutation: BUY_PRODUCT_MUTATION,
                    confirmationText: 'Are you sure you want to rent this product?',
                    buttonText: 'Rent',
                };
            default:
                return {};
        }
    };

    const { mutation, confirmationText, buttonText } = getMutationAndText();

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
            <Paper elevation={3} sx={{ p: 3,  display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="h6" gutterBottom>
                    {productDetails.title}
                </Typography>
                <Typography variant="body2">Categories: {productDetails?.categories?.join(', ')}</Typography>
                <Typography variant="body2">Price: ${productDetails?.purchasePrice} | Rent: ${productDetails?.rentPrice} {productDetails?.rentType?.replace('_', ' ')}</Typography>

                <Typography variant="body1" gutterBottom>
                    {productDetails.description}
                </Typography>
                {productDetails?.transactions?.length ?
                    <Typography variant="body2" sx={{ flexGrow: 1 }}>
                        The Product Is Already Sold / Rented
                    </Typography>
                    :
                    <>
                        <Button
                            color="primary"
                            onClick={() => handleOpenModal(productDetails.id, 'Buy')}
                            variant="contained"
                        >
                            Buy
                        </Button>
                        <Button
                            sx={{  mt: 2 }}
                            color="secondary"
                            onClick={() => handleOpenModal(productDetails.id, 'Rent')}
                            variant="contained"
                        >
                            Rent
                        </Button>
                    </>
                }
            </Paper>

            {actionType === 'Buy' ?
                <ProductActionModal
                    open={openModal}
                    handleClose={handleCloseModal}
                    productId={selectedProductId}
                    actionType={actionType}
                    mutation={BUY_PRODUCT_MUTATION}
                    refetchProducts={refetch}
                    confirmationText={confirmationText}
                    buttonText={buttonText}
                />
            :
                <ProductActionModal
                    open={openModal}
                    handleClose={handleCloseModal}
                    productId={selectedProductId}
                    actionType={actionType}
                    mutation={RENT_PRODUCT_MUTATION}
                    refetchProducts={refetch}
                    confirmationText={confirmationText}
                    buttonText={buttonText}
                />
            }

        </Box>
    );
};

export default ProductDetails;