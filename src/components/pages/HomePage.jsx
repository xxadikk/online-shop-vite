import Banner from "../Home-Page/Banner";
import Categories from "../Home-Page/Categories";
import "../Home-Page/homepage.css";
import ProductCards from "../ProductCards/ProductCards";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Banner />
      <Categories />
      <ProductCards />
    </div>
  );
}
