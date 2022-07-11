import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Footer from "../homehekto/Footer";
import Navigation from "../homehekto/Navigation";
import RegisterAccountShip from "../homehekto/RegisterAccountShip";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/RegisterAccountShip.scss"
import "../scss/RegisterAccountContact.scss"
import "../scss/RegisterAccountProduct.scss"


export default function RegisterAccount(){
    return(
    <div className="Home_hekto">
      <Header/>
      <Navbar/>
      <Navigation title="Hekto Demo" name="Hekto Demo"></Navigation>
      <RegisterAccountShip/>
      <Footer/>
    </div>
    );
}