import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress, Button } from '@mui/material';
import ProductCard from '../components/product/ProductCard.jsx';
import { GET_MY_PRODUCTS, DELETE_PRODUCT_MUTATION } from '../graphql/productQueries.js';
import ProductActionModal from "../components/modal/ProductActions.jsx";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MyProductsPage = () => {
    const navigate = useNavigate();
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

    const handleCardClick = (id) => {
         navigate(`/edit-product/${id}`)
    }

    return (
        <Box>
            {data.userProducts.map((product) => (
                <Box key={product.id} sx={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        margin: '16px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                     onClick={(e) => {handleCardClick(product.id)}}
                >
                    <ProductCard
                        product={product}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                            <Button variant="contained" color="primary"  onClick={(e) => { e.stopPropagation();handleOpenModal(product.id, 'Delete'); }}>
                                Delete
                            </Button>
                    </Box>
                </Box>
            ))}
            <Button variant="contained" color="primary" component={Link} to="/add-product">
                Add Product
            </Button>
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