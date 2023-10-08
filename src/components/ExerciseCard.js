import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#f48000",
            borderRadius: "20px",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#5296EE",
            borderRadius: "20px",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>

      <Typography
        ml="21px"
        color="#000"
        mt="12px"
        pb="10px"
        fontSize="22px"
        fontWeight="bold"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
