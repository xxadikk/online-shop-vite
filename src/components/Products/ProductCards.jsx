import { Card } from "antd";
import "../Products/ProductCards.css";
import Meta from "antd/es/card/Meta";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { motion } from "framer-motion";

const ProductCards = () => {
  const [liked, setLiked] = useState(true);
  const handleLikeClick = async () => {
    const newLikedState = !liked;
    setLiked(newLikedState);

    // try {
    //   await axios.post('/api/update-like', {
    //     productId,
    //     liked: newLikedState,
    //   });
    // } catch (error) {
    //   console.error('Ошибка при обновлении состояния лайка:', error);
    // }
  };
  return (
    <div className="container">
      <div className="productCards">
        <h1>All products</h1>
        <div className="productCards__body">
          <Card
            className="productCard"
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
            <motion.div
              motion
              className="productCard-like"
              onClick={handleLikeClick}
              whileTap={{ scale: 0.8 }}
              animate={{
                scale: liked ? 1 : 1,
                color: liked ? "#ff4d4f" : "#000",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {liked ? (
                <HeartFilled className="productCard-like__icon" />
              ) : (
                <HeartOutlined className="productCard-like__icon" />
              )}
            </motion.div>
            <h3>Selected Walnuts</h3>
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
