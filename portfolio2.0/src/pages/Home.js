import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>

      <Container style={{ marginTop: 30 }}>

        <Row>
          <Col size="md-12">
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">ALYSSA DEMETRO</h1>
                <p className="lead">FULL STACK WEB DEVELOPER -- ORLANDO</p>
              </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
