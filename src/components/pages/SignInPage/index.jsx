import React from "react";
import { useMutation } from "@apollo/client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { AUTH_USER } from "../../../gql/mutations";

export const SignInPage = () => {
  const [signIn, { loading, error }] = useMutation(AUTH_USER);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    signIn({
      variables: {
        email: data.get("email"),
        password: data.get("password"),
      },
    }).then((res) => {
      const { token } = res.data.signIn;

      if (loading) return "Submitting...";
      if (error) return `Submission error! ${error.message}`;

      localStorage.setItem("token", token);
    });

    event.target.reset();
  };

  return (
    <Container component="main" sx={{ height: "100vh" }}>
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
        <Link href="/signup" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Container>
  );
};
