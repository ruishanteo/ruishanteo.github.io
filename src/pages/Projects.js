"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";

import { useProjects } from "../backend/projectsStore";
import { useTechStack } from "../backend/techStackStore";

import { ProjectCard } from "../components/ProjectCard";
import { LoadingIcon } from "../components/LoadingIcon";

export function Projects() {
  const { status: projectStatus, data: projects } = useProjects();
  const { status: techStackStatus, data: techStack } = useTechStack();

  const loading = projectStatus === "pending" || techStackStatus === "pending";

  return (
    <Box mt={3} mb={5} align="center">
      <ParallaxLayer offset={0.1} speed={0.1} id="projects">
        <Typography sx={{ mb: 3 }} variant="h4">
          projects i have worked on
        </Typography>
      </ParallaxLayer>

      {loading ? (
        <LoadingIcon />
      ) : projects.length === 0 ? (
        <Box>
          <Typography>No projects found!</Typography>
        </Box>
      ) : (
        <>
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={project.id}
                offset={index}
                project={project}
                techStack={techStack}
              />
            );
          })}
        </>
      )}
    </Box>
  );
}
