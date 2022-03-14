import React from 'react';

import Box from '@mui/material/Box';

// eslint-disable-next-line react/prop-types
export function ContainerSidebar({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      {children}
    </Box>
  );
}
