import React from "react";

const Contact = () => {
  return (
    <div>
      <header id="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 m-auto text-center">
              <h1>Contact Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                temporibus?
              </p>
            </div>
          </div>
        </div>
      </header>
      <section id="contact" class="py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card p-4">
                <div class="card-body">
                  <h4>Get In Touch</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, odio!
                  </p>
                  <h4>Address</h4>
                  <p>550 Main st, Boston MA</p>
                  <h4>Email</h4>
                  <p>test@test.com</p>
                  <h4>Phone</h4>
                  <p>(555) 555-5555</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card p-4">
                <div className="card-body">
                  <h3 className="text-center">Contact US</h3>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="submit"
                          value="Submit"
                          class="btn btn-outline-danger btn-block"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
