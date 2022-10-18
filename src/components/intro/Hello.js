import styled from "styled-components";
import React from "react";
import ThreeDText from "./ThreeDText";

const Container = styled.section`
  /* border: 2px solid orange; */
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: -2;
  position: relative;

  ${(props) => props.theme.sizes.tablet} {
    width: 100%;
    height: 100%;
    align-self: center;
    justify-content: start;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 100%;
    height: 100%;
    align-self: center;
    justify-content: start;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`;

const hello = "HELLO";

const Hello = () => {
  return (
    <Container>
      <ThreeDText text={hello} delayAnimation={0.3} />
      <ThreeDText text={hello} delayAnimation={0.6} />
      <ThreeDText text={hello} delayAnimation={0.9} />
      <ThreeDText text={hello} delayAnimation={1.2} />
      <ThreeDText text={hello} delayAnimation={1.5} />
    </Container>
  );
};

export default Hello;
