function Search() {
  return (
    <div className="contentShop__search">
      <div className="contentShop__search__left">
        <h1>Ecommerce Acceories & Fashion item </h1>
        <p>About 9,620 results (0.62 seconds)</p>
      </div>
      <div className="contentShop__search__right">
        <div className="contentShop__search__right__page">
          <p>Per Page:</p>
          <div className="contentShop__search__right__page__input">
            <input></input>
          </div>
        </div>
        <div className="contentShop__search__right__sort">
          <p>Sort By:</p>
          <div className="contentShop__search__right__sort__input">
            <input placeholder="Best Match"></input>
            <div className="contentShop__search__right__sort__input__icon">
              <img alt="" src="./images/Vector (2).png"></img>
            </div>
          </div>
        </div>
        <div className="contentShop__search__right__view">
          <div className="contentShop__search__right__view__img">
            <p>View:</p>
            <img alt="" src="./images/clarity.png"></img>
            <img alt="" src="./images/Vector (7).png"></img>
          </div>
          <div className="contentShop__search__right__view__input">
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
