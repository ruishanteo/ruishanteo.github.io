import React from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

export function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#576b86",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "Didot",
              fontWeight: 750,
              fontSize: 45,
              color: "inherit",
              textDecoration: "none",
              marginLeft: 33,
            }}
          >
            rui shan
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              justifyContent: "center",
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Didot",
              fontWeight: 750,
              fontSize: 35,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            rui shan
          </Typography>

          <Box
            sx={{
              flexGrow: -10,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              component="a"
              href="/projects"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Didot",
                fontSize: 25,
                fontWeight: 650,
                color: "white",
                textTransform: "none",
              }}
            >
              projects
            </Button>

            <Button
              component="a"
              href="/home"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Didot",
                fontSize: 25,
                fontWeight: 650,
                color: "white",
                textTransform: "none",
              }}
            >
              about me
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: -5,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              component="a"
              href="/projects"
              sx={{
                display: { xs: "flex", md: "none" },
                fontFamily: "Didot",
                fontSize: 18,
                fontWeight: 650,
                color: "white",
                textTransform: "none",
              }}
            >
              projects
            </Button>

            <Button
              component="a"
              href="/home"
              sx={{
                display: { xs: "flex", md: "none" },
                fontFamily: "Didot",
                fontSize: 18,
                fontWeight: 650,
                color: "white",
                textTransform: "none",
              }}
            >
              about me
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
