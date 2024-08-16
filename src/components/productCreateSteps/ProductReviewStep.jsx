import React from 'react';
import { Formik, Field, Form } from 'formik';

const ProductReviewStep = ({ values, onBack, onSave }) => {
    return (
        <div>
            <h2>Review Your Product</h2>
            <p><strong>Title:</strong> {values.title}</p>
            <p><strong>Description:</strong> {values.description}</p>
            <p><strong>Categories:</strong> {values.categories.join(', ')}</p>
            <p><strong>Purchase Price:</strong> {values.purchasePrice}</p>
            <p><strong>Rent Price:</strong> {values.rentPrice}</p>
            <p><strong>Rent Type:</strong> {values.rentType}</p>
            <button type="button" onClick={onBack}>Back</button>
            <button type="button" onClick={onSave}>Save</button>
        </div>
    );
};

export default ProductReviewStep;