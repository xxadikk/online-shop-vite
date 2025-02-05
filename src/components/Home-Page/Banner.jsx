import { Button } from "antd";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner-block">
          <div className="banner-block__title">
            <h1>Fresh Groceries Delivered To Your Doorstep</h1>
            <p>
              We are pleased to announce a new product development! The range
              includes only proven products that guarantee reliability and long
              service life.
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
            >
              To shop
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
