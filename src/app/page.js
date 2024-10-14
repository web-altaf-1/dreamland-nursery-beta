import Banner from "@/components/Banner/Banner";
import DiscountProducts from "@/components/DiscountProducts/DiscountProducts";
import Facts from "@/components/Facts/Facts";
import Features from "@/components/Features/Features";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Facts></Facts>
      <PopularProducts></PopularProducts>
      <Features></Features>
      <DiscountProducts></DiscountProducts>
      <Footer></Footer>
    </div>
  );
}
