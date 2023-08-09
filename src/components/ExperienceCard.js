import { Box, Typography } from "@mui/material";

export function ExperienceCard({ experience }) {
  return (
    <Box sx={{ backgroundColor: "secondary.dark", width: "50vw", padding: 2 }}>
      <Typography variant="h6">{experience.title}</Typography>
      <Typography variant="h6">{experience.company}</Typography>
      <Typography variant="h6">{experience.description}</Typography>
      <Typography variant="h6">{experience.startDate}</Typography>
      <Typography variant="h6">{experience.endDate}</Typography>
    </Box>
  );
}
