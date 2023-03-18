import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Text = styled(motion.h1)`
  color: ${(props) => props.theme.colors.greyTwo};
  padding: 0px 50px;
  writing-mode: vertical-lr;
  z-index: -1;

  h1:nth-child(even) {
    color: ${(props) => props.theme.colors.greyThree};
  }

  ${(props) => props.theme.sizes.mobile} {
    display: none;
  }
`;

function SideText({ text, isLeft, animationDelay }) {
  const distance = isLeft ? 100 : -100;
  return (
    <Text
      initial={{ opacity: 0, x: distance, rotate: 180 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: animationDelay }}
    >
      {text}
    </Text>
  );
}

export default SideText;
