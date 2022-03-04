import React from "react";

import { Sidebar } from "../../../components/Sidebar/index";
import { ContainerSidebar } from "../../ContainerSidebar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const PostsPage = () => {
  return (
    <ContainerSidebar>
      <Sidebar />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Container>
          <Typography
            variant="h5"
            component="div"
            sx={{
              my: "1rem",
            }}
          >
            Posts
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://www.redeszone.net/app/uploads-redeszone.net/2019/02/Dominios-DEV-800x388.jpg"
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
                >
                  Marija Najdova
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://www.redeszone.net/app/uploads-redeszone.net/2019/02/Dominios-DEV-800x388.jpg"
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
                >
                  Marija Najdova
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://www.redeszone.net/app/uploads-redeszone.net/2019/02/Dominios-DEV-800x388.jpg"
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
                >
                  Marija Najdova
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </ContainerSidebar>
  );
};
