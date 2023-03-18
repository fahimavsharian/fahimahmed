import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import Hello from "./Hello";
import Me from "./Me";

// const Box = styled(motion.div)`
//   border: 2px solid ${(props) => props.theme.colors.orange};
//   width: min(80vw, 1100px);
//   height: 700px;
//   top: -100px;
//   position: absolute;
//   z-index: -3;
//   overflow: hidden;

//   ${(props) => props.theme.sizes.tablet} {
//     width: max(80vw, 500px);
//     left: 22vw;
//   }

//   ${(props) => props.theme.sizes.mobile} {
//     width: max(80vw, 300px);
//     height: 600px;
//     left: 22vw;
//   }
// `;

const Wrapper = styled.div`
  border: 2px solid grey;
  padding-top: max(9vh, 80px);
  width: min(100%, 1200px);
  height: max(90vh, 750px);
  margin: auto;
  display: flex;
  justify-content: space-evenly; //might not be neccesary

  ${(props) => props.theme.sizes.mobile} {
    height: max(80vh, 550px);
  }
`;

const Box = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.colors.orange};
  width: 1100px;
  height: 1100px;
  top: -550px;
  position: absolute;
  z-index: -3;
  overflow: hidden;

  ${(props) => props.theme.sizes.tablet} {
    width: 800px;
    height: 800px;
    top: -300px;
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 800px;
    height: 800px;
    top: -300px;
  }
`;

const Introduction = () => {
  return (
    <>
      <Box
        initial={{ opacity: 0, scale: 1.8, x: -200 }}
        animate={{ opacity: 1, scale: 1, rotate: -45 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <Wrapper id="intro">
        <Hello />
        <Me />
      </Wrapper>
    </>
  );
};

export default Introduction;
