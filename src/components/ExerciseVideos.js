import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const exerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";
  // console.log("exerciseVideos");
  // console.log(exerciseVideos);

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px" fontWeight="bold">
        Watch{" "}
        <span style={{ color: "firebrick", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        alignItems="center"
        justifyContent="flex-start"
        flexWrap="wrap"
        mb="50px"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "20px 100px", xs: "80px 0px" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((content, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${content.video.videoId}`}
            target="_blank"
            className="exercise-video"
            rel="noreferrer"
          >
            <img
              src={content.video.thumbnails[0].url}
              alt={content.video.title}
            />
            <Box>
              <Typography variant="h5" color="coral">
                {content.video.title}
              </Typography>
              <Typography variant="h6">
                <span style={{ color: "darkgrey" }}>Channel: </span>
                {content.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default exerciseVideos;
