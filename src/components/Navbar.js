import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";

const Background = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.greenFive};
  width: 100%;
  height: max(5vh, 50px);
  position: fixed;
  display: flex;
  justify-content: center;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  font-family: "Satoshi";
`;

const Wrapper = styled.nav`
  /* background-color: blue; */
  max-width: 1200px;
  width: 95%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  user-select: none;
  -webkit-touch-callout: none;

  font-size: 16px;
  ${(props) => props.theme.sizes.mobile} {
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;

    &:hover {
      text-decoration: line-through;
    }
  }

  ul {
    /* background-color: green; */
    display: flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;

    li {
      list-style: none;

      &:hover {
        text-decoration: line-through;
      }
    }
  }
`;

const StyledLink = styled(AnchorLink)`
  /* background-color: aliceblue; */
  color: ${(props) => props.theme.colors.greenOne};
  text-align: center;
  padding: 0px 20px;
  cursor: pointer;

  ${(props) => props.theme.sizes.mobile} {
    padding: 0px 10px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.greyOne};
  }

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Nav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  const update = () => {
    if (scrollY?.current + 10 < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 50 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  };

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const navVariants = {
    hidden: { opacity: 0.3, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Background
      variants={navVariants}
      initial={{ y: -100 }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ easeInOut: [0.1, 0.25, 0.6, 0.9], duration: 0.4 }}
    >
      <Wrapper>
        <div>
          <StyledLink to="#intro" title="Top of the Site">
            01000110
            <br />
            01000001
          </StyledLink>
        </div>
        <ul>
          <li>
            <StyledLink to="#stack" title="Teck Stack Section">
              about
            </StyledLink>
          </li>
          <li>
            <StyledLink to="#work" title="Work Experience Section">
              work
            </StyledLink>
          </li>
          <li>
            <StyledLink to="#contact" title="Link Section">
              contact
            </StyledLink>
          </li>
        </ul>
      </Wrapper>
    </Background>
  );
};

export default Nav;
