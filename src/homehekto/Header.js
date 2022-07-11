function Header() {
  return (
    <div className="header">
      <div className="header__bar">
        <div className="header__bar__left">
          <a href="/#" className="header__bar__left__icons">
            <i class="fal fa-envelope"></i>
            <p>mhhasanul@gmail.com</p>
          </a>
          <a href="/#" className="header__bar__left__iconright">
            <i class="fal fa-phone-volume"></i>
            <p>(12345)67890</p>
          </a>
        </div>
        <div className="header__bar__right">
          <div className="header__bar__right__list">
            <a href="/#">
              English<i class="fal fa-chevron-down"></i>
            </a>
            <a href="/#">
              USD<i class="fal fa-chevron-down"></i>
            </a>
            <a href="/#">
              Login<i class="fal fa-user"></i>
            </a>
            <a href="/#">
              Wishlist<i class="fal fa-heart"></i>
            </a>
            <a href="/#">
              <i class="fal fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
      <label for="checkbar" className="header__bars">
        <i class="fal fa-bars"></i>
      </label>
      <input type="checkbox" className="headercheck" id="checkbar"></input>
      <div className="header__mobile">
        <label for="checkbar" className="header__mobile__time">
          <i class="far fa-window-close"></i>
        </label>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Pages</a>
          </li>
          <li>
            <a href="/#">Products</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Shop</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__right__login">
          <a href="/#">
            <i class="fal fa-shopping-cart"></i>
          </a>
          <a href="/#">
            <i class="fal fa-user"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
