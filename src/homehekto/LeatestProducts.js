function LeatestProducts({ image }) {
  return (
    <div className="content__leatest__slide__chairone">
      <div className="content__leatest__slide__chairone__img">
        <div className="content__leatest__slide__chairone__img1">
          <img alt="" src={image}></img>
        </div>
        <div className="content__leatest__slide__chairone__img__sale">
          <img alt="" src="./images/Group 27.png"></img>
        </div>
        <div className="content__leatest__slide__chairone__img__shop">
          <div className="content__leatest__slide__chairone__img__shop__like">
            <img className="img1" alt="" src="./images/Group 28.png"></img>
            <img alt="" src="./images/Vector (5).png"></img>
            <img alt="" src="./images/Vector (6).png"></img>
          </div>
        </div>
      </div>
      <div className="content__leatest__slide__chairone__price">
        <div className="name">
          <p>Comfort Handy Craft</p>
        </div>
        <div className="pricesale">
          <p>$42.00</p>
          <p className="sale">$65.00</p>
        </div>
      </div>
    </div>
  );
}
export default LeatestProducts;
