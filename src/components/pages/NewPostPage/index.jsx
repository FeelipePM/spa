import React from "react";

import { Sidebar } from "../../../components/Sidebar/index";
import { ContainerSidebar } from "../../ContainerSidebar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const NewPostPage = () => {
  return (
    <ContainerSidebar>
      <Sidebar />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Container>{<h1>NewPost</h1>}</Container>
      </Box>
    </ContainerSidebar>
  );
};
