import React, { Component, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import firebase from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./HotStarComponents/AuthComponent/Login";
import Register from "./HotStarComponents/AuthComponent/Register";
import HeaderComponent from "./HotStarComponents/HeaderComponent/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: "" };
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        console.log("no user");
      }
      if (user.emailVerified) {
        this.setState({ userData: user });
        this.props.history.push("/");
      } else {
        this.setState({ userData: "" });
        this.props.history.push("/login");
      }
    });
  }

  render() {
   
    return (
      <Fragment>
        <header>
          <HeaderComponent user={this.state.userData}/>
        </header>
        <main>
          <ToastContainer />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
