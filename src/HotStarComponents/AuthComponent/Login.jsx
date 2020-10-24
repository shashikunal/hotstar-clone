import React, { Component, Fragment } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section className="card col-md-3 mx-auto">
          <article className="form-block">
            <h2>Login</h2>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-block btn-primary">Login</button>
                </div>
              </form>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default Login;
