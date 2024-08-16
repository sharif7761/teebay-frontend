import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    purchasePrice: Yup.number().required('Purchase price is required').positive('Must be positive'),
    rentPrice: Yup.number().nullable().positive('Must be positive'),
    rentType: Yup.string().required('Rent type is required'),
});

const rentTypeOptions = ['PER_DAY', 'PER_HOUR'];

const ProductPricingStep = ({ values, onNext, onBack }) => {
    return (
        <Formik
            initialValues={{
                purchasePrice: values.purchasePrice,
                rentPrice: values.rentPrice,
                rentType: values.rentType
            }}
            validationSchema={validationSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="purchasePrice">Purchase Price</label>
                        <Field name="purchasePrice" type="number" />
                        {errors.purchasePrice && touched.purchasePrice ? <div>{errors.purchasePrice}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="rentPrice">Rent Price</label>
                        <Field name="rentPrice" type="number" />
                        {errors.rentPrice && touched.rentPrice ? <div>{errors.rentPrice}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="rentType">Rent Type</label>
                        <Field as="select" name="rentType">
                            {rentTypeOptions.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Field>
                        {errors.rentType && touched.rentType ? <div>{errors.rentType}</div> : null}
                    </div>
                    <button type="button" onClick={onBack}>Back</button>
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    );
};

export default ProductPricingStep;