import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ProjectCard } from "../components/ProjectCard";
import { fetchProjects } from "../backend/projectsStore";
import { fetchTechStack } from "../backend/techStackStore";
import { LoadingIcon } from "../components/LoadingIcon";

import { Box, Stack, Typography } from "@mui/material";

import { StarBorderOutlined } from "@mui/icons-material/";

export function Projects() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const projects = useSelector((state) => state.projects.projects);
  const techStack = useSelector((state) => state.techStack.techStack);

  const onUpdate = useCallback(async () => {
    setLoading(true);
    await dispatch(fetchProjects);
    await dispatch(fetchTechStack);
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    onUpdate();
  }, [onUpdate]);

  return (
    <Box mt={3} mb={5} align="center">
      <Typography sx={{ mb: 3 }} variant="h4">
        projects i have worked on
      </Typography>

      {loading ? (
        <LoadingIcon />
      ) : projects.length === 0 ? (
        <Box>
          <Typography>No projects found!</Typography>
        </Box>
      ) : (
        <Box>
          <Stack justifyContent="center" spacing={3} sx={{ mb: 10 }}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  techStack={techStack}
                />
              );
            })}
          </Stack>
          <StarBorderOutlined />
        </Box>
      )}
    </Box>
  );
}
