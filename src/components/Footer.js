import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.greyTwo};
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }

  p {
    padding: 10px;
    color: ${(props) => props.theme.colors.greenFive};
    align-self: center;
    justify-self: center;

    ${(props) => props.theme.sizes.mobile} {
      font-size: 12px;
    }
  }
`;

const Footer = ({ text, delayAnimation }) => {
  return (
    <>
      <Wrapper>
        <div>
          <p>Copyright © 2022 Fahim Ahmed</p>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
