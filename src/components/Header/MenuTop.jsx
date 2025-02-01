import { Button, Input } from "antd";
import catalogicon from "../assets/catalogIcon.svg";
import searchicon from "../assets/searchIcon.svg";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../helpers/const";

const MenuTop = () => {
  return (
    <div className="menu-top">
      <div className="container">
        <div className="menu-top__body">
          <div className="menu-top__left">
            <div className="left-block__logo">
              <img src={logo} alt="" />
            </div>
            <Button
              style={{
                color: "white",
                backgroundColor: "#20A647",
                fontWeight: 600,
              }}
              size="large"
              color="default"
              variant="solid"
              icon={<img className="iconStyle" src={catalogicon} />}
            >
              Catalog
            </Button>
            <Input
              style={{
                backgroundColor: "#e9e9e9",
                color: "#151515",
                padding: "8px 200px 8px 0",
                gap: "0 20px",
              }}
              variant="borderless"
              placeholder="Search products"
              prefix={<img className="iconStyle" src={searchicon} />}
            />
          </div>
          <div className="menu-top__right">
            <Button
              style={{ color: "#151515" }}
              size="large"
              color="default"
              variant="link"
              icon={<HeartOutlined className="iconStyle" />}
            >
              Favorites
            </Button>
            <Button
              style={{ color: "#151515" }}
              size="large"
              color="default"
              variant="link"
              icon={<ShoppingCartOutlined className="iconStyle" />}
            >
              Cart
            </Button>
            <Button
              style={{
                color: "white",
                backgroundColor: "#28C656",
                fontWeight: 500,
              }}
              size="large"
              color="default"
              variant="solid"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTop;
