import Banner from "@/components/Banner/Banner";
import DiscountProducts from "@/components/DiscountProducts/DiscountProducts";
import Facts from "@/components/Facts/Facts";
import Features from "@/components/Features/Features";
import MapSection from "@/components/MapSection";
import OurWork from "@/components/OurWork/OurWork";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import MobileBottomHeader from "@/components/Shared/MobileBottomHeader";
import WhyUs from "@/components/WhyUs/WhyUs";


export default function Home() {

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Facts></Facts>
      <WhyUs></WhyUs>
      <OurWork></OurWork>
      {/* <PopularProducts isHomePage={true}></PopularProducts> */}
      <Features></Features>
      <QuestionSection></QuestionSection>
      <MapSection></MapSection>
      {/* <DiscountProducts isHomePage={true}></DiscountProducts> */}
      <Footer></Footer>
      <MobileBottomHeader ></MobileBottomHeader>?
    </div>
  );
}
