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
                  "url(https://github.com/Didier-D-crypto/Project-2-Full-Stack-App/raw/master/public/img/eventappend.gif) center / cover",
              }}
            >
              Trip Trips
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Didier-D-crypto/Project-2-Full-Stack-App"
                >
                  {" "}
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://grouptriptips.herokuapp.com/"
                >
                  Live Demo
                </a>
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
                  "url(https://dioris-cpu.github.io/Homework-9/img/Screen%20Shot%202020-03-19%20at%2011.55.36%20AM.png) center / cover",
              }}
            >
              Note Taker
            </CardTitle>
            <CardText>
              This is a node application that allows you to add and delete notes
              that you type in. In order to use this application follow the
              directions listed below: Run 'npm install' Run 'nodemon npm start'
              On your google chrome bowser type in localhost:3000
            </CardText>
            <CardActions border>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Dioris-cpu/noteTaker"
                >
                  {" "}
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://takerdioris.herokuapp.com"
                >
                  Live Demo
                </a>
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
                  "url(https://dioris-cpu.github.io/Homework-9/img/Screen%20Shot%202020-03-19%20at%2011.49.20%20AM.png) center / cover",
              }}
            >
              EatDaBurger
            </CardTitle>
            <CardText>
            This application allows the user to create his or her own burger and and gives them the options to devour it if they want to be clicking onto the devour button.
            </CardText>
            <CardActions border>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Dioris-cpu/burgers"
                >
                  {" "}
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://intense-chamber-29665.herokuapp.com/"
                >
                  Live Demo
                </a>
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
                  "url(https://user-images.githubusercontent.com/48693333/77028924-a7c23e00-6970-11ea-8a94-92daa2884025.png) center / cover",
              }}
            >
              Wish Dish
            </CardTitle>
            <CardText>
              WishDish is a local restaurant ordering application that is
              designed to suggest the top 3 closest restaurants based on what
              food you are craving. As a user you just have to choose out of the
              three. This app is similar to Grubhub, UberEATS, DoorDash and
              Caviar, however, the idea of this app was to tackle the paradox of
              choice problem when it comes to ordering food in Philly,
              especially on a local delivery food service app. This application
              was designed in about 2 weeks at the Pennovation Center in
              Philadelphia.
            </CardText>
            <CardActions border>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Dioris-cpu/group-Project-1"
                >
                  {" "}
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://dioris-cpu.github.io/group-Project-1/#"
                >
                  Live Demo
                </a>
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
                  "url(https://dioris-cpu.github.io/Homework-9/img/Screen%20Shot%202020-01-21%20at%206.55.18%20AM.png) center / cover",
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
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Dioris-cpu/New-York-times"
                >
                  {" "}
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://dioris-cpu.github.io/New-York-times/"
                >
                  Live Demo
                </a>
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
                  "url(https://dioris-cpu.github.io/Homework-9/img/Screen%20Shot%202020-03-19%20at%2011.36.36%20AM.png) center / cover",
              }}
            >
              Drum kit
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Dioris-cpu/Drum_Kit"
                >
                  {" "}
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://dioris-cpu.github.io/Drum_Kit/"
                >
                  Live Demo
                </a>
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
                  "url(https://github.com/Dioris-cpu/workoutTracker/raw/master/fitapp.gif) center / cover",
              }}
            >
              Fitness tracker
            </CardTitle>
            <CardText>
              As a user, I want to be able to view create and track daily
              workouts. I want to be able to log multiple exercises in a workout
              on a given day. I should also be able to track the name, type,
              weight, sets, reps, and duration of exercise. If the exercise is a
              cardio exercise, I should be able to track my distance traveled.
            </CardText>
            <CardActions border>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Dioris-cpu/bTracker"
                >
                  {" "}
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://powerful-chamber-99474.herokuapp.com/"
                >
                  Live Demo
                </a>
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
                  "url(https://github.com/Dioris-cpu/React_Homework1/raw/master/gifOne.gif) center / cover",
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
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Dioris-cpu/React_Homework1"
                >
                  {" "}
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://employee-search-app.herokuapp.com/"
                >
                  Live Demo
                </a>
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
