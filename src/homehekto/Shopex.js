import ShopexOffer from "./ShopexOffer";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
class Shopex extends React.Component {
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
      ],
    };
    const listImages = [
      "./images/free-delivery 1.png",
      "./images/cashback 1.png",
      "./images/premium-quality 1.png",
      "./images/24-hours-support 1.png",
      "./images/free-delivery 1.png",
      "./images/cashback 1.png",
      "./images/premium-quality 1.png",
      "./images/24-hours-support 1.png",
    ];
    return (
      <div className="content__shopex">
        <div className="content__shopex__offer">
          <h1>What Shopex Offer!</h1>
        </div>
        <div className="content__shopex__support">
          <div id="shopex__mobile">
            <Slider {...settings}>
              {listImages.map((image) => (
                <ShopexOffer image={image} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Shopex;
