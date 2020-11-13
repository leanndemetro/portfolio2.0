import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";





class Search extends Component {
  render() {
    return (
      <div>
        <Container>

          <Row>
            <Col size="md-12">
              <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">CONTACT</h1>
                <br></br>
                <p className="lead">LEANNDEMETRO@GMAIL.COM - (407) 739-8907</p>
                <p className="lead">FIND ME ON <a href="https://github.com/leanndemetro">GITHUB</a></p>
                <p className="lead">OR VIEW MY PROFILE ON <a href="https://www.linkedin.com/in/alyssa-de-metro-59abba1b0/">LINKEDIN</a></p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
