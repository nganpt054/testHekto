import LeatestBlog from "./LeatestBlog";

import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
class Leatestblg extends React.Component {
  render() {
    const listImages = [
      "./images/JIUjvqe2ZHg.png",
      "./images/2dc.png",
      "./images/3dc.png",
      "./images/JIUjvqe2ZHg.png",
      "./images/2dc.png",
      "./images/3dc.png",
    ];
    var settings = {
      dots: true,
      infinite: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
      ],
    };

    return (
      <div className="content__leatestblg">
        <div className="content__leatestblg__blog">
          <h1>Leatest Blog</h1>
        </div>
        <div className="content__leatestblg__top">
          <div id="leatestblg__mobile">
            <Slider {...settings}>
              {listImages.map((image) => (
                <LeatestBlog image={image} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Leatestblg;
