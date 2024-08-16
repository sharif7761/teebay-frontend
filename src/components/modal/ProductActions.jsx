import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const ProductActionModal = ({
                                open,
                                handleClose,
                                deleteProductId,
                                productId,
                                actionType,
                                mutation,
                                refetchProducts,
                                confirmationText,
                                buttonText,
                            }) => {
    const [performAction] = useMutation(mutation);
    const navigate = useNavigate();
    const handleAction = async () => {
        try {
            actionType === 'Delete' ?
            await performAction({ variables: { deleteProductId } })
            : await performAction({ variables: { productId } })
            refetchProducts();
            handleClose();
            alert(`successfully ${actionType}`)
            navigate('/products')
        } catch (error) {
            console.error(`Error performing ${actionType} action:`, error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{`${actionType} Product`}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {confirmationText}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleAction} color="secondary" variant="contained">
                    {buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductActionModal;