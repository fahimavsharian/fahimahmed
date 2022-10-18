import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.greenFive};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  padding: 10px;
  margin: 15px;
  cursor: pointer;

  color: ${(props) => props.theme.colors.greyThree}; // for text

  &:hover {
    background-color: ${(props) => props.theme.colors.greyTwo};
    color: ${(props) => props.theme.colors.orange};
  }

  ${(props) => props.theme.sizes.tablet} {
    width: 125px;
    height: 125px;
    border-radius: 15px;
    margin: 15px;
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 100px;
    height: 100px;
    border-radius: 12.5px;
    margin: 10px;
  }

  svg {
    font-size: 50px;
    margin-bottom: 5px;

    ${(props) => props.theme.sizes.tablet} {
      font-size: 40px;
    }

    ${(props) => props.theme.sizes.mobile} {
      font-size: 30px;
    }
  }
`;

const LinkCard = ({ text, delayAnimation, icon, link }) => {
  console.log(link);
  return (
    <a
      style={{ "text-decoration": "none" }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Container
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: delayAnimation,
          scale: { delay: 0 },
        }}
        whileHover={{ scale: 1.2 }}
      >
        {icon}
        <span>{text}</span>
      </Container>
    </a>
  );
};

export default LinkCard;
