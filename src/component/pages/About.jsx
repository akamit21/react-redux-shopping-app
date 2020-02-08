import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../common/Banner";

const About = () => {
  return (
    <>
      <Banner name="About Us" />
      <Container className="text-center py-5">
        <h2 className="mb-5">About Us</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Container>
    </>
  );
};

export default About;
