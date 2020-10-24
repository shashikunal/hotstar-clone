import React, { Component, Fragment } from "react";
import HeaderComponent from "./HotStarComponents/HeaderComponent/Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <header>
          <HeaderComponent />
        </header>
      </Fragment>
    );
  }
}

export default App;
