import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

const Container = styled(motion.div)`
  width: 30%;
  height: 330px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.greyTwo};
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.sizes.tablet} {
    width: 400px;
    height: 300px;
    margin: 10px 40px;
    padding: 5px 5vw;
  }

  ${(props) => props.theme.sizes.mobile} {
    width: 80%;
    height: 300px;
  }

  hr {
    margin: 10px;
    width: 70%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.orange};
    border-color: ${(props) => props.theme.colors.orange};
    border-radius: 3px;
  }

  h3 {
    color: ${(props) => props.theme.colors.greenFive};
  }
`;

const List = styled.div`
  /* background-color: yellow; */
  width: 100%;

  ul {
    /* background-color: blue; */
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    justify-content: space-between;

    li {
      /* background-color: white; */
      list-style: none;
      margin: 10px;
      width: 40%;
      color: ${(props) => props.theme.colors.greenFive};
    }
  }
`;

const Card = ({ heading, list, delayAnimation }) => {
  return (
    <Container
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, delay: delayAnimation }}
    >
      <h3>{heading}</h3>
      <hr></hr>
      <List>
        <ul>
          {list?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </List>
    </Container>
  );
};

export default Card;
