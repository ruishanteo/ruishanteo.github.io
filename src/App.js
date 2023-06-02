import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header.js";
import { Home } from "./pages/Home.js";
import { Projects } from "./pages/Projects.js";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  let theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "Didot"].join(","),
    },
    status: {
      danger: "#ebaaa7",
    },
    palette: {
      primary: {
        main: "#576b86",
        darker: "#053e85",
      },
      neutral: {
        main: "#576b86",
        contrastText: "#fff",
      },
    },
  });

  return (
    <Router>
      <>
        <Header />
        <div className="App">
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </ThemeProvider>
        </div>
      </>
    </Router>
  );
}

export default App;
