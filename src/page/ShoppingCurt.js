import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Footer from "../homehekto/Footer";
import Navigation from "../homehekto/Navigation";
import CurtListPr from "../homehekto/CurtListPr";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/productCurt.scss";
import "../scss/CurtProduct.scss";
import "../scss/Label.scss";

function ShoppingCurt() {
  
  return (
    <div className="Home_hekto">
      <Header/>
      <Navbar/>
      <Navigation title="Shopping Curt" name="Shopping Curt"></Navigation>
      <CurtListPr />
      <Footer/>
    </div>
  );
}
export default ShoppingCurt;
