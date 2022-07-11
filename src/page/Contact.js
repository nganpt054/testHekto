import ContentContact from "../homehekto/ContentContact";
import Footer from "../homehekto/Footer";
import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";

function Contact(){
    return(
        <>
        <Header/>
        <Navbar/>
        <Navigation title="Contact Us" name="Contact Us"/>
        <ContentContact/>
        <Footer/>
        </>
    )
}
export default Contact;