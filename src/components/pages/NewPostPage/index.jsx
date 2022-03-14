import React from 'react';

import Box from '@mui/material/Box';
import { Sidebar } from '../../Sidebar';
import { ContainerSidebar } from '../../ContainerSidebar';

import { NewPost } from './NewPost';

export function NewPostPage() {
  return (
    <ContainerSidebar>
      <Sidebar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <NewPost />
      </Box>
    </ContainerSidebar>
  );
}
