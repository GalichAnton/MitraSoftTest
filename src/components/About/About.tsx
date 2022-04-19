import React from "react";
import { Card } from "react-bootstrap";
import photo from "../../assets/images/photo.jpg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        border="success"
        style={{ width: "40%" }}
        className="bg-dark text-white"
      >
        <Card.Header>About</Card.Header>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>Frontend developer</Card.Title>
          <Card.Text>Stack: JS, TS, React, Redux, HTML, CSS</Card.Text>
          <Card.Text>More info in portfolio</Card.Text>
          <Card.Link
            className={"text-white"}
            href="https://github.com/GalichAnton"
          >
            Github
          </Card.Link>
          <Card.Link
            className={"text-white"}
            href="https://my-ag-portfolio.herokuapp.com/"
          >
            Portfolio
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
