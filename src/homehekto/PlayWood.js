import React from "react";
import { useDispatch } from "react-redux";


import { addItem } from "../redux/CartItemsSlice";
function PlayWood(props) {
  const dispatch=useDispatch();
  const addToCart = () => {
    dispatch(
      addItem({
        id: props.id,
        image: props.image,
        title: props.title,
      })
    );
  }
  return (
    <div className="contentShop__playwood">
      <div className="contentShop__playwood__chair">
        <div className="contentShop__playwood__chair__left">
          <img alt="" src="/images/Rectangle 134.png"></img>
          <img alt="" src="/images/Rectangle 136.png"></img>
          <img alt="" src="/images/Rectangle 137.png"></img>
        </div>
        <div className="contentShop__playwood__chair__center">

          <img alt="" src={props.image}></img>
        </div>
        <div className="contentShop__playwood__chair__right">
     
          <h1>{props.title}</h1>
          <div className="contentShop__playwood__chair__right__img">
            <img alt="" src="/images/Vector (8).png"></img>
            <img alt="" src="/images/Vector (8).png"></img>
            <img alt="" src="/images/Vector (8).png"></img>
            <img alt="" src="/images/Vector (8).png"></img>
            <img alt="" src="/images/Vector (8).png"></img>
            <span>(22)</span>
          </div>
          <div className="contentShop__playwood__chair__right__price">
            <p className="price">$32.00</p>
            <p className="sale">$32.00</p>
          </div>
          <p>Color</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.<br></br>
          </span>
          <div className="contentShop__playwood__chair__right__button">
            <button  onClick={addToCart}>Add to cart</button>
            <img alt="" src="./images/Vector (5).png"></img>
          </div>
          <p>Categories:</p>
          <p>Tags</p>
          <div className="contentShop__playwood__chair__right__share">
            <p>Share</p>
            <div className="contentShop__playwood__chair__right__share__fb">
              <img alt="" src="./images/Group 202.png"></img>
            </div>
            <div className="contentShop__playwood__chair__right__share__instagram">
              <img alt="" src="./images/inta.png"></img>
            </div>
            <div className="contentShop__playwood__chair__right__share__fb">
              <img alt="" src="./images/Group 204.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 export default PlayWood;


