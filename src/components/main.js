import React from "react";
import { Switch } from "react-mdl";
import { Route } from "react-router-dom";
import Landing from "./landingPage";
import About from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";



// set routes

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route  path="/resume" component={Resume} />
    </Switch>
)

export default Main;
