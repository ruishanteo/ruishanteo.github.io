import * as React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

export function ProjectCard() {
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
    <Card sx={{ maxWidth: 345, mt: 3 }}>
      <CardMedia
        component="img"
        alt="project1"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          fontFamily="Roboto"
          component="div"
        >
          Project1
        </Typography>
        <Typography fontFamily="Roboto" variant="body1" color="text.secondary">
          text description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">GitHub</Button>
        <Button size="small" onClick={handleClickOpen}>
          Learn More
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" variant="h5">
            {"Project1"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText variant="body2">
              more about the project
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
}
