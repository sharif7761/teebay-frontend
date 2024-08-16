import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useMutation } from '@apollo/client';

const ProductActionModal = ({
                                open,
                                handleClose,
                                deleteProductId,
                                actionType,
                                mutation,
                                refetchProducts,
                                confirmationText,
                                buttonText,
                            }) => {
    const [performAction] = useMutation(mutation);

    const handleAction = async () => {
        try {
            await performAction({ variables: { deleteProductId } });
            refetchProducts(); // To refetch the products list after action
            handleClose();
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