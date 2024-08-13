import React from 'react';
import { useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {REGISTER_USER} from '../graphql/authQueries';
import registrationValidationSchema from '../validations/registrationValidationSchema.js';

const Register = () => {
    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

    const handleSubmit = async (values) => {
        try {
            const { data } = await registerUser({ variables: { ...values } });
            console.log('User registered:', data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    address: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={registrationValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label>First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="div" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="div" />
                    </div>
                    <div>
                        <label>Address</label>
                        <Field name="address" type="text" />
                        <ErrorMessage name="address" component="div" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label>Phone</label>
                        <Field name="phone" type="text" />
                        <ErrorMessage name="phone" component="div" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <Field name="confirmPassword" type="password" />
                        <ErrorMessage name="confirmPassword" component="div" />
                    </div>
                    <button type="submit" disabled={loading}>
                        Register
                    </button>
                    {error && <p>Error: {error.message}</p>}
                    {data && <p>Registration successful!</p>}
                </Form>
            </Formik>
        </div>
    );
};

export default Register;