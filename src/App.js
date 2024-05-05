import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Combined } from "./pages/Combined.js";
import { Projects } from "./pages/Projects.js";
import { About } from "./pages/About.js";

const queryClient = new QueryClient();

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.localStorage.getItem("darkMode") === null ||
      window.localStorage.getItem("darkMode") === "true"
  );

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
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={
                <Combined isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
              }
            />
            <Route
              path="/home"
              element={
                <Combined isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
