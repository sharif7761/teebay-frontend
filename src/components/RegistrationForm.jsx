import React from 'react';
import { useMutation } from '@apollo/client';
import { Box, Button, TextField, Link, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { REGISTER_USER } from '../graphql/authQueries';
import  registrationValidationSchema  from '../validations/registrationValidationSchema.js';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [registerUser] = useMutation(REGISTER_USER);
    const navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        confirmPassword: ''
    };

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const { confirmPassword, ...rest } = values;
            const { data } = await registerUser({ variables: { registerInput: rest } });
            alert('User registration successful')
            navigate('/login');
        } catch (error) {
            setErrors({ submit: error.message });
            console.error('Registration error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registrationValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <Typography variant="h5" gutterBottom>
                        SIGN UP
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" p={3} boxShadow={3} borderRadius={5} minWidth={500} mx="auto">
                        <Field
                            name="firstName"
                            as={TextField}
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                        />
                        <Field
                            name="lastName"
                            as={TextField}
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                        />
                        <Field
                            name="email"
                            as={TextField}
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                        />
                        <Field
                            name="address"
                            as={TextField}
                            label="Address"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={touched.address && !!errors.address}
                            helperText={touched.address && errors.address}
                        />
                        <Field
                            name="phone"
                            as={TextField}
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={touched.phone && !!errors.phone}
                            helperText={touched.phone && errors.phone}
                        />
                        <Field
                            name="password"
                            as={TextField}
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={touched.password && !!errors.password}
                            helperText={touched.password && errors.password}
                        />
                        <Field
                            name="confirmPassword"
                            as={TextField}
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={touched.confirmPassword && !!errors.confirmPassword}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                        />
                        {errors.submit && (
                            <Typography color="error" variant="body2" gutterBottom>
                                {errors.submit}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            style={{ marginTop: '16px' }}
                        >
                            Register
                        </Button>
                        <Typography align="center" mt={2}>
                            Already have an account?
                            <Link href="/login">
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;