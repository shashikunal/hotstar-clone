import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../../firebase";

class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
    };

    this.videoRef = React.createRef();
    this.mainVideoRef = React.createRef();
  }

  VideoPlayOrPaused = () => {
    this.videoRef.current.play();
    this.videoRef.current.style.width = "100%";
    this.videoRef.current.style.height = "100%";

    this.videoRef.current.setAttribute("controls", "controls");

    this.mainVideoRef.current.style.display = "none";
  };

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
    let {
      name,
      url,
      year,
      type,
      rating,
      genre,
      description,
      language,
    } = this.state.movie;
    return (
      <Fragment>
        <section className="moviesBlock movieBlockId">
          <article className="row">
            <video ref={this.videoRef}>
              <source src={url}></source>
            </video>
            <main ref={this.mainVideoRef}>
              <h2>{name}</h2>
              <div className="descriptionBlock">
                <span>{year}</span>
                <span>{type}</span>
                <span>{rating}</span>
                <span>{language}</span>
              </div>
              <div>
                <p>{description}</p>
              </div>
              <div>
                <button onClick={this.VideoPlayOrPaused}>watch Movie</button>
              </div>
            </main>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(ListMovie);
