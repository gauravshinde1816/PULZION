import React from "react";
import "./About.css";
import child from "./child.jpg"
const About = () => {
  return (
    <div>
      <header id="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto text-center">
              <h1 class="page-title">About Us</h1>
              <p class="page-description">
              “Do a deed of simple kindness; though its end you may not see, it may reach like widening ripples down   a long eternity” – Joseph Norris
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
              <h3>Who we are</h3>
              <p>
              UpLift is a non-profit organization working to transform the lives of slum kids by providing them health care and immunizations, safe water and sanitation, nutrition, education, emergency relief and more...
              </p>
              <h3>What we do</h3>
              <p>
               Our mission is to provide hope and resources for those without life’s essentials.We are dedicated to ensure that every child has access to health care and education. We are meeting the enormous challenge through a broad range of programs and services aimed at patients, caregivers, health care professionals, policy makers and the general public. Our volunteer experts select the scientific research most worthy of funding — with great results.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src={child}
                alt=""
                class="img-fluid rounded-circle align-items-center about-img d-md-block"
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
                  
                  <h3>Cause</h3>
                  A quality education should not be determined by financial means nor disability. 
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-dark text-white text-center">
                <div class="card-body">
                 
                  <h3>Vision</h3>
                  Our motto is to create a future without hungry children . We believe in treating each child and family in the communities where they work with value and worth. Everyone should have the opportunity to learn, grow and thrive. 
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-danger text-white text-center">
                <div class="card-body">
                
                  <h3>Mission</h3>
                  UpLift is rooted in the promise of equal educational opportunity and healthcare facilities, and nowhere is that covenant more relevant than in the lives of children who live near poverty or for students with special needs.
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
