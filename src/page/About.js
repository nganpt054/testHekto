import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import Footer from "../homehekto/Footer"
import AboutContent from "../homehekto/AboutContent";

function About(){
    return(
        <>
        <Header></Header>
        <Navbar></Navbar>
        <Navigation title="About Us" name="About Us"></Navigation>
        <AboutContent></AboutContent>

        <Footer></Footer>
        </>
    )
}
export default About;