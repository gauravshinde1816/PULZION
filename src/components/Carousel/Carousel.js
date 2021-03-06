import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <section id="showcase">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item carousel-image-1 active">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block text-center mb-5">
               
                <p className="lead">
                One in three children is growing up in a slum, UNICEF says. Ever more families are moving into the world's cities, where life is often worse there than in the countryside, according to the UN children's agency.
                </p>
               
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-2">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block mb-5">
               
                <p className="lead">
                  Together, We Can! 
                </p>
              
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-3">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block text-right mb-5">
              
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  aperiam vel ullam deleniti reiciendis ratione quod aliquid
                  inventore vero perspiciatis.
                </p>
               
              </div>
            </div>
          </div>
        </div>

        <a
          href="#myCarousel"
          data-slide="prev"
          className="carousel-control-prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>

        <a
          href="#myCarousel"
          data-slide="next"
          className="carousel-control-next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;
