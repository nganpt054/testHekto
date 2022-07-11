import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
import ShopLeftSidebar from "../homehekto/ShopLeftSidebar";
import Logo from "../homehekto/Logo";
import Footer from "../homehekto/Footer";
function ShopLeft() {
  return (
    <div className="Shop_Left">
      <Header />
      <Navbar />
      <Navigation title="Shop Left Sidebar" name="Shop Left Sidebar" />
      <Search />
      <ShopLeftSidebar />
      <Logo />
      <Footer />
    </div>
  );
}
export default ShopLeft;
