import Description from "../homehekto/Description";
import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import PlayWood from "../homehekto/PlayWood";
import Related from "../homehekto/Related";
import Logo from "../homehekto/Logo";
import Footer from "../homehekto/Footer";
import { useParams } from "react-router-dom";
import productData from "../fake -data/fakedata-shopgrid";
function ProductDetails() {
  const { id } = useParams();

  const product = productData.getById(id);
  return (
    <div className="Product__Deatails">
      <Header />
      <Navbar />
      <Navigation title="Product Details" name="Product Details" />
      <PlayWood image={product.image} title={product.title} id={product.id}/>
      <Description />
      <Related />
      <Logo />
      <Footer />
    </div>
  );
}
export default ProductDetails;
