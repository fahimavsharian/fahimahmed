import styled from "styled-components";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import ReactIcon from "../ReactIcon";

const Container = styled.section`
  /* border: 2px solid green; */
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.sizes.tablet} {
    width: 100%;
    height: max(85vh, 650px);
    position: absolute;
    padding-right: 5vw;
    justify-content: center;
    align-items: flex-end;
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 100%;
    height: max(80vh, 550px);
    position: absolute;
    padding-right: 5vw;
    justify-content: center;
    align-items: flex-end;
  }
`;

const Column = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.greenFive};
  color: ${(props) => props.theme.colors.greyThree}; // for text
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  text-align: center;
  width: 450px;

  ${(props) => props.theme.sizes.tablet} {
    width: 400px;
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 300px;
  }

  h2 {
    padding-top: 20px;
  }

  p {
    padding: 0px 30px;
    padding-bottom: 20px;
  }
`;

const LinkSection = styled(motion.div)`
  background-color: rgba(60, 60, 60, 0.6);
  backdrop-filter: blur(3px);
  width: 42.5%;
  height: 50px;
  border-radius: 20px;
  left: 30%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
  font-size: 25px;

  ${(props) => props.theme.sizes.mobile} {
    width: 50%;
    left: 27%;
    font-size: 22px;
  }

  svg {
    color: ${(props) => props.theme.colors.orange};
    cursor: pointer;
    margin-bottom: -5px;

    &:hover {
      color: ${(props) => props.theme.colors.greenFive};
    }
  }
`;

const Me = () => {
  return (
    <Container>
      <Column
        initial={{ opacity: 0, x: 100, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <div>
          <LinkSection
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ duration: 0.4, delay: 2.1 }}
          >
            <motion.a
              whileHover={{ scale: 1.3, transition: 0.2 }}
              href="https://github.com/fahimavsharian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactIcon icon="github" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3, transition: 0.2 }}
              href="mailto:fahimavsharian@gmail.com?subject=Let's%20work%20together!"
              rel="noopener noreferrer"
            >
              <ReactIcon icon="mail" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3, transition: 0.2 }}
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactIcon icon="linkedin" />
            </motion.a>
          </LinkSection>
          <StaticImage
            src="../../images/me.jpg"
            alt="A picture of me."
            placeholder="blurred"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "12.5px",
              overflowX: "hidden",
              zIndex: "1",
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <h2>I am Fahim.</h2>
          <p>A full-stack developer based in Toronto, Canada.</p>
        </motion.div>
      </Column>
    </Container>
  );
};

export default Me;
