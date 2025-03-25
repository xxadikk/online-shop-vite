import { Button, Card } from "antd";
import { motion } from "framer-motion";
import { HeartFilled, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import starIcon from "../assets/starIcon.svg";

const ProductCard = () => {
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
    <Card
      className="productCard"
      cover={
        <img
          className="productCard-img"
          alt="example"
          src="https://ginginanddry.net.au/wp-content/uploads/2020/03/2002_Sulphite-Sulphur-Free-Dried-Fruit.jpg"
        />
      }
    >
      <motion.div
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
      <div className="productCard-rating">
        <div className="productCard-rating__icon">
          <img src={starIcon} alt="" />
          <p>4.9</p>
        </div>
        <ul className="productCard-rating__title">
          <li>153 ratings</li>
        </ul>
      </div>
      <div className="productCard__btn">
        <Button
          style={{
            color: "black",
            backgroundColor: "#F0F0F0",
            fontWeight: 500,
            padding: "15px 0",
            width: "40%",
          }}
          size="large"
          color="default"
          variant="solid"
          icon={liked ? <ShoppingCartOutlined className="iconStyle" /> : null}
        >
          42 356 с
        </Button>
        <Button
          style={{
            padding: "15px 0",
            backgroundColor: "#28C656",
            width: "55%",
          }}
          size="large"
          color="default"
          variant="solid"
          icon={<ShoppingCartOutlined className="iconStyle" />}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
