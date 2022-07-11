import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Footer from "../homehekto/Footer";
import Logo from "../homehekto/Logo";
import Navigation from "../homehekto/Navigation";
import OrderComp from "../homehekto/OrderComp";   

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/OrderComp.scss";

export default function OrderCompleted(){
    return(
    <div className="Home_hekto">
      <Header/>
      <Navbar/>
      <Navigation title="Order Completed" name="Order Completed"></Navigation>
      <OrderComp/>
      <Logo/>
      <Footer/>
    </div>
    );
}