import React from "react";
import { motion } from "framer-motion";

function SideText({ text, isLeft, animationDelay }) {
  const distance = isLeft ? 100 : -100;
  return (
    <motion.h1
      initial={{ opacity: 0, x: distance, rotate: 180 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: animationDelay }}
    >
      {text}
    </motion.h1>
  );
}

export default SideText;
