import Head from "next/head";
import Header from "../components/top-header";
import Hero from "../components/hero-section";
import Home from "../components/properties-by-area-images-sect";
import Service from "../components/properties-by-area-feature-car";
import HomeRent from "../components/latest-properties-of-rent-card2";
import Blog from "../components/latest-properties-of-rent-card1";
import Contact from "../components/latest-properties-of-rent-card";
import Footer from "../components/footer-section";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-gray-white flex flex-col items-center justify-start tracking-[normal]">
      <Header />
      <Hero />
      <Home />
      <Service />
      <HomeRent />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
