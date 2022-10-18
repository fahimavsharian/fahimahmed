import React from "react";

import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "components/Navbar";
import Footer from "./Footer";

const Wrapper = styled.div`
  /* background-color: ${(props) => props.theme.colors.sky}; */
  /* max-width: 1200px; */
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const SpaceHolder = styled.div`
  /* background-color: orange; */
  height: max(7.5vh, 60px);
`;

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Navbar />
      <SpaceHolder id="intro" />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  </>
);

export default Layout;
