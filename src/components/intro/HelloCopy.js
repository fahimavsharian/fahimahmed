import styled from "styled-components";
import React from "react";
import ThreeDText from "./ThreeDText";

const Container = styled.section`
  border: 2px solid green;
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
    z-index: -4;
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 100%;
    height: max(80vh, 550px);
    position: absolute;
    padding-right: 5vw;
    justify-content: center;
    align-items: flex-end;
    z-index: -4;
  }
`;

const hello = "Hi";

const Hello = () => {
  return (
    <Container>
      <ThreeDText text={hello} delayAnimation={0.3} />
      <ThreeDText text={hello} delayAnimation={0.3} />
    </Container>
  );
};

export default Hello;
