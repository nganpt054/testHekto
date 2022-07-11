function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/#">Hekto</a>
      </div>
      <div className="navbar__menu">
        <a href="/" className="navbar__menu__selected">
          Home<i class="fal fa-chevron-down"></i>
        </a>
        <a href="/">Pages</a>
        <a href="/products">Products</a>
        <a href="/">Blog</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar__search">
        <div className="navbar__search__input">
          <input type="text" name="search"></input>
          <div className="navbar__search__input__icon">
            <a href="/#">
              <i class="fal fa-search"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
