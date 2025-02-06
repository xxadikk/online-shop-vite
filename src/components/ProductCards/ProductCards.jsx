import "./ProductCards.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductCards = () => {
  return (
    <div className="container">
      <div className="productCards">
        <h1>All products</h1>
        <div className="productCards__body">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
