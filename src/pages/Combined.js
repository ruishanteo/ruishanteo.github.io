import { useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useExperiences } from "../backend/experiencesStore";
import { useProjects } from "../backend/projectsStore.js";
import { useTechStack } from "../backend/techStackStore";

import { Header } from "../components/Header.js";
import { LoadingIcon } from "../components/LoadingIcon";
import { About } from "./About.js";
import { Home } from "./Home.js";
import { Projects } from "./Projects.js";
import { SparklesCore } from "../utils/Sparkles";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  zIndex: 2,
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
        backgroundColor: theme.palette.mode === "dark" ? "#968a79" : "#fbe6cb",
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

const sectionIds = ["home", "projects", "about"];

export function Combined({ isDarkTheme, changeTheme }) {
  const theme = useTheme();
  return (
    <div style={{ width: "100%", height: "fit-content" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.5}
          particleDensity={30}
          className="w-full h-full"
          particleColor={theme.palette.secondary.main}
        />
      </Box>
      <CombinedSections isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
    </div>
  );
}

function CombinedSections({ isDarkTheme, changeTheme }) {
  const parallaxRef = useRef(null);
  const { status: projectStatus, data: projects, error } = useProjects();
  const { status: experienceStatus } = useExperiences();
  const { status: techStackStatus } = useTechStack();

  const [extraPages, setExtraPages] = useState(0);

  const [value, setValue] = useState(0);
  const SECTION_OFFSET = -250;

  const handleScroll = useCallback(() => {
    const sectionOffsets = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const top = elementRect.top + SECTION_OFFSET;
          const bottom = elementRect.bottom;
          const curr = parallaxRef.current.current;
          const outOfFocus =
            top < 0 ? Math.abs(top) : bottom - curr.clientHeight;
          return { name: id, overflow: outOfFocus - SECTION_OFFSET };
        }
        return { name: "null", overflow: 0 };
      })
      .filter((elem) => elem.name !== "null");
    for (let i = sectionOffsets.length - 1; i >= 0; i -= 1) {
      if (!Number.isNaN(sectionOffsets[i].overflow)) {
        setValue(i);
        break;
      }
    }
  }, [SECTION_OFFSET, parallaxRef]);

  const addScrollListener = useCallback(() => {
    if (parallaxRef?.current?.container?.current) {
      parallaxRef.current.container.current.addEventListener(
        "scroll",
        handleScroll
      );
    }
  }, [handleScroll, parallaxRef]);

  const removeScrollListener = useCallback(() => {
    if (parallaxRef?.current?.container?.current) {
      parallaxRef.current.container.current.removeEventListener(
        "scroll",
        handleScroll
      );
    }
  }, [handleScroll, parallaxRef]);

  useEffect(() => {
    addScrollListener();
    return removeScrollListener;
  });

  const scrollToSection = useCallback(
    (value) => {
      removeScrollListener();
      parallaxRef.current.scrollTo(value);
      setTimeout(addScrollListener, 650);
    },
    [parallaxRef, addScrollListener, removeScrollListener]
  );

  if (
    projectStatus === "pending" ||
    experienceStatus === "pending" ||
    techStackStatus === "pending"
  ) {
    return (
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <LoadingIcon />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const numOfSections =
    Math.ceil(10 * (projects.length + 1.15 + extraPages)) / 10;

  return (
    <>
      <Parallax ref={parallaxRef} pages={numOfSections} key={numOfSections}>
        <ParallaxLayer
          sticky={{ start: 0, end: numOfSections }}
          speed={0.1}
          style={{ zIndex: 1, height: "fit-content" }}
        >
          <Header
            value={value}
            setValue={setValue}
            scrollToSection={scrollToSection}
            aboutSectionOffset={projects.length + 1.15}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.15} speed={0.1} id="home">
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
          <Home />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} id="projects">
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={projects.length + 1.15} speed={0.1} id="about">
          <About setExtraPages={(pages) => setExtraPages(pages)} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
