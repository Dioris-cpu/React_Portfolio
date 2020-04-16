import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Dioris Diaz</h2>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQH1RFJUCcfd5w/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=AEZWmFtkj7AQOd3spRPGkZTkmX5LcNgVEQo9TyNSlY8"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Feel free to get in contact with Dioris. He's a pretty cool guy who's also super friendly.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />{" "}
                    (267)-320-7168
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />{" "}
                    diorisd@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
