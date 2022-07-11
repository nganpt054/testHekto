function GridProduct({ image, title }) {
  return (
    <div className="contentShop__shopgrid__listitem__product">
      <div className="contentShop__shopgrid__listitem__product__img">
        <img alt="" src={image}></img>
      </div>
      <div className="contentShop__shopgrid__listitem__product__title">
        <h1>{title}</h1>
        <div className="contentShop__shopgrid__listitem__product__title__color">
          <img alt="" src="./images/Ellipse 28.png"></img>
          <img alt="" src="./images/Ellipse 29.png"></img>
          <img alt="" src="./images/Ellipse 30.png"></img>
        </div>
        <div className="contentShop__shopgrid__listitem__product__title__price">
          <p>$26.00 </p>
          <p className="sale">$42.00</p>
        </div>
      </div>
    </div>
  );
}
export default GridProduct;
