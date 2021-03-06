import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Alert from '@mui/material/Alert';

import { AUTH_USER } from '../../../gql/mutations';

export function SignInPage() {
  const [value, setValue] = React.useState({
    password: '',
    showPassword: false,
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handlePasswordVisibility = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };

  const [signIn] = useMutation(AUTH_USER);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    signIn({
      variables: {
        email: data.get('email'),
        password: data.get('password'),
      },
    })
      .then((res) => {
        const { token } = res.data.signIn;

        localStorage.setItem('token', token);
        return setErrorMessage(
          <Alert
            severity="success"
            onClose={() => {
              setErrorMessage(false);
            }}
          >
            Login Successfully
          </Alert>,
        );
      })
      .catch((error) => setErrorMessage(
        <Alert
          severity="error"
          onClose={() => {
            setErrorMessage(false);
          }}
        >
          {error.message}
        </Alert>,
      ));

    event.target.reset();
    setValue({ password: '' });
  };

  return (
    <Container component="main" sx={{ height: '100vh' }}>
      <Box
        sx={{
          position: 'absolute',
          right: 10,
          top: 10,
          textAlign: 'center',
        }}
      >
        {errorMessage}
      </Box>
      <Box
        sx={{
          my: 8,
          mx: 'auto',
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1565C0' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={value.showPassword ? 'text' : 'password'}
            id="password"
            value={value.password}
            onChange={handleChange('password')}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handlePasswordVisibility}
                  >
                    {value.showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, padding: 1.5 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
