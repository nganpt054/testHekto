import FeaturedProduct from "./FeaturedProdcuts";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

class Featured extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
          },
        },
      ],
    };
    const listImages = [
      "./images/image 1168.png",
      "./images/image 3.png",
      "./images/image 1169.png",
      "./images/image 1.png",
      "./images/image 1168.png",
      "./images/image 3.png",
      "./images/image 1169.png",
      "./images/image 1.png",
    ];
    return (
      <div className="content__featured">
        <div className="content__featured__products">
          <p>Featured Products</p>
          <div className="content__featured__slide">
            <div id="featured__mobile">
              <Slider {...settings}>
                {listImages.map((image) => (
                  <FeaturedProduct image={image} />
                ))}
              </Slider>
            </div>
            <div id="featured__ipad">
              <Slider {...settings}>
                {listImages.map((image) => (
                  <FeaturedProduct image={image} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Featured;
