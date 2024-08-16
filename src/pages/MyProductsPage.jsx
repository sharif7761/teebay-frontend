import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress, Button } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import { GET_MY_PRODUCTS, DELETE_PRODUCT_MUTATION } from '../graphql/productQueries.js';
import ProductActionModal from "../components/modal/ProductActions.jsx";

const MyProductsPage = () => {
    const { loading, error, data, refetch } = useQuery(GET_MY_PRODUCTS);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    if (loading) return <CircularProgress />;
    if (error) return <p>Error: {error.message}</p>;


    const handleOpenModal = (productId) => {
        setSelectedProductId(productId);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedProductId(null);
    };

    const handleDelete = (id) => {
        // Implement delete functionality
    };

    const handleDetails = (id) => {
        // Implement details functionality
    };

    return (
        <Box>
            {data.userProducts.map((product) => (
                <>
                    <ProductCard
                        key={product.id}
                        product={product}
                        onDelete={handleDelete}
                        onDetails={handleDetails}
                    />
                    <Button
                        color="secondary"
                        onClick={() => handleOpenModal(product.id, 'Delete')}
                        variant="contained"
                    >
                        Delete
                    </Button>
                </>
            ))}
            <ProductActionModal
                open={openModal}
                handleClose={handleCloseModal}
                deleteProductId={selectedProductId}
                actionType={'Delete'}
                mutation={DELETE_PRODUCT_MUTATION}
                refetchProducts={refetch}
                confirmationText={'Are you sure you want to delete this product?'}
                buttonText={'Delete'}
            />
        </Box>
    );
};

export default MyProductsPage;