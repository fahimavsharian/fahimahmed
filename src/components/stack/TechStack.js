import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import HeadingText from "../HeadingText";
import Card from "./Card";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  /* background-color: purple; */
  height: 100%;
  width: 100%;
  position: relative;
`;

const Box = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.colors.orange};
  width: 700px;
  height: 500px;
  position: absolute;
  overflow: hidden;
  z-index: -5;

  ${(props) => props.theme.sizes.tablet} {
    width: 500px;
    height: max(100vh, 1100px);
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 130%;
    height: max(130vh, 1200px);
  }
`;

const Container = styled.div`
  /* border: 2px solid orange; */
  /* background-color: aliceblue; */
  width: min(100%, 1200px);
  max-height: 100%;
  padding: 40px 0px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${(props) => props.theme.colors.greyThree};
    font-size: 20px;
    background-color: ${(props) => props.theme.colors.greenFive};
    box-shadow: rgba(0, 0, 0, 0.6) 0px 14px 28px,
      rgba(0, 0, 0, 0.4) 0px 10px 10px;
    width: 70%;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 30px;
    text-align: center;

    ${(props) => props.theme.sizes.tablet} {
      width: 75%;
    }

    ${(props) => props.theme.sizes.mobile} {
      width: 85%;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; //might not be neccesary
`;

const ImageHolder = styled(motion.div)`
  /* border: yellow 1px solid; */
  width: 60vw;
  max-width: 800px;
  top: -255px;
  right: 0px;
  transform: rotateY(180deg);
  position: absolute;
  z-index: -3;

  ${(props) => props.theme.sizes.tablet} {
    width: 75vw;
    top: -225px;
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 80vw;
    top: -150px;
  }
`;

const TechStack = () => {
  return (
    <Wrapper>
      <HeadingText text="Tech Stack" delayAnimation={0.2} />
      <ImageHolder
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <StaticImage
          src="../../images/leaf1.png"
          alt="A leaf"
          placeholder="blurred"
          transformOptions={{ grayscale: "true" }}
        />
      </ImageHolder>
      <Container>
        <Box
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 25 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          I implement fresh, responsive front-end designs and pair it with
          efficient, scaleable back-end architectures.
        </motion.p>
        <div>
          <Row>
            <Card
              heading={frontHeading}
              list={frontList}
              delayAnimation={0.4}
            />
            <Card heading={backHeading} list={backList} delayAnimation={0.6} />
            <Card
              heading={otherHeading}
              list={otherList}
              delayAnimation={0.8}
            />
          </Row>
        </div>
      </Container>
    </Wrapper>
  );
};

const frontHeading = "Front End";
const frontList = [
  "React",
  "Gatsby",
  "Styled Components",
  "Framer Motion",
  "Flutter",
  "Javascript",
  "HTML",
  "CSS",
];

const backHeading = "Back End";
const backList = [
  "NodeJS",
  "Express",
  "Firebase",
  "Dart",
  "Serverless Functions",
  "RESTful & GraphQL",
  "FireStore",
  "mongoDB",
];

const otherHeading = "Others";
const otherList = [
  "Data Structures",
  "State Management",
  "Algorithms",
  "Scrum / Agile",
  "Unit Testing",
  "Git",
  "CI/CD",
  "UI/UX",
];

export default TechStack;
