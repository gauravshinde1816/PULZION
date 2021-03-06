import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="d-flex   justify-content-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="card ">
                <div className="card-body">
                  <h3 className="text-center" style={{ color: "rgb(244,205,210)" }}>WELCOME BACK</h3>

                  <form style={{ width: "450px" }}>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                          </div>
                        </div>

                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <button className="btn btn-outline-success btn-block">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
