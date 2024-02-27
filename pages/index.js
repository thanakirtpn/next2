import Head from "next/head";
import TopHeader from "../components/top-header";
import HeroSection from "../components/hero-section";
import PropertiesByAreaImagesSect from "../components/properties-by-area-images-sect";
import PropertiesByAreaFeatureCar from "../components/properties-by-area-feature-car";
import LatestPropertiesOfRentCard2 from "../components/latest-properties-of-rent-card2";
import LatestPropertiesOfRentCard1 from "../components/latest-properties-of-rent-card1";
import LatestPropertiesOfRentCard from "../components/latest-properties-of-rent-card";
import FooterSection from "../components/footer-section";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-gray-white flex flex-col items-center justify-start tracking-[normal]">
      <TopHeader />
      <HeroSection />
      <PropertiesByAreaImagesSect />
      <PropertiesByAreaFeatureCar />
      <LatestPropertiesOfRentCard2 />
      <LatestPropertiesOfRentCard1 />
      <LatestPropertiesOfRentCard />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
