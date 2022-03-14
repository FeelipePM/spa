import React from "react";

import Box from "@mui/material/Box";

export const ContainerSidebar = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};
