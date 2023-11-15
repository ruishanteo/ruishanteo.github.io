import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, styled } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import Typewriter from "typewriter-effect";

import photo from "../assets/pic.png";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export function Home() {
  const navigate = useNavigate();
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
      <Button
        variant="contained"
        endIcon={<ArrowRight />}
        style={{ borderRadius: 10, marginTop: 10 }}
        onClick={() => navigate("/projects")}
      >
        See more
      </Button>
    </Box>
  );
}
