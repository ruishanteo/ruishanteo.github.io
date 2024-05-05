"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "./cn.js";

export function Lamp({ background, light }) {
  return (
    <LampContainer background={background} light={light}>
      <motion.h3
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-3 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-small tracking-tight text-transparent md:text-5xl"
      >
        about me
      </motion.h3>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className, background, light }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden  w-full rounded-md z-0",
        className
      )}
      style={{ minHeight: "65vh" }}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto right-1/2 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div
            className="absolute  w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ backgroundColor: background }}
          />
          <div
            className="absolute  w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
            style={{ backgroundColor: background }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto left-1/2 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div
            className="absolute  w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"
            style={{ backgroundColor: background }}
          />
          <div
            className="absolute  w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ backgroundColor: background }}
          />
        </motion.div>
        <div
          className="absolute top-1/2 w-full translate-y-12 scale-x-150 blur-2xl"
          style={{ backgroundColor: background }}
        ></div>
        <div className="absolute top-1/2 z-50  w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full  blur-2xl"
          style={{ backgroundColor: light }}
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] "
          style={{ backgroundColor: light }}
        ></motion.div>

        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] "
          style={{ backgroundColor: background }}
        ></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
