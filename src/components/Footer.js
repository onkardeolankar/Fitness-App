import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" maxHeight="100px">
      <Stack gap="20px" alignItems="center" px="40px" pt="20px">
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h5" pb="20px">
          Made with ❤️ by Rahul
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
