import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    description: Yup.string().required('Product description is required'),
});

const ProductDescriptionStep = ({ values, onNext, onBack }) => {
    return (
        <Formik
            initialValues={{ description: values.description }}
            validationSchema={validationSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="description">Product Description</label>
                        <Field name="description" as="textarea" />
                        {errors.description && touched.description ? <div>{errors.description}</div> : null}
                    </div>
                    <button type="button" onClick={onBack}>Back</button>
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    );
};

export default ProductDescriptionStep;