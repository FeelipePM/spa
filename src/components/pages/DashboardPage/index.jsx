import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const DashboardPage = () => {
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [openMenuBlog, setOpenMenuBlog] = useState(false);

  const handleClickMenuUser = () => {
    setOpenMenuUser(!openMenuUser);
  };

  const handleClickMenuBlog = () => {
    setOpenMenuBlog(!openMenuBlog);
  };

  return (
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
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItemButton>
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
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PostAddOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="New Post" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Post" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ListOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItemButton>
        </List>
      </Collapse>
    </Drawer>
  );
};
