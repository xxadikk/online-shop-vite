import { Button, Input } from "antd";
import catalogicon from "../assets/catalogIcon.svg";
import searchicon from "../assets/searchIcon.svg";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../helpers/const";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuTop = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="menu-top">
      <div className="container">
        <div className="menu-top__body">
          <div className="menu-top__left">
            <div className="left-block__logo" onClick={() => navigate("/")}>
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
              {t("header.catalog")}
            </Button>
            <Input
              style={{
                backgroundColor: "#e9e9e9",
                color: "#151515",
                padding: "8px 200px 8px 0",
                gap: "0 20px",
              }}
              variant="borderless"
              placeholder={t("header.search_placeholder")}
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
              {t("header.favorites")}
            </Button>
            <Button
              style={{ color: "#151515" }}
              size="large"
              color="default"
              variant="link"
              icon={<ShoppingCartOutlined className="iconStyle" />}
            >
              {t("header.cart")}
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
              onClick={() => navigate("/login")}
            >
              {t("header.login")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTop;
