import React, { useEffect, useState } from "react";
function CurtProduct(props) {
  const cart = props.item;
  const [item, setItem] = useState(cart);
  useEffect(() => {
    setItem(cart);
  }, [cart]);
  return (
    <div className="CurtProduct">
      <div className="CurtProduct__product">
        <img className="CurtProduct__product__img" src={item.image} alt=""></img>
        <div className="CurtProduct__product__name">
          <p className="CurtProduct__product__name__n">{item.title}</p>
          <p className="CurtProduct__product__name__c">Color:Brown</p>
          <p className="CurtProduct__product__name__z">Size:XL</p>
        </div>
      </div>
      <p className="CurtProduct__price">$32.00</p>
      <div className="CurtProduct__quantity">
        <button className="CurtProduct__quantity__b">-</button>
        <label className="CurtProduct__quantity_l">1</label>
        <button className="CurtProduct__quantity__b">+</button>
      </div>
      <p className="CurtProduct__total">£219.00</p>
    </div>
  );
}
export default CurtProduct;
