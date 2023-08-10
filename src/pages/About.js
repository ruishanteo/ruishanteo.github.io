import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchExperiences } from "../backend/experiencesStore";

import photo from "../assets/pic.png";
import { LoadingIcon } from "../components/LoadingIcon";

import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

import { Email, GitHub, StarBorderOutlined } from "@mui/icons-material";
import { fetchTechStack } from "../backend/techStackStore";
import { ExperienceCard } from "../components/ExperienceCard";

export function About() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const experiences = useSelector((state) => state.experiences.experiences);
  const allTechStack = useSelector((state) => state.techStack.techStack);
  const techStack = allTechStack.filter((tech) => tech.isInProfile);

  const onUpdate = useCallback(async () => {
    setLoading(true);
    await dispatch(fetchExperiences);
    await dispatch(fetchTechStack);
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    onUpdate();
  }, [onUpdate]);

  return (
    <Box mt={3} mb={5} align="center">
      <Typography sx={{ mb: 3 }} variant="h4">
        about me
      </Typography>

      <Grid
        container
        direction={{ xs: "column", sm: "row-reverse" }}
        justifyContent="center"
      >
        <Grid item>
          <img src={photo} alt={"profile"} width={300} />
        </Grid>

        <Grid item>
          <Grid item>
            <Box align="left" sx={{ ml: 3 }}>
              <Typography sx={{ ml: 1 }} variant="h5">
                links
              </Typography>
              <Box
                sx={{
                  mb: 3,
                  height: 5,
                  width: 180,
                  backgroundColor: "primary.dark",
                }}
              />
              <Grid container direction="column">
                <Grid item>
                  <Button
                    onClick={(e) => {
                      window.location.href = "mailto:ruishan.teo03@gmail.com";
                    }}
                    sx={{
                      color: "primary.dark",
                      textTransform: "none",
                    }}
                  >
                    <Email />
                    <Typography
                      sx={{
                        display: "flex",
                        fontFamily: "Roboto",
                        ml: 2,
                      }}
                      variant="h6"
                    >
                      Email
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={(e) => {
                      window.location.href = "https://github.com/ruishanteo";
                    }}
                    sx={{ color: "primary.dark", textTransform: "none" }}
                  >
                    <GitHub />
                    <Typography
                      sx={{
                        display: "flex",
                        fontFamily: "Roboto",
                        ml: 2,
                      }}
                      variant="h6"
                    >
                      Github
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item sx={{ mt: 3 }}>
            <Box align="left" sx={{ ml: 3 }}>
              <Typography sx={{ ml: 1 }} variant="h5">
                tech stack
              </Typography>
              <Box
                sx={{
                  mb: 3,
                  height: 5,
                  width: 180,
                  backgroundColor: "primary.dark",
                }}
              />
              {loading ? (
                <LoadingIcon />
              ) : techStack.length === 0 ? (
                <Box>
                  <Typography align="center">No tech stack yet!</Typography>
                </Box>
              ) : (
                <Grid container spacing={1} sx={{ alignItems: "center" }}>
                  {techStack.map((tech) => {
                    return (
                      <Grid item key={tech.id}>
                        <Tooltip title={tech.name}>
                          <img src={tech.iconImg} alt={tech.name} width={50} />
                        </Tooltip>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Box>
          </Grid>

          <Grid item sx={{ mt: 3 }}>
            <Box align="left" sx={{ ml: 3 }}>
              <Typography sx={{ ml: 1 }} variant="h5">
                experiences
              </Typography>
              <Box
                sx={{
                  mb: 3,
                  height: 5,
                  width: 180,
                  backgroundColor: "primary.dark",
                }}
              />
              {loading ? (
                <LoadingIcon />
              ) : experiences.length === 0 ? (
                <Box>
                  <Typography align="center">No experiences yet!</Typography>
                </Box>
              ) : (
                <Timeline sx={{ alignItems: "center" }}>
                  {experiences.map((experience) => {
                    return (
                      <TimelineItem key={experience.id}>
                        <TimelineOppositeContent sx={{ display: "none" }} />
                        <TimelineSeparator>
                          <TimelineDot
                            sx={{
                              minWidth: "1vw",
                              minHeight: "1vw",
                              backgroundColor: "secondary.dark",
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <StarBorderOutlined
                              sx={{ color: "secondary.main" }}
                            />
                          </TimelineDot>
                          <TimelineConnector
                            sx={{
                              minWidth: 2,
                              borderRadius: 40,
                              backgroundColor: "secondary.main",
                            }}
                          />
                        </TimelineSeparator>
                        <TimelineContent>
                          <ExperienceCard experience={experience} />
                        </TimelineContent>
                      </TimelineItem>
                    );
                  })}
                </Timeline>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
