import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React, { useRef, useEffect, useState } from "react";
import SideText from "./SideText";
import ReactIcon from "../ReactIcon";

const Row = styled.div`
  /* background-color: grey;
  border: 2px solid white; */
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Section = styled.section`
  /* background-color: grey; */
  /* border: 2px solid red; */
  margin: 15px;
  /* border-radius: 12.5px; */
  box-shadow: ${(props) => props.theme.colors.greenFive} 0px 0px 0px 3px,
    ${(props) => props.theme.colors.greenFour} 0px 0px 0px 6px,
    ${(props) => props.theme.colors.greenThree} 0px 0px 0px 9px,
    ${(props) => props.theme.colors.greenTwo} 0px 0px 0px 12px,
    ${(props) => props.theme.colors.greenOne} 0px 0px 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;

  div {
    height: max(60vh, 500px);
  }

  h2 {
    margin-bottom: 50px;
  }
`;

const Details = styled(motion.section)`
  background-color: rgba(60, 60, 60, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  align-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110%;
  height: 250px;
  bottom: -150px;
  z-index: 3;
  position: absolute;

  div {
    height: 60px;
    display: flex;
    justify-items: center;
    align-items: center;
  }

  h3 {
    display: inline;
    color: ${(props) => props.theme.colors.greenFive};
    margin: 0px 20px;
  }

  p {
    margin: 5px 20px;
    color: ${(props) => props.theme.colors.white};
  }

  svg {
    color: ${(props) => props.theme.colors.orange};
    margin: 0px 5px;
    font-size: 25px;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.greenFive};
    }
  }
`;

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Lisn = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  const id = 5;

  const [isFirst, setIsFirst] = useState(id);

  useEffect(() => {
    const interval = setInterval(() => {
      isFirst === id ? setIsFirst(id + 1) : setIsFirst(id);
    }, 3500);

    return () => clearInterval(interval);
  }, [isFirst]);

  return (
    <Row>
      <SideText text="LISN" isLeft={true} animationDelay={0.6} />
      <SideText text="LISN" isLeft={true} animationDelay={0.3} />
      <Section>
        <div ref={ref}>
          {isFirst === id && (
            <StaticImage
              src="../../images/work5.png"
              alt="LISN App - SignUp Page"
              placeholder="blurred"
              style={{
                width: "300px",
                height: "100%",
                overflowX: "hidden",
                zIndex: "1",
              }}
            />
          )}
          {isFirst !== id && (
            <StaticImage
              src="../../images/work6.png"
              alt="LISN App - Conversations Tab"
              placeholder="blurred"
              style={{
                width: "300px",
                height: "100%",
                overflowX: "hidden",
                zIndex: "1",
              }}
            />
          )}
        </div>
        <Details style={{ y }}>
          <div>
            <h3>LISN</h3>
            <motion.a
              whileHover={{ scale: 1.3, transition: 0.2 }}
              href="https://apps.apple.com/ca/app/lisn/id1551453358"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactIcon icon="iphone" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, transition: 0.2 }}
              href="https://play.google.com/store/apps/details?id=podcast.clips.lisn&hl=en&gl=US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactIcon icon="android" />
            </motion.a>
          </div>
          <p>
            An app to discover, clip, and share your favourite podcast moments.
          </p>
          <p>
            Built with Flutter, Firestore, Google Cloud Functions, and LISN
            Notes API.
          </p>
        </Details>
      </Section>
      <SideText text="LISN" isLeft={false} animationDelay={0.3} />
      <SideText text="LISN" isLeft={false} animationDelay={0.6} />
    </Row>
  );
};

export default Lisn;
