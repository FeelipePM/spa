import React, { useState } from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export function EditPost() {
  const [getValue, setGetValue] = useState('');
  return (
    <Container component="main" sx={{ height: '100vh' }}>
      <Box
        sx={{
          my: 8,
          mx: 'auto',
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1565C0' }}>
          <EditOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit a post
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            name="content"
            required
            fullWidth
            id="content"
            label="content"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="author"
            label="author"
            name="author"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="content *"
            multiline
            fullWidth
            rows="4"
            margin="normal"
            variant="outlined"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="publish-label">Select a category</InputLabel>
            <Select
              labelId="publish-label"
              id="publish"
              value={getValue}
              required
              fullWidth
              onChange={(e) => setGetValue(e.target.value)}
            >
              <MenuItem value>Published</MenuItem>
              <MenuItem value={false}>Not Published</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, padding: 1.5 }}
          >
            New post
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
