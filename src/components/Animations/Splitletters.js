import React from "react";
import { motion } from "framer-motion";

export function SplitLetter({ children, ...rest }) {
  let letters = children.split("");
  return letters.map((letter, i) => {
    return (
      <div
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <motion.div
          {...rest}
          style={{ display: "inline-block", willChange: "transform" }}
          custom={i}
        >
          {letter}
        </motion.div>
      </div>
    );
  });
}
