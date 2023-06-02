import * as React from "react";
import { ProjectCard } from "../components/ProjectCard";

import { Box, Typography } from "@mui/material";

export function Projects() {
  return (
    <Box mt={5} align="center">
      <Typography sx={{ fontWeight: 600, fontFamily: "Roboto" }} variant="h4">
        projects i have worked on
      </Typography>
      <ProjectCard />
    </Box>
  );
}
