import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid about-grid>
          <Cell col={6}>
            <h1>Dioris Diaz</h1>
            <img
              src="https://avatars2.githubusercontent.com/u/54042807?s=460&u=fdabfdca20910b84d3417f344d385f328b93967d&v=4"
              alt="avatar"
              style={{ height: "300px", position: "relative" }}
            />
          </Cell>
          <Cell col={6}>
            <h2>About Me</h2>
            <hr />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                position: "relative",
              }}
            >
              A Full-Stack Web Developer with a background in operations and
              retail management for warehouse industries. Experienced in
              building market driven applications using languages and frameworks
              in JavaScript, CSS, Node.js, Express.js,MongoDB, and React.js.
              Noted as being a collaborative problem solver who is focused on
              developing responsive applications that help find better solutions
              to everyday problems. Excited to implement new ideas, strategies
              and collaborate with fellow developers and employers to a mission
              driven company.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
