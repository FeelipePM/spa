import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { CREATE_USER } from "../../../gql/mutations";

export const SignUpPage = () => {
  const [value, setValue] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState(false);
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    createUser({
      variables: {
        name: data.get("firstName"),
        email: data.get("email"),
        password: data.get("password"),
        birthDate: data.get("birthdate"),
      },
    })
      .then((res) => {
        if (res) return "User created";
      })
      .catch((error) => {
        return setTimeout(() => {
          setErrorMessage(<Alert severity="error">{error.message}</Alert>);
        }, 2000);
        clearTimeout();
      });

    event.currentTarget.reset();
  };

  return (
    <Container component="main" sx={{ height: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
        }}
      >
        <>{errorMessage}</>
      </Box>
      <Box
        sx={{
          my: 8,
          mx: "auto",
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#1565C0" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="password"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Birthdate"
              value={value}
              minDate={new Date("1930-01-01")}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  margin="normal"
                  required
                  name="birthdate"
                  id="birthdate"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, padding: 1.5 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
