import React from "react";

import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.main",
        color: "inherit",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            sx={{
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              textDecoration: "none",
              marginLeft: 22,
              fontFamily: "Roboto",
              color: "inherit",
            }}
          >
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              rui shan
            </Link>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              justifyContent: "center",
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              fontFamily: "Roboto",
              color: "inherit",
            }}
          >
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              rui shan
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: -10,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Roboto",
                }}
                variant="h6"
              >
                projects
              </Typography>
            </Link>

            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Roboto",
                  ml: 5,
                }}
                variant="h6"
              >
                about
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: -5,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontFamily: "Roboto",
                }}
                variant="h6"
              >
                projects
              </Typography>
            </Link>

            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontFamily: "Roboto",
                  ml: 5,
                }}
                variant="h6"
              >
                about
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
