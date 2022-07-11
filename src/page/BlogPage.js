import Footer from "../homehekto/Footer";
import Header from "../homehekto/Header";
import Logo from "../homehekto/Logo";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import BlogPagebwt from "../homehekto/BlogPagebwt"

import "../scss/BlogPagebwt.scss"
import "../scss/BlogPageSingle.scss"

export default function BlogPage() {
    return(
        <>
        <Header/>
        <Navbar/>
        <Navigation title="Blog Page" name="Blog Page"/>
        <BlogPagebwt/>
        <Logo/>
        <Footer/>
        </>
    );
}