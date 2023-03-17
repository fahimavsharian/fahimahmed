import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Introduction from "../components/intro/Introduction";
import TechStack from "../components/stack/TechStack";
import Work from "../components/work/Work";
import Contact from "../components/contact/Contact";

const SpaceHolder = styled.div`
  height: 250px;

  ${(props) => props.theme.sizes.tablet} {
    height: 200px;
  }

  ${(props) => props.theme.sizes.mobile} {
    height: 150px;
  }
`;

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Introduction />
        <SpaceHolder id="stack" />
        <TechStack />
        <SpaceHolder id="work" />
        <Work />
        <SpaceHolder id="contact" />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Fahim Ahmed</title>;
