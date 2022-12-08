import React from "react";
import Slider from "react-slick";
import { category } from "../../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./catagory.css";
import { Link } from "react-router-dom";

const Catagory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="category">
      <div className="content">
        <Slider {...settings}>
          {category.map((item) => (
            <div className="boxs">
              <div className="box" key={item.id}>
                <img src={item.cover} alt="cover" />
                <div className="overlay">
                  <Link to="/" className="link">
                    <h4>{item.category}</h4>
                  </Link>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Catagory;
