import React, { useState } from 'react';
import ProductTitleStep from './ProductTitleStep';
import ProductDescriptionStep from './ProductDescriptionStep';
import ProductCategoriesStep from './ProductCategoriesStep';
import ProductPricingStep from './ProductPricingStep';
import ProductReviewStep from './ProductReviewStep';
import {useMutation} from "@apollo/client";
import {ADD_PRODUCT, GET_MY_PRODUCTS} from "../../graphql/productQueries.js";
import { useNavigate } from 'react-router-dom';

const MultiStepForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        categories: [],
        purchasePrice: '',
        rentPrice: '',
        rentType: '',
    });
    const [addProduct] = useMutation(ADD_PRODUCT);


    const handleNext = (values) => {
        setFormData(prev => ({ ...prev, ...values }));
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async () => {
        try {
            await addProduct({
                variables: {
                    productInput: formData,
                },
                refetchQueries: [{ query: GET_MY_PRODUCTS }],
            });
            alert('Product added successfully!');
            navigate('/my-products')

        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <div>
            {step === 1 && <ProductTitleStep values={formData} onNext={handleNext} />}
            {step === 2 && <ProductCategoriesStep values={formData} onNext={handleNext} onBack={handleBack} />}
            {step === 3 && <ProductDescriptionStep values={formData} onNext={handleNext} onBack={handleBack} />}
            {step === 4 && <ProductPricingStep values={formData} onNext={handleNext} onBack={handleBack} />}
            {step === 5 && <ProductReviewStep values={formData} onBack={handleBack} onSave={handleSubmit} />}
        </div>
    );
};

export default MultiStepForm;