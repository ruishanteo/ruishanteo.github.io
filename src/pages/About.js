import {
  Box,
  Button,
  Grid,
  Link,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

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

import { useExperiences } from "../backend/experiencesStore";
import { useTechStack } from "../backend/techStackStore";

import photo from "../assets/pic.png";
import { LoadingIcon } from "../components/LoadingIcon";
import { ExperienceCard } from "../components/ExperienceCard";
import { Lamp } from "../utils/Lamp";

export function About() {
  const theme = useTheme();
  const { status: experienceStatus, data: experiences } = useExperiences();
  const { status: techStackStatus, data: techStack } = useTechStack();

  const loading =
    experienceStatus === "pending" || techStackStatus === "pending";

  return (
    <Box mt={3} mb={5} align="center">
      {theme.palette.mode === "dark" ? (
        <Lamp
          background={theme.palette.background}
          light={theme.palette.primary.dark}
        />
      ) : (
        <Typography sx={{ mb: 3 }} variant="h4">
          about me
        </Typography>
      )}
      <Grid
        container
        direction={{ xs: "column", sm: "row-reverse" }}
        justifyContent="center"
      >
        <Grid item>
          <img src={photo} alt={"profile"} width={300} />
        </Grid>

        <Grid item xs={6}>
          <Grid item>
            <Box align="left" sx={{ ml: 3 }}>
              <Typography sx={{ ml: 1 }} variant="h5">
                links
              </Typography>
              <Box
                sx={{
                  mb: 3,
                  height: 3,
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
                  <Link
                    href={"https://github.com/ruishanteo"}
                    sx={{
                      textDecoration: "none",
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button
                      sx={{ color: "primary.dark", textTransform: "none" }}
                    >
                      <GitHub />
                      <Typography
                        sx={{
                          display: "flex",
                          fontFamily: "Roboto",
                          ml: 2,
                          color: "primary.dark",
                        }}
                        variant="h6"
                      >
                        Github
                      </Typography>
                    </Button>
                  </Link>
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
                  height: 3,
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
                <Grid
                  container
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    padding: 2,
                    borderRadius: "34% 25% 30% 13% / 34% 24% 54% 90%",
                    backgroundColor: "secondary.main",
                  }}
                >
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
                  height: 3,
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
      <StarBorderOutlined />
    </Box>
  );
}
