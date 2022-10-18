import * as React from "react";
import { Link } from "gatsby";
import { GiDinosaurRex } from "@react-icons/all-files/gi/GiDinosaurRex";

const pageStyles = {
  backgroundColor: "#ddead1",
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: "70vw",
};

const paragraphStyles = {
  fontSize: 20,
  marginBottom: 30,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        You know when you like start walking... and you walk a bit more, and
        then all of a sudden you are in the middle of nowhere?
      </h1>
      <p style={paragraphStyles}>
        Don't worry! The T-Rex is here to guide you home.
        <br />
      </p>
      <Link to="/">
        <GiDinosaurRex size={40} />
      </Link>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
