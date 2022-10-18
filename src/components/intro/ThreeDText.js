import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

const Heading = styled(motion.h1)`
  color: ${(props) => props.theme.colors.greenFive};
  font-size: 100px;
  letter-spacing: 20px;
  animation: shadows 5s ease-in infinite, move 5s ease-in infinite;
  animation-delay: 2s;

  ${(props) => props.theme.sizes.mobile} {
    font-size: 60px;
  }

  @keyframes shadows {
    0% {
      text-shadow: none;
    }
    10% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour};
    }
    20% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour},
        6px -6px 0 ${(props) => props.theme.colors.greenThree};
    }
    30% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour},
        6px -6px 0 ${(props) => props.theme.colors.greenThree},
        9px -9px ${(props) => props.theme.colors.greenTwo};
    }
    40% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour},
        6px -6px 0 ${(props) => props.theme.colors.greenThree},
        9px -9px ${(props) => props.theme.colors.greenTwo},
        12px -12px 0 ${(props) => props.theme.colors.greenOne};
    }
    50% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour},
        6px -6px 0 ${(props) => props.theme.colors.greenThree},
        9px -9px ${(props) => props.theme.colors.greenTwo},
        12px -12px 0 ${(props) => props.theme.colors.greenOne};
    }
    60% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour},
        6px -6px 0 ${(props) => props.theme.colors.greenThree},
        9px -9px ${(props) => props.theme.colors.greenTwo},
        12px -12px 0 ${(props) => props.theme.colors.greenOne};
    }
    70% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour},
        6px -6px 0 ${(props) => props.theme.colors.greenThree},
        9px -9px ${(props) => props.theme.colors.greenTwo};
    }
    80% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour},
        6px -6px 0 ${(props) => props.theme.colors.greenThree};
    }
    90% {
      text-shadow: 3px -3px 0 ${(props) => props.theme.colors.greenFour};
    }
    100% {
      text-shadow: none;
    }
  }

  @keyframes move {
    0% {
      transform: translate(0px, 0px);
    }
    40% {
      transform: translate(12px, -12px);
    }
    50% {
      transform: translate(12px, -12px);
    }
    60% {
      transform: translate(12px, -12px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;

const ThreeDText = ({ text, delayAnimation }) => {
  return (
    <Heading
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 150, delay: delayAnimation }}
    >
      {text}
    </Heading>
  );
};

export default ThreeDText;
