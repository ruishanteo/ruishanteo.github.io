"use client";
import React, { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "./cn.js";

export const ImagesSlider = ({
  loadedImages,
  isPortrait,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === loadedImages.length ? 0 : prevIndex + 1
    );
  }, [loadedImages]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? loadedImages.length - 1 : prevIndex - 1
    );
  }, [loadedImages]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 2000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = {
    initial: {
      scale: 0,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={{
        perspective: "1000px",
        width: "100%",
        height: "100%",
      }}
    >
      {areImagesLoaded && children}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            variants={slideVariants}
            className="image aspect-auto inset-0"
            style={{
              width: "auto",
              height: "100%",
              // width: isPortrait ? "auto" : "100%",
              // height: isPortrait ? "auto%" : "auto",
            }}
          />
        </AnimatePresence>
      )}
    </div>
  );
};
