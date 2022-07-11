import ContentSingle from "../homehekto/ContentSingle";
import Footer from "../homehekto/Footer";
import Header from "../homehekto/Header";
import Logo from "../homehekto/Logo";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";

function SingleBlock(){
    return(
        <>
        <Header/>
        <Navbar/>
        <Navigation title="Single Blog" name="Single Blog"/>
        <ContentSingle/>
        <Logo/>
        <Footer/>
        </>
    )
}
export default SingleBlock;