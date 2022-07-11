import LeatestProducts from "./LeatestProducts";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import FeaturedProduct from "./FeaturedProdcuts";
class Leatest extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
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
      "./images/image 1166.png",
      "./images/image 15.png",
      "./images/image 1168.png",
      "./images/image 23.png",
      "./images/image 32.png",
      "./images/image 3 (1).png",
    ];
    return (
      <div className="content__leatest">
        <div className="content__leatest__products">
          <h1>Leatest Products</h1>
        </div>
        <div className="content__leatest__menu">
          <a className="a1" href="/#">
            New Arrival
          </a>
          <a href="/#">Best Seller</a>
          <a href="/#">Featured</a>
          <a href="/#">Special Offer</a>
        </div>
        <div className="content__leatest__slide">
          <div id="slider">
            <Slider {...settings}>
              {listImages.map((image) => (
                <LeatestProducts image={image} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Leatest;
