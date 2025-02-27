import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./App.scss";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("%c Smurfs Data", "color: orange; font-weight: bold;");
        console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "error" });
      });
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.history);
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Smurf Village
            </NavLink>
          </li>
          <li>
            <NavLink to="/smurf-form" activeClassName="activeNavButton">
              Add New Smurf!
            </NavLink>
          </li>
        </ul>
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              smurfs={this.state.smurfs}
              addSmurf={this.addSmurf}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
