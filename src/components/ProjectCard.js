import * as React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

const renderTech = (techName, techStack) => {
  let srcUrl = "";
  techStack.forEach((techData) => {
    if (techData.id === techName.toLowerCase()) {
      srcUrl = techData.iconImg;
    }
  });

  return (
    <Grid item key={techName}>
      <Tooltip title={techName}>
        <img src={srcUrl} alt={techName} width={30} />
      </Tooltip>
    </Grid>
  );
};

export function ProjectCard({ project, techStack }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Card
        onClick={handleClickOpen}
        sx={{
          "&:hover": {
            boxShadow: 10,
          },
          borderRadius: 3,
          width: { xs: 400, md: "80vh" },
        }}
      >
        <CardMedia
          component="img"
          alt="project1"
          width={500}
          height={(500 / 4) * 3}
          image={project.thumbnailImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>

          <Box
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              mb: 3,
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ wordBreak: "break-word", textTransform: "none" }}
            >
              {project.description}
            </Typography>
          </Box>
          <Grid container>
            {project.techStack.map((tech) => renderTech(tech, techStack))}
          </Grid>
        </CardContent>
      </Card>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle
          sx={{
            backgroundColor: "secondary.dark",
            display: "flex",
            padding: 2,
            marginBottom: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {project.title.toUpperCase()}
          </Typography>
        </DialogTitle>

        <DialogContent>
          <img width="100%" src={project.fullSizedImg} alt="fullSized img" />
          <DialogContentText variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Description
          </DialogContentText>

          <DialogContentText variant="body1">
            {project.description}
          </DialogContentText>

          <DialogContentText variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Start Date:
          </DialogContentText>

          <DialogContentText variant="body1">
            {project.startDate}
          </DialogContentText>

          <DialogContentText variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            End Date:
          </DialogContentText>

          <DialogContentText variant="body1">
            {project.endDate}
          </DialogContentText>

          <DialogContentText variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Tech Stack
          </DialogContentText>

          <Grid container flexDirection="row">
            {project.techStack.map((tech) => renderTech(tech, techStack))}
          </Grid>
          <DialogContentText variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Links
          </DialogContentText>

          {project.links.map((link) => {
            return (
              <Link href={`${link.url}`} key={link.displayText}>
                <Typography variant="body1" sx={{ color: "primary.dark" }}>
                  {link.displayText}
                </Typography>
              </Link>
            );
          })}
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="outlined"
            color="secondary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
