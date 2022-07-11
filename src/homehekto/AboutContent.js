import Slider from "react-slick";
import ShopexOffer from "../homehekto/ShopexOffer";
import AboutInfo from "./AboutInfo";

var settings = {
  dots: false,
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
function AboutContent() {
  var settings1 = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  return (
    <div className="aboutcontent">
      <div className="aboutcontent__top">
        <div className="aboutcontent__top__image">
          <img src="./images/Rectangle 56.png" alt=""></img>
        </div>
        <div className="aboutcontent__top__info">
          <div className="aboutcontent__top__info__title">
            Know About Our Ecomerce Business, History
          </div>
          <div className="aboutcontent__top__info__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </div>
          <button>Contact us</button>
        </div>
      </div>
      <div className="aboutcontent__center">
        <h1>Our Features</h1>
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
      <div className="aboutcontent__bot">
        <h1>Our Client Say!</h1>
        <div className="aboutcontent__bot">
          <Slider {...settings1}>
            <AboutInfo
              image="./images/OhKElOkQ3RE.png"
              name="Selina Gomez"
              office="Ceo At Webecy Digital"
            ></AboutInfo>
            <AboutInfo
              image="./images/GH-mSApoKO0.png"
              name="Selina Gomez"
              office="Ceo At Webecy Digital"
            ></AboutInfo>
            <AboutInfo
              image="./images/RukI4qZGlQs.png"
              name="Selina Gomez"
              office="Ceo At Webecy Digital"
            ></AboutInfo>
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default AboutContent;
