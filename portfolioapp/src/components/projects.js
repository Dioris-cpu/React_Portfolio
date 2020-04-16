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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://4.bp.blogspot.com/-70WH-TTHyMc/WdVthZe_xYI/AAAAAAAADj4/PDnduSiypa4l3aWB4Ye2tpHDm2umrNV7QCLcBGAs/s1600/full%2Bstack%2Bdevelopment%2Bvenn.jpg) center / cover",
              }}
            >
              Trip Trips
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button >
                <a style={{textDecoration: 'none'}} href="https://github.com/Didier-D-crypto/Project-2-Full-Stack-App"> GitHub</a>
              </Button>
              <Button>
              <a style={{textDecoration: 'none'}} href="https://grouptriptips.herokuapp.com/">Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Note taker*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://4.bp.blogspot.com/-70WH-TTHyMc/WdVthZe_xYI/AAAAAAAADj4/PDnduSiypa4l3aWB4Ye2tpHDm2umrNV7QCLcBGAs/s1600/full%2Bstack%2Bdevelopment%2Bvenn.jpg) center / cover",
              }}
            >
              Note Taker
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button>
              <a style={{textDecoration: 'none'}} href="https://github.com/Dioris-cpu/noteTaker"> GitHub</a>
              </Button>
              <Button>
              <a style={{textDecoration: 'none'}} href="https://takerdioris.herokuapp.com">Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://4.bp.blogspot.com/-70WH-TTHyMc/WdVthZe_xYI/AAAAAAAADj4/PDnduSiypa4l3aWB4Ye2tpHDm2umrNV7QCLcBGAs/s1600/full%2Bstack%2Bdevelopment%2Bvenn.jpg) center / cover",
              }}
            >
             EatDaBurger
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button>
              <a style={{textDecoration: 'none'}} href="https://github.com/Dioris-cpu/burgers"> GitHub</a>
              </Button>
              <Button>
              <a style={{textDecoration: 'none'}} href="https://intense-chamber-29665.herokuapp.com/">Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://digitalagencynetwork.com/wp-content/uploads/2018/11/frontend-developer-love-conference-2019-amsterdam.jpg) center / cover",
            }}
          >
            Wish Dish
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button >
              <a style={{textDecoration: 'none'}} href="https://github.com/Dioris-cpu/group-Project-1"> GitHub</a>
            </Button>
            <Button>
            <a style={{textDecoration: 'none'}} href="https://dioris-cpu.github.io/group-Project-1/#">Live Demo</a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://digitalagencynetwork.com/wp-content/uploads/2018/11/frontend-developer-love-conference-2019-amsterdam.jpg) center / cover",
            }}
          >
            New York Times Search
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button>
            <a style={{textDecoration: 'none'}} href="https://github.com/Dioris-cpu/New-York-times"> GitHub</a>
            </Button>
            <Button>
            <a style={{textDecoration: 'none'}} href="https://dioris-cpu.github.io/New-York-times/">Live Demo</a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://digitalagencynetwork.com/wp-content/uploads/2018/11/frontend-developer-love-conference-2019-amsterdam.jpg) center / cover",
            }}
          >
            Day Planner
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button>
            <a style={{textDecoration: 'none'}} href="https://github.com/Dioris-cpu/Day-Planner"> GitHub</a>
            </Button>
            <Button>
            <a style={{textDecoration: 'none'}} href="https://dioris-cpu.github.io/Day-Planner/">Live Demo</a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
         <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://img-a.udemycdn.com/course/750x422/1906852_93c6.jpg) center / cover",
              }}
            >
              Fitness tracker
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button>
              <a style={{textDecoration: 'none'}} href="https://github.com/Dioris-cpu/bTracker"> GitHub</a>
              </Button>
              <Button>
              <a style={{textDecoration: 'none'}} href="https://powerful-chamber-99474.herokuapp.com/">Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
           <CardTitle
             style={{
               color: "black",
               height: "176px",
               background:
                 "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover",
             }}
           >
             Employee Tracker
           </CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's
           </CardText>
           <CardActions border>
             <Button>
             <a style={{textDecoration: 'none'}} href="https://github.com/Dioris-cpu/React_Homework1"> GitHub</a>
             </Button>
             <Button>
             <a style={{textDecoration: 'none'}} href="https://employee-search-app.herokuapp.com/">Live Demo</a>
             </Button>
           </CardActions>
           <CardMenu style={{ color: "#fff" }}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
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
