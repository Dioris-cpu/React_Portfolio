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
              style={{ height: "300px", position:"relative" }}
            />
          </Cell>
          <Cell col={6}>
            <h2>About Me</h2>
            <hr />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em", position: "relative" }}>
              A Full-Stack Web Developer with a background in operations
              management who graduated from UPenn’s LPS Coding Bootcamp. With
              proficient skills in JavaScript, CSS, Node.js, Express.js,MongoDB,
              and React.js . Noted as being a collaborative problem solver who
              is focused on developing responsive applications that help find
              better solutions to everyday problems. Developed a restaurant
              search application that takes the user's location via geo
              coordinates and displays the top three restaurants near them based
              on the cuisine that they have inputted. By limiting the options to
              just the top three restaurants it helps eliminate fear of missing
              out (FOMO) for the user as well as it allows them to make a
              quicker decision and not spend as much time browsing. Excited to
              implement new ideas and strategies and collaborate with fellow
              developers and employers.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
