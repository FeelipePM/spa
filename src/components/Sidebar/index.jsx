import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const Sidebar = () => {
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [openMenuBlog, setOpenMenuBlog] = useState(false);

  const handleClickMenuUser = () => {
    setOpenMenuUser(!openMenuUser);
  };

  const handleClickMenuBlog = () => {
    setOpenMenuBlog(!openMenuBlog);
  };

  return (
    <Box sx={{ width: "200px" }}>
      <Drawer variant="permanent">
        <List disablePadding sx={{ width: "12.5rem" }}>
          <ListItem
            sx={{
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontFamily: "Roboto",
              color: "rgb(33, 43, 54)",
              fontWeight: 700,
            }}
          >
            Management
          </ListItem>
          <ListItemButton onClick={handleClickMenuUser}>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
            {openMenuUser ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMenuUser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to={`/dashboard/create-user`}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PersonAddAltOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create" />
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link to={`/dashboard/user-list`}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ListOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="List" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickMenuBlog}>
            <ListItemIcon>
              <BookOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
            {openMenuBlog ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </List>
        <Collapse in={openMenuBlog} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to={`/dashboard/new-post`}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PostAddOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="New Post" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to={`/dashboard/edit-post`}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <EditOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Post" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to={`/dashboard/posts`}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ListOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Posts" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </Drawer>
    </Box>
  );
};
