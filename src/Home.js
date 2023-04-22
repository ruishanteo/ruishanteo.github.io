import { Box, Typography, styled } from "@mui/material";

import photo from "./pic.png";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export function Home() {
  return (
    <Box marginTop={5} align="center" variant="text">
      <img src={photo} alt={"me"} width={"400px"} />
      <Box mt={5} maxWidth="1000px">
        <Root>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Roboto",
            }}
          >
            Hello, I'm Rui Shan! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </Root>
      </Box>
    </Box>
  );
}
