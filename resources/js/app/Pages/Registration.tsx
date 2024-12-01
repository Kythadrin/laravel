import React from 'react';
import { Button, TextField, Grid2, Box, Typography, Container } from '@mui/material';
import { useForm } from 'react-hook-form';

interface IFormInput {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Registration: React.FC = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        console.log(data);
        // Add your registration logic here
    };

    return (
        <Container component="main" maxWidth="xs" sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'max-content',
                    background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
                    borderRadius: 2,
                    boxShadow: 5,
                    p: 4,
                }}
            >
                <Typography variant="body1" sx={{ color: 'white', marginBottom: 3 }}>
                    Create an Account
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        width: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        backgroundColor: 'white',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        {...register('username', { required: 'Username is required' })}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        sx={{
                            borderRadius: 2,
                        }}
                    />
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        {...register('email', { required: 'Email is required' })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{
                            borderRadius: 2,
                        }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        {...register('password', { required: 'Password is required' })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={{
                            borderRadius: 2,
                        }}
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: (value) =>
                                value === getValues('password') || 'Passwords do not match',
                        })}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                        sx={{
                            borderRadius: 2,
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            borderRadius: 2,
                            padding: '12px 0',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#1976d2',
                            },
                        }}
                    >
                        Register
                    </Button>
                </Box>

                <Grid2 container justifyContent="space-between" sx={{ mt: 2, width: '100%', justifyContent: 'space-evenly' }}>
                    <Grid2>
                        <Button variant="text" color="primary" href="/" sx={{ color: 'white', fontSize: 12 }}>
                            Already have an account? Log in
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    );
};
