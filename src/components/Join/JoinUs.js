import React from "react";
import './JoinUs.css'

const JoinUs = () => {
  return (
    <div>
      <header id="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto text-center">
              <h1 class="page-title">Join Us</h1>
              <p class="page-description">
                Come, Experience the joy of giving.
                <br />
               Become a volunteer, Change a life!

              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="container my-5 ">
        <div className="row d-flex justify-content-around ">
          <div className="col-md-8">
            <div className="card p-4">
              <div className="card-body">
                <h3 className="text-center" style={{ color: "rgb(244,205,210)" }}>JOIN US TODAY</h3>
                <p className="text-center text-secondary0"  style={{ color: "rgb(244,205,210)" }}>
                  Let's make this world a better place
                </p>
                <form>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i
                            className="fa fa-user-circle"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
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
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i
                            className="fa fa-university"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <textarea
                        placeholder="Educational background"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <textarea
                        placeholder="Address"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i
                            className="fa fa-phone-square"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i
                            className="fa fa-building-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company"
                      />
                    </div>
                  </div>
                  <button className="btn btn-outline-success btn-block">
                    Join Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
