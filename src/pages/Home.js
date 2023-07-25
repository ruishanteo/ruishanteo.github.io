import Typewriter from "typewriter-effect";
import { Box, Typography, styled } from "@mui/material";

import photo from "../assets/pic.png";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export function Home() {
  return (
    <Box align="center" variant="text">
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
    </Box>
  );
}
