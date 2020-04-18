import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import {Image} from "react-native"
import Img from "react-image";
// import resume from '../img/pdf/Dioris-Dev-Resume.pdf';
// import { Footer, FooterLinkList, FooterSection } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <Img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/s960x960/94012583_1614974935319182_1476452053755625472_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=uvxd49FsK9IAX90p6jN&_nc_ht=scontent-iad3-1.xx&_nc_tp=7&oh=34ae9f6d53e537c4e99505c3b38bfc50&oe=5EBD5A56"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                {" "}
                HTML/CSS | Bootstrap | Javascript | NodeJS | Express | React |
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
