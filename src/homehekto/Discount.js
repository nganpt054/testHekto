function Discount() {
  return (
    <div className="content__discount">
      <div className="content__discount__item">
        <h1>Discount Item</h1>
      </div>
      <div className="content__discount__product">
        <div className="content__discount__product__menu">
          <a href="/#">Wood Chair</a>
          <li>
            <a href="/#">Plastic Chair</a>
            <a href="/#">Sofa Colletion</a>
          </li>
        </div>
        <div className="content__discount__product__discountoff">
          <h1>20% Discount Of All Products</h1>
          <p className="p1">Eams Sofa Compact</p>
          <p className="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="content__discount__product__discountoff__item">
            <div className="content__discount__product__discountoff__item__simple">
              <ul style={{ listStyleImage: "url('./images/tick.png')" }}>
                <li>Material expose like metals</li>
                <li>Simple neutral colours.</li>
              </ul>
              <ul style={{ listStyleImage: "url('./images/tick.png')" }}>
                <li>Clear lines and geomatric figures</li>
                <li>Material expose like metals</li>
              </ul>
            </div>
          </div>
          <button>Shop Now</button>
        </div>
        <div className="content__discount__product__tortuga">
          <img alt="" src="./images/tortuga.png"></img>
        </div>
      </div>
    </div>
  );
}
export default Discount;
