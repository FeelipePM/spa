import React from 'react';

import { Sidebar } from '../../Sidebar/index';
import { ContainerSidebar } from '../../ContainerSidebar';

export function DashboardPage() {
  return (
    <ContainerSidebar>
      <Sidebar />
    </ContainerSidebar>
  );
}
