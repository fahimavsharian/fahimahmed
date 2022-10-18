import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React, { useRef, useEffect, useState } from "react";
import ReactIcon from "../ReactIcon";
import SideText from "./SideText";

const Row = styled.div`
  /* background-color: grey; */
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    color: ${(props) => props.theme.colors.greyTwo};
    padding: 0px 50px;
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    z-index: -1;
  }

  h1:nth-child(even) {
    color: ${(props) => props.theme.colors.greyThree};
  }
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
  justify-items: center;
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

const Kyokai = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  const id = 1;

  const [isFirst, setIsFirst] = useState(id);

  useEffect(() => {
    const interval = setInterval(() => {
      isFirst === id ? setIsFirst(id + 1) : setIsFirst(id);
    }, 3500);

    return () => clearInterval(interval);
  }, [isFirst]);

  return (
    <Row>
      <SideText text="K-Sig" isLeft={true} animationDelay={0.6} />
      <SideText text="K-Sig" isLeft={true} animationDelay={0.3} />
      <Section>
        <div ref={ref}>
          {isFirst === id && (
            <StaticImage
              src="../../images/work7.jpg"
              alt="UWO Site - Main Page"
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
              src="../../images/work8.jpg"
              alt="UWO Site - Team Page"
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
            <h3>ΚΣ</h3>
            <motion.a
              whileHover={{ scale: 1.3, transition: 0.2 }}
              href="https://fahimavsharian.github.io/ksig-uwo-web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactIcon icon="browser" />
            </motion.a>
          </div>
          <p>
            A website to learn and connect with the Kappa Sigma Fraternity at
            Western University.
          </p>
          <p>Built with vanilla HTML, CSS, and Javascript.</p>
        </Details>
      </Section>

      <SideText text="K-Sig" isLeft={false} animationDelay={0.3} />
      <SideText text="K-Sig" isLeft={false} animationDelay={0.6} />
    </Row>
  );
};

export default Kyokai;
