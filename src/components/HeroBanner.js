import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "190px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      p="20px"
      position="relative"
    >
      <Typography color="red" fontWeight="600" fontSize="20px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "50px", xs: "35px" },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb="2rem">
        Check out the most effective exercises.
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ padding: "10px" }}
        onClick={() => {
          document
            .getElementById("searchResult")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontSize="200px"
        fontWeight="600"
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercises
      </Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
