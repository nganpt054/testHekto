import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Slide from "../homehekto/Slide";
import Content from "../homehekto/Content";
import Footer from "../homehekto/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="Home_hekto">
      <Header />
      <Navbar />
      <Slide />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
