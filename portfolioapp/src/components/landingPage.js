import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import {Image} from "react-native"
import Img from 'react-image';


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <Img
                            src="https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                       
                        <hr/>
                        <p> HTML/CSS | Bootstrap | Javascript | NodeJS | Express | React | MongoDB</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/dioris-diaz-18a053191/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            <a href="https://github.com/Dioris-cpu" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                    
                </Grid>

            </div>
        )
    }
  
}

export default Landing;