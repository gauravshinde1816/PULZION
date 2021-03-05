import React from "react";

const JoinUs = () => {
  return (
    <div>
      <header id="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 m-auto text-center">
              <h1>Join Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                temporibus?
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4">
              <div className="card-body">
                <h3 className="text-center">JOIN US TODAY</h3>
                <p className="text-center text-secondary">
                  Let's make the world better place
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
