import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import HeadingText from "../HeadingText";
import LinkCard from "./LinkCard";
import ReactIcon from "../ReactIcon";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  /* background-color: purple; */
  /* border: 2px solid red; */
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: 15px;
`;

const Box = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.colors.orange};
  width: 95%;
  height: 600px;
  top: -25px;
  left: 10vw;
  position: absolute;
  z-index: -5;
`;

const Container = styled.div`
  /* border: 2px solid orange; */
  width: min(100%, 1200px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 95%;
  margin: 50px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageHolder = styled(motion.div)`
  /* border: yellow 1px solid; */
  width: 70vw;
  max-width: 1000px;
  top: -300px;
  right: -110px;
  transform: rotateY(180deg);
  position: absolute;
  z-index: -3;

  ${(props) => props.theme.sizes.tablet} {
    width: 75vw;
    top: -225px;
    right: -10vw;
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 90vw;
    right: -20vw;
    min-width: 450px;
    top: -175px;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <HeadingText text="Contact" delayAnimation={0.2} />
      <ImageHolder
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <StaticImage
          src="../../images/leaf2.png"
          alt="A leaf"
          placeholder="blurred"
          transformOptions={{ grayscale: "true" }}
        />
      </ImageHolder>
      <Container>
        <Box
          initial={{ opacity: 0, scale: 0.8, x: 50, rotate: 25 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
        <Row>
          <LinkCard
            text="Github"
            delayAnimation={0.2}
            icon={<ReactIcon icon="github" />}
            link="https://github.com/fahimavsharian"
          ></LinkCard>

          <LinkCard
            text="E-Mail"
            delayAnimation={0.4}
            icon={<ReactIcon icon="mail" />}
            link="mailto:hi@fahimcodez.com?subject=Let's%20work%20together!"
          ></LinkCard>

          <LinkCard
            text="LinkedIn"
            delayAnimation={0.6}
            icon={<ReactIcon icon="linkedin" />}
            link="https://www.linkedin.com/in/fahimcodez/"
          ></LinkCard>

          <LinkCard
            text="Resume"
            delayAnimation={0.8}
            icon={<ReactIcon icon="resume" />}
            link="files/resume.pdf"
          ></LinkCard>

          {/* <LinkCard
            text="Wallpaper"
            delayAnimation={1.0}
            icon={<ReactIcon icon="wallpaper" />}
            link=""
          ></LinkCard> */}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Contact;
