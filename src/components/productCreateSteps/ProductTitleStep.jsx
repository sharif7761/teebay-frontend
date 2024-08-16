import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().required('Product title is required'),
});

const ProductTitleStep = ({ values, onNext }) => {
    return (
        <Formik
            initialValues={{ title: values.title }}
            validationSchema={validationSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="title">Product Title</label>
                        <Field name="title" type="text" />
                        {errors.title && touched.title ? <div>{errors.title}</div> : null}
                    </div>
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    );
};

export default ProductTitleStep;