import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "200px",
        height: "200px",
        cursor: "pointer",
        gap: "47px",
        marginTop: "1rem",
      }}
      onClick={() => {
        setBodyPart(item);
        // window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        document
          .getElementById("searchResult")
          .scrollIntoView({ behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: "60px", height: "60px" }} />
      <Typography
        textAlign="center"
        textTransform="capitalize"
        fontSize="22px"
        fontWeight="bold"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
