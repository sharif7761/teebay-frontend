import React from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/authQueries';
import  loginValidationSchema  from '../validations/loginValidationSchema.js';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../context/AuthContext.jsx";

const LoginForm = () => {
    const [login, { loading, error }] = useMutation(LOGIN_USER);
    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
            try {
                const { data } = await login({ variables: { email: values.email, password: values.password } });
                loginUser(data.login.token)
                navigate('/products');
            } catch (err) {
                console.error('Login failed', err);
            }
        },
    });

    return (
        <>
            <Typography variant="h5" align="center" mb={3}>
                SIGN IN
            </Typography>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                    maxWidth: 400,
                    mx: 'auto',
                    mt: 8,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    margin="normal"
                />

                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    margin="normal"
                />

                {error && (
                    <Typography color="error" align="center" variant="body2" mt={2}>
                        {error.message}
                    </Typography>
                )}

                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    sx={{ mt: 2 }}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </Button>

                <Typography align="center" mt={2}>
                    Do not have an account?
                    <Link href="/registration">
                        Sign Up
                    </Link>
                </Typography>
            </Box>
        </>
    );
};

export default LoginForm;