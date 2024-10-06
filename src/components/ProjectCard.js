import { useEffect, useCallback, useState } from "react";
import { Box, CardMedia, Grid, Link, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as LinkIcon } from "@mui/icons-material";
import { ParallaxLayer } from "@react-spring/parallax";
import { AnimatePresence, motion } from "framer-motion";

import { ImagesSlider } from "../utils/ImagesSlider";

const renderTech = (techName, techStack) => {
  let srcUrl = "";
  techStack.forEach((techData) => {
    if (techData.id === techName.toLowerCase()) {
      srcUrl = techData.iconImg;
    }
  });

  return (
    <Grid item key={techName}>
      <Tooltip title={techName}>
        <Box
          as="img"
          src={srcUrl}
          alt={techName}
          sx={{ width: { xs: 15, md: 30 } }}
        />
      </Tooltip>
    </Grid>
  );
};
// Random percentage between 30 and 90
const getRandomPercentage = () => {
  return Math.floor(Math.random() * 60) + 30;
};

export function ProjectCard({ project, techStack, offset }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [percentages] = useState([
    getRandomPercentage(),
    getRandomPercentage(),
    getRandomPercentage(),
    getRandomPercentage(),
    getRandomPercentage(),
    getRandomPercentage(),
    getRandomPercentage(),
    getRandomPercentage(),
  ]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isPortrait, setIsPortrait] = useState(false);

  const loadImages = useCallback(() => {
    let minWidth = 0;
    let minHeight = 0;
    const loadPromises = project.fullSizedImg.split(" ").map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          if (img.width > minWidth) {
            minWidth = img.width;
          }
          if (img.height > minHeight) {
            minHeight = img.height;
          }
          return resolve(image);
        };
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
        setIsPortrait(minHeight > minWidth);
      })
      .catch((error) => console.error("Failed to load images", error));
  }, [project]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const percentagesText = `${percentages[0]}% ${percentages[1]}% ${percentages[2]}% ${percentages[3]}% / ${percentages[4]}% ${percentages[5]}% ${percentages[6]}% ${percentages[7]}%`;

  return (
    <ParallaxLayer offset={0.5 + offset} speed={0.15}>
      <motion.div
        initial={{ y: 300 }}
        whileInView={{
          y: 50,
          transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8,
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          style={{
            "&:hover": {
              boxShadow: 10,
            },
            borderRadius: percentagesText,
            backgroundColor: theme.palette.primary.main,
            width: { xs: 400, md: "60vw" },
            height: "fit-content",
          }}
          onClick={() => {
            if (open) {
              handleClose();
            } else {
              handleClickOpen();
            }
          }}
          onHoverStart={handleClickOpen}
          onHoverEnd={handleClose}
          whileHover={{
            borderRadius: "1%",
            padding: 0,
            height: "fit-content",
            transition: { duration: 0.5 },
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <AnimatePresence>
            {!open ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CardMedia
                  component="img"
                  alt={project.title}
                  sx={{
                    width: { xs: "150px", md: "300px" },
                    height: { xs: "150px", md: "300px" },
                  }}
                  image={project.thumbnailImg}
                />
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>

                <Box
                  sx={{
                    overflow: "hidden",
                    width: "70vw",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ wordBreak: "break-word", textTransform: "none" }}
                  >
                    {project.description}
                  </Typography>
                </Box>
                <Grid container justifyContent="center">
                  {project.techStack.map((tech) => renderTech(tech, techStack))}
                </Grid>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  height: "fit-content",
                  width: "100%",
                }}
              >
                <Grid
                  container
                  padding={2}
                  alignItems="center"
                  justifyContent="center"
                  height="fit-content"
                  width="100%"
                  gap={2}
                >
                  <Grid
                    item
                    // width="fit-content"
                    // height="fit-content"
                    // maxHeight="100%"
                    xs={isPortrait ? 4 : 12}
                    height={{
                      xs: isPortrait ? "40vh" : "20vh",
                      md: isPortrait ? "75vh" : "50vh",
                    }}
                  >
                    <ImagesSlider
                      loadedImages={loadedImages}
                      isPortrait={isPortrait}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    xs={6}
                  >
                    <Typography
                      variant="h3"
                      color="text.secondary"
                      fontSize={{ xs: 16, md: 40 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="h6" fontSize={{ xs: 12, md: 18 }}>
                      {project.description}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      fontSize={{ xs: 10, md: 15 }}
                    >
                      {project.startDate} - {project.endDate}
                    </Typography>
                    <Grid
                      item
                      container
                      alignItems="center"
                      justifyContent="center"
                      gap={0.5}
                    >
                      {project.techStack.map((tech) =>
                        renderTech(tech, techStack)
                      )}
                    </Grid>
                    <Grid
                      item
                      container
                      flexDirection="row"
                      width="500%"
                      gap={1}
                      justifyContent="center"
                    >
                      {project.links.map((link) => {
                        return (
                          <Link
                            href={`${link.url}`}
                            key={link.displayText}
                            sx={{
                              textDecoration: "none",
                            }}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <Typography
                              sx={{
                                color: "primary.dark",
                              }}
                              fontSize={{ xs: 10, md: 15 }}
                              variant="body2"
                            >
                              <LinkIcon fontSize="0.5rem" /> {link.displayText}
                            </Typography>
                          </Link>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </ParallaxLayer>
  );
}
