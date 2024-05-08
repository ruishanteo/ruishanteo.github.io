import React from "react";
import {
  AppBar,
  Box,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

export function Header({
  value,
  setValue,
  scrollToSection,
  aboutSectionOffset,
}) {
  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
        color: "inherit",
        mt: 5,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
            }}
          >
            <Typography
              onClick={() => scrollToSection(0)}
              variant="h3"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Roboto",
                color: "inherit",
              }}
            >
              rui shan
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Tabs
              value={value}
              sx={{
                ".MuiTabs-indicator": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <Tab
                value={0}
                sx={{
                  minWidth: 0,
                  padding: 0,
                }}
              />
              <Tab
                value={1}
                onClick={() => scrollToSection(1)}
                label={
                  <Typography
                    sx={{
                      color: "primary.dark",
                      fontFamily: "Roboto",
                      textTransform: "none",
                    }}
                    variant="h6"
                  >
                    projects
                  </Typography>
                }
              />
              <Tab
                value={2}
                onClick={() => scrollToSection(aboutSectionOffset - 0.1)}
                label={
                  <Typography
                    sx={{
                      color: "primary.dark",
                      fontFamily: "Roboto",
                      textTransform: "none",
                    }}
                    variant="h6"
                  >
                    about
                  </Typography>
                }
              />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
