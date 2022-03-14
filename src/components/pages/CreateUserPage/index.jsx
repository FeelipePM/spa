import React from "react";

import { Sidebar } from "../../../components/Sidebar/index";
import { ContainerSidebar } from "../../ContainerSidebar";
import { CreateUser } from "./createUser";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const CreateUserPage = () => {
  return (
    <ContainerSidebar>
      <Sidebar />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Container>
          <CreateUser />
        </Container>
      </Box>
    </ContainerSidebar>
  );
};
