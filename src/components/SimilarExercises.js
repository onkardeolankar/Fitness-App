import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
  return (
    <Box sx={{ marginTop: { xs: "0px" } }} p="20px">
      {/* exercises targets same targetMuscle */}
      <Typography variant="h4" mb="33px">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercise.length ? (
          <HorizontalScrollBar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>

      {/* exercises uses same equipment */}
      <Typography variant="h4" mt="33px" mb="30px">
        Exercises that uses the same equipment{" "}
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercise.length ? (
          <HorizontalScrollBar data={equipmentExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
