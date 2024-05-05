import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, styled, useTheme } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Typewriter from "typewriter-effect";

import photo from "../assets/pic.png";
import { Spotlight } from "../utils/Spotlight";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export function Home() {
  const theme = useTheme();

  const SpotlightContainer = styled("div")(() => ({
    position: "absolute",
    top: "-40vh",
    width: "100%",
    height: "100%",
    zIndex: -1,
  }));

  return (
    <Box align="center" variant="text" position="relative">
      {theme.palette.mode === "dark" ? (
        <ParallaxLayer offset={0} speed={1}>
          <SpotlightContainer>
            <Spotlight fill={theme.palette.secondary.dark} />
          </SpotlightContainer>
        </ParallaxLayer>
      ) : null}

      <ParallaxLayer offset={0} speed={1}>
        <img src={photo} alt={"me"} width={"400px"} />

        <Box maxWidth="100vw">
          <Root>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Roboto",
                letterSpacing: 5,
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("hello there!").start();
                }}
              />
            </Typography>
          </Root>
        </Box>

        <Typography
          sx={{
            textAlign: "right",
            borderRadius: 10,

            marginRight: 5,
            color: "primary.dark",
          }}
        >
          SCROLL DOWN
          <KeyboardDoubleArrowDownIcon />
        </Typography>
      </ParallaxLayer>
    </Box>
  );
}
