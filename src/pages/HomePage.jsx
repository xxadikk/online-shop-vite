import Banner from "../components/Home-Page/Banner";
import Categories from "../components/Home-Page/Categories";
import ProductCards from "../components/ProductCards/ProductCards";
import Infocards from "../components/InfoCard/Infocards";
import "../components/Home-Page/homepage.css";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Banner />
      <Categories />
      <ProductCards />
      <Infocards />
    </div>
  );
}
