import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

const Heading = styled(motion.h1)`
  /* background-color: yellow; */
  transform: translate(50%, -50%);
  text-transform: uppercase;
  text-align: center;

  color: ${(props) => props.theme.colors.greenFive};
  text-shadow: 1px 1px 1px ${(props) => props.theme.colors.greenOne},
    1px 2px 1px ${(props) => props.theme.colors.greenOne},
    1px 3px 1px ${(props) => props.theme.colors.greenOne},
    1px 4px 1px ${(props) => props.theme.colors.greenOne},
    1px 5px 1px ${(props) => props.theme.colors.greenOne},
    1px 6px 1px ${(props) => props.theme.colors.greenOne},
    1px 7px 1px ${(props) => props.theme.colors.greenOne},
    1px 8px 1px ${(props) => props.theme.colors.greenOne},
    1px 9px 1px ${(props) => props.theme.colors.greenOne},
    1px 10px 1px ${(props) => props.theme.colors.greenOne};
`;

const HeadingText = ({ text, delayAnimation }) => {
  return (
    <>
      <Heading
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: delayAnimation }}
      >
        {text}
      </Heading>
    </>
  );
};

export default HeadingText;
