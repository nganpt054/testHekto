function LeftProduct({
  image,
  title,
  colors,
  price,
  sale,
  ratings,
  description,
  vectors,
}) {
  return (
    <div className="contentShop__shopleft__listproduct__product">
      <div className="contentShop__shopleft__listproduct__product__img">
        <img alt="" src={image}></img>
      </div>
      <div className="contentShop__shopleft__listproduct__product__title">
        <div className="contentShop__shopleft__listproduct__product__title__item">
          <h1>{title}</h1>
          <div className="contentShop__shopleft__listproduct__product__title__item__color">
            {colors.map((color) => (
              <img alt="" src={color}></img>
            ))}
          </div>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__price">
          <p>{price}</p>
          <p className="sale">{sale}</p>
          <div className="contentShop__shopleft__listproduct__product__title__price__rating">
            {ratings.map((rating) => (
              <img alt="" src={rating}></img>
            ))}
          </div>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__description">
          <p>{description}</p>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__vector">
          {vectors.map((vector) => (
            <div className="contentShop__shopleft__listproduct__product__title__vector__img">
              <img alt="" src={vector}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default LeftProduct;
