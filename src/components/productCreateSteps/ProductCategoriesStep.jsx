import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    categories: Yup.array().of(Yup.string()).min(1, 'At least one category is required'),
});

const categoriesOptions = ['ELECTRONICS', 'FURNITURE', 'HOME_APPLIANCES', 'SPORTING_GOODS', 'OUTDOOR', 'TOYS'];

const ProductCategoriesStep = ({ values, onNext, onBack }) => {
    return (
        <Formik
            initialValues={{ categories: values.categories }}
            validationSchema={validationSchema}
            onSubmit={onNext}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="categories">Product Categories</label>
                        <Field as="select" name="categories" multiple>
                            {categoriesOptions.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </Field>
                        {errors.categories && touched.categories ? <div>{errors.categories}</div> : null}
                    </div>
                    <button type="button" onClick={onBack}>Back</button>
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    );
};

export default ProductCategoriesStep;