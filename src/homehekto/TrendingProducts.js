function TrendingProducts({ image }) {
  return (
    <div className="content__trending__productitems__item1__cantilever">
      <div className="content__trending__productitems__item1__cantilever__chair">
        <img alt="" src={image}></img>
      </div>
      <div className="content__trending__productitems__item1__cantilever__price">
        <h2>Cantilever chair</h2>
        <div className="content__trending__productitems__item1__cantilever__price__sale">
          <p>$26.00 </p>
          <p className="sale">$42.00</p>
        </div>
      </div>
    </div>
  );
}
export default TrendingProducts;
