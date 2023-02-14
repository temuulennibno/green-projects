import { Box } from "@mui/material";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { DrawerHeader, Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar {...{ open, handleDrawerOpen, handleDrawerClose }} />
      <Sidebar open={open} />
      <Box>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
