import React from 'react';

import Box from '@mui/material/Box';
import { Sidebar } from '../../Sidebar';
import { ContainerSidebar } from '../../ContainerSidebar';

import { EditPost } from './EditPost';

export function EditPostPage() {
  return (
    <ContainerSidebar>
      <Sidebar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <EditPost />
      </Box>
    </ContainerSidebar>
  );
}
