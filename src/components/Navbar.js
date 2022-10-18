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

  div {
    color: ${(props) => props.theme.colors.greenOne};
    padding-left: 10px;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    &:hover {
      text-decoration: line-through;
      color: ${(props) => props.theme.colors.greyOne};
    }

    ${(props) => props.theme.sizes.tablet} {
      font-size: 15px;
    }

    ${(props) => props.theme.sizes.mobile} {
      font-size: 14px;
    }
  }

  ul {
    /* background-color: green; */
    display: flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
  }
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0px 20px;
  cursor: pointer;
`;

const StyledLink = styled(AnchorLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.greenOne};

  &:hover {
    text-decoration: line-through;
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
          </StyledLink>
          <StyledLink to="#intro">01000001</StyledLink>
        </div>
        <ul>
          <StyledLink to="#stack" title="Teck Stack Section">
            <ListItem>about</ListItem>
          </StyledLink>
          <StyledLink to="#work" title="Work Experience Section">
            <ListItem>work</ListItem>
          </StyledLink>
          <StyledLink to="#contact" title="Link Section">
            <ListItem>contact</ListItem>
          </StyledLink>
        </ul>
      </Wrapper>
    </Background>
  );
};

export default Nav;
