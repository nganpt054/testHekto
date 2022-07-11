import TopCategories from "./TopCategories";

import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
class Top extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
          },
        },
        {
          breakpoint: 495,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
      ],
    };
    const listImages = [
      "./images/image 20.png",
      "./images/image 1168.png",
      "./images/image 1171.png",
      "./images/image 20.png",
      "./images/image 20.png",
      "./images/image 1168.png",
      "./images/image 1171.png",
      "./images/image 20.png",
    ];
    return (
      <div className="content__top">
        <div className="content__top__categories">
          <h1>Top Categories</h1>
        </div>
        <div className="content__top__mini">
          <div id="mobile">
            <Slider {...settings}>
              {listImages.map((image) => (
                <TopCategories image={image} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Top;
