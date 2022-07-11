import ContentFAQ from "../homehekto/ContentFAQ";
import Footer from "../homehekto/Footer";
import Header from "../homehekto/Header";
import Logo from "../homehekto/Logo";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";

function FAQ(){
    return(
        <>
        <Header/>
        <Navbar/>
        <Navigation title="FAQ" name="FAQ"/>
        <ContentFAQ/>
        <Logo/>
        <Footer/>
        </>
    )
}
export default FAQ;