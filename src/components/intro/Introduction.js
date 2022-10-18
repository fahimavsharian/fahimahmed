import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import Hello from "./Hello";
import Me from "./Me";

const Box = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.colors.orange};
  width: 100vw;
  height: 600px;
  top: 70px;
  left: 30vw;
  position: absolute;
  z-index: -3;
  overflow: hidden;

  ${(props) => props.theme.sizes.tablet} {
    height: 500px;
    top: 120px;
    left: 15vw;
  }

  ${(props) => props.theme.sizes.mobile} {
    height: 400px;
    top: 120px;
    left: 5vw;
  }
`;

const Wrapper = styled.div`
  /* border: 2px solid grey; */
  width: min(100%, 1200px);
  height: max(90vh, 750px);
  margin: auto;
  display: flex;
  justify-content: space-evenly; //might not be neccesary

  ${(props) => props.theme.sizes.mobile} {
    height: max(80vh, 550px);
  }
`;

const Introduction = () => {
  return (
    <>
      <Box
        initial={{ opacity: 0, scale: 1.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <Wrapper>
        <Hello />
        <Me />
      </Wrapper>
    </>
  );
};

export default Introduction;
