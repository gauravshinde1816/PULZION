import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <header id="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 m-auto text-center">
              <h1>About Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                temporibus?
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ABOUT SECTION --> */}
      <section id="about" class="py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>What We Do</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                fuga eaque. Amet, assumenda aliquid tempore dolorum error
                eveniet doloribus sed repellat quod, dolores fuga ipsam soluta.
                Aliquam accusantium pariatur aut sint deleniti laborum ducimus
                voluptatem? Architecto cumque quod suscipit officiis soluta,
                voluptate dicta blanditiis similique praesentium temporibus
                adipisci debitis labore!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                fuga eaque. Amet, assumenda aliquid tempore dolorum error
                eveniet doloribus sed repellat quod, dolores fuga ipsam soluta.
                Aliquam accusantium pariatur aut sint deleniti laborum ducimus
                voluptatem? Architecto cumque quod suscipit officiis soluta,
                voluptate dicta blanditiis similique praesentium temporibus
                adipisci debitis labore!
              </p>
            </div>
            <div class="col-md-6">
              <img
                style={{ marginTop: "-60px" }}
                src="https://source.unsplash.com/random/700x700/?technology"
                alt=""
                class="img-fluid rounded-circle d-none d-md-block about-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="icon-boxes" class="p-5">
        <div class="container">
          <div class="row mb-4">
            <div class="col-md-4">
              <div class="card bg-danger text-white text-center">
                <div class="card-body">
                  <i class="fas fa-building fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, adipisci.
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-dark text-white text-center">
                <div class="card-body">
                  <i class="fas fa-bullhorn fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, adipisci.
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-danger text-white text-center">
                <div class="card-body">
                  <i class="fas fa-comments fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, adipisci.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
