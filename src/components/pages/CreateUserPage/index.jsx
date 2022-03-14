import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Sidebar } from '../../Sidebar/index';
import { ContainerSidebar } from '../../ContainerSidebar';
import { CreateUser } from './createUser';

export function CreateUserPage() {
  return (
    <ContainerSidebar>
      <Sidebar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Container>
          <CreateUser />
        </Container>
      </Box>
    </ContainerSidebar>
  );
}
