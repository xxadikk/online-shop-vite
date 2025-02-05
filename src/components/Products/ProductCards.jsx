import { Card } from "antd";
import "../Products/ProductCards.css";
import Meta from "antd/es/card/Meta";

const ProductCards = () => {
  return (
    <div className="container">
      <div className="productCards">
        <h1>All products</h1>
        <div className="productCards__body">
          <Card
            style={{
              width: 320,
            }}
            cover={
              <img
                alt="example"
                src="https://ginginanddry.net.au/wp-content/uploads/2020/03/2002_Sulphite-Sulphur-Free-Dried-Fruit.jpg"
                style={{
                  width: "320px",
                  height: "370px",
                  objectFit: "cover",
                }}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            style={{
              width: 320,
            }}
            cover={
              <img
                alt="example"
                src="https://bloomable.co.za/cdn/shop/products/dried-fruit-and-nuts-snack-box-303124.png?v=1706527835"
                style={{
                  width: "320px",
                  height: "370px",
                  objectFit: "cover",
                }}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
