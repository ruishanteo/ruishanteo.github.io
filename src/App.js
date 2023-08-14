import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { About } from "./pages/About.js";
import { Header } from "./components/Header.js";
import { Home } from "./pages/Home.js";
import { Projects } from "./pages/Projects.js";
import { projectsReducer } from "./backend/projectsStore.js";
import { experiencesReducer } from "./backend/experiencesStore.js";
import { techStackReducer } from "./backend/techStackStore.js";

import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

import {
  Box,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";

function App() {
  const store = configureStore({
    reducer: {
      projects: projectsReducer,
      experiences: experiencesReducer,
      techStack: techStackReducer,
    },
  });
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.localStorage.getItem("darkMode") === "true"
  );

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fbe6cb"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#968a79" : "#fbe6cb",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#968a79" : "#fbe6cb",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#968a79"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#968a79" : "#fbe6cb",
      borderRadius: 20 / 2,
    },
  }));

  let theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: isDarkTheme
            ? {
                fontSize: "14px",
                padding: "8px 12px",
                borderRadius: "50px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                backgroundColor: "#053e85",
                opacity: "0.9",
                color: "white",
              }
            : {
                fontSize: "14px",
                padding: "8px 12px",
                borderRadius: "50px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                backgroundColor: "#cbe0fb",
                opacity: "0.9",
                color: "black",
              },
        },
      },
    },
    typography: {
      h6: { fontFamily: "Roboto" },
      h5: { fontFamily: "Roboto" },
      h4: { fontFamily: "Roboto" },
      body2: { fontFamily: "Roboto" },
      body1: { fontFamily: "Roboto" },
      fontFamily: ["Arial"].join(","),
    },
    palette: isDarkTheme
      ? {
          mode: "dark",
          primary: {
            main: "#053e85",
            dark: "#cbe0fb",
          },
          secondary: {
            main: "#fbe6cb",
            dark: "#968a79",
          },
        }
      : {
          mode: "light",
          primary: {
            main: "#cbe0fb",
            dark: "#053e85",
          },
          secondary: {
            main: "#968a79",
            dark: "#fbe6cb",
          },
        },
  });

  const changeTheme = () => {
    window.localStorage.setItem("darkMode", !isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <Header />
          <Box align="right" sx={{ mt: 2, mr: 2 }}>
            <FormGroup sx={{ mt: 2, mr: 4, width: "5vw" }}>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    checked={isDarkTheme}
                    onChange={changeTheme}
                  />
                }
              />
            </FormGroup>
          </Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ReduxProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
