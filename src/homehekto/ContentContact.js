function ContentContact() {
  return (
    <div className="contentcontact">
      <div className="contentcontact__top">
        <div className="contentcontact__top__left">
          <div className="contentcontact__top__left__title">
            Information About us
          </div>
          <div className="contentcontact__top__left__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </div>
          <div className="contentcontact__top__left__vector">
            <img src="./images/Ellipse 41.png" alt=""></img>
            <img src="./images/Ellipse 42.png" alt=""></img>
            <img src="./images/Ellipse 43.png" alt=""></img>
          </div>
        </div>
        <div className="contentcontact__top__right">
          <div className="contentcontact__top__right__title">Contact Way</div>
          <div className="contentcontact__top__right__info">
            <div className="contentcontact__top__right__info__1">
              <div className="contentcontact__top__right__info__1__image">
                <img src="./images/Ellipse 44.png" alt=""></img>
              </div>
              <div className="contentcontact__top__right__info__1__text">
                <p>Tel: 877-67-88-99</p>
                <span>E-Mail: shop@store.com</span>
              </div>
            </div>
            <div className="contentcontact__top__right__info__2">
              <div className="contentcontact__top__right__info__2__image">
                <img src="./images/Ellipse 45.png" alt=""></img>
              </div>
              <div className="contentcontact__top__right__info__2__text">
                <p>Support Forum</p>
                <span>For over 24hr</span>
              </div>
            </div>
            <div className="contentcontact__top__right__info__3">
              <div className="contentcontact__top__right__info__3__image">
                <img src="./images/Ellipse 46.png" alt=""></img>
              </div>
              <div className="contentcontact__top__right__info__3__text">
                <p>20 Margaret st, London</p>
                <span>Great britain, 3NM98-LK</span>
              </div>
            </div>
            <div className="contentcontact__top__right__info__4">
              <div className="contentcontact__top__right__info__4__image">
                <img src="./images/Ellipse 47.png" alt=""></img>
              </div>
              <div className="contentcontact__top__right__info__4__text">
                <p>Free standard shipping</p>
                <span>on all orders.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentcontact__bot">
        <div className="contentcontact__bot__left">
          <div className="contentcontact__bot__left__title">Get In Touch</div>
          <div className="contentcontact__bot__left__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </div>
          <input type="text" placeholder="Your Name*" className="input__name"></input>
          <input type="text" placeholder="Your E-mail" className="input__email"></input>
          <input type="text" placeholder="Subject*" className="input__subject"></input>
          <textarea placeholder="Type you message" className="input__mess"></textarea>
          <button>Send Mail</button>
        </div>
        <div className="contentcontact__bot__right">
          <div className="contentcontact__bot__right__image">
            <img src="./images/Group 124.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContentContact;
