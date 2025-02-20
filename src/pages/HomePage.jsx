import Banner from "../components/HomeView/Banner";
import Categories from "../components/HomeView/Categories";
import ProductCards from "../components/ProductCards/ProductCards";
import Infocards from "../components/InfoCard/Infocards";
import "../components/HomeView/homepage.css";
import PartnersInfo from "../components/HomeView/PartnersInfo";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Banner />
      <Categories />
      <ProductCards />
      <Infocards />
      <PartnersInfo />
    </div>
  );
}
