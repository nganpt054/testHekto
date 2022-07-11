function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__logo">
          <h1>Hekto</h1>
          <div className="footer__top__logo__search">
            <div className="footer__top__logo__search__email">
              <input type="text" placeholder="Enter Email Address"></input>
              <div className="footer__top__logo__search__email__button">
                <button>Sign Up</button>
              </div>
            </div>
          </div>
          <p>Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        <div className="footer__top__categories">
          <h1>Catagories</h1>
          <p>Laptops & Computers</p>
          <p>Cameras & Photography</p>
          <p>Smart Phones & Tablets</p>
          <p>Video Games & Consoles</p>
          <p>Waterproof Headphones</p>
        </div>
        <div className="footer__top__customer">
          <h1>Customer Care</h1>
          <p>My Account</p>
          <p>Discount</p>
          <p>Returns</p>
          <p>Orders History</p>
          <p>Order Tracking</p>
        </div>
        <div className="footer__top__pages">
          <h1>Pages</h1>
          <p>Order Tracking</p>
          <p>Browse the Shop</p>
          <p>Category</p>
          <p>Pre-Built Pages</p>
          <p>Visual Composer Elements</p>
          <p>WooCommerce Pages</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__all">
          <div className="footer__bottom__all__content">
            <p>©Webecy - All Rights Reserved</p>
          </div>
          <div className="footer__bottom__all__img">
            <img alt="" src="./images/Group 202.png"></img>
            <img alt="" src="./images/Group 203.png"></img>
            <img alt="" src="./images/Group 204.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
