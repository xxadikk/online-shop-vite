import { Button } from "antd";
import "../InfoCard/InfoCard.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const Infocards = () => {
  return (
    <div className="container">
      <div className="info-cards">
        <div className="info-card">
          <div className="info-card__body">
            <h1>About Us</h1>
            <p>Read about how we started, our vision and goals</p>
            <Button
              style={{
                color: "#20A647",
                backgroundColor: "#FFFFFF",
                fontWeight: 500,
                padding: "0 30px",
              }}
              size="large"
              color="default"
              variant="solid"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              About Us
            </Button>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card__body">
            <h1>Products</h1>
            <p>
              We are responsible for quality and are confident in our products.
            </p>
            <Button
              style={{
                color: "#20A647",
                backgroundColor: "#FFFFFF",
                fontWeight: 500,
                padding: "0 30px",
              }}
              size="large"
              color="default"
              variant="solid"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocards;
