import Banner from "@/components/Banner/Banner";
import DiscountProducts from "@/components/DiscountProducts/DiscountProducts";
import Facts from "@/components/Facts/Facts";
import Features from "@/components/Features/Features";
import OurWork from "@/components/OurWork/OurWork";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
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
      {/* <DiscountProducts isHomePage={true}></DiscountProducts> */}
      <Footer></Footer>
    </div>
  );
}
