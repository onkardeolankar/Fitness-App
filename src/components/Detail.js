import { Typography, Stack, Button } from "@mui/material";
import React from "react";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h2" fontWeight="bold" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>

        {extraDetails.map((item) => (
          <Stack key={item.name} direction="row" gap="35px" alignItems="center">
            <Button
              sx={{
                backgroundColor: "#ECFF73",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} alt={item.name} />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
