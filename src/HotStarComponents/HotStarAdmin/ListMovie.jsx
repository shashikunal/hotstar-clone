import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../../firebase";

class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
    };
  }

  async componentDidMount() {
    await firebase
      .database()
      .ref("hotstarMovie")
      .child(this.props.location.state.id)
      .on("value", snapShot => {
        let newPost = snapShot.val();
        this.setState({ movie: newPost });
      });
  }

  render() {
    console.log(this.state.movie);
    return (
      <Fragment>
        <section className="moviesBlock">
          <h2>Hindi</h2>
          <article className="row">
            <h1>list movie</h1>
            <video controls={true}>
              <source src={this.state.movie.url}></source>
            </video>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(ListMovie);
