import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggelCatagories() {
    if (this.state.activeTab === 0) {
      return (
        // trip tips

        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://4.bp.blogspot.com/-70WH-TTHyMc/WdVthZe_xYI/AAAAAAAADj4/PDnduSiypa4l3aWB4Ye2tpHDm2umrNV7QCLcBGAs/s1600/full%2Bstack%2Bdevelopment%2Bvenn.jpg) center / cover'}} >Trip Trips</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Note taker*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://4.bp.blogspot.com/-70WH-TTHyMc/WdVthZe_xYI/AAAAAAAADj4/PDnduSiypa4l3aWB4Ye2tpHDm2umrNV7QCLcBGAs/s1600/full%2Bstack%2Bdevelopment%2Bvenn.jpg) center / cover'}} >Note Taker </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://4.bp.blogspot.com/-70WH-TTHyMc/WdVthZe_xYI/AAAAAAAADj4/PDnduSiypa4l3aWB4Ye2tpHDm2umrNV7QCLcBGAs/s1600/full%2Bstack%2Bdevelopment%2Bvenn.jpg) center / cover'}} >React Project #3</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>

        
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>Frontend</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="catagory-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Full-Stack Applications</Tab>
          <Tab>Frontend Javascript</Tab>
          <Tab>MongoDB</Tab>
          <Tab>React</Tab>
        </Tabs>
        
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggelCatagories()}</div>
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default Projects;
