import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import {Image} from "react-native"
import Img from "react-image";
// import resume from '../img/pdf/Dioris-Dev-Resume.pdf';
// import { Footer, FooterLinkList, FooterSection } from "react-mdl";
import avatarImg from "../img/Dioris1_0917.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <Img
              src={avatarImg}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                {" "}
                xxxHTML/CSS | Bootstrap | Javascript | NodeJS | Express | React |
                MongoDB
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/dioris-diaz-18a053191/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Dioris-cpu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://dioris-cpu.github.io/Homework-9/contactform/PDF_files/DiorisDresume%20(2).pdf" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
