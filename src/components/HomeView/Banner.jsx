import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Инициализация перевода

  return (
    <div className="container">
      <div className="banner">
        <div className="banner-block">
          <div className="banner-block__title">
            <h1>{t("home_page.banner_title")}</h1>
            <p>{t("home_page.banner_description")}</p>
            <Button
              style={{
                color: "#20A647",
                backgroundColor: "#FFFFFF",
                fontWeight: 500,
                padding: "0 30px",
              }}
              onClick={() => navigate("/products")}
              size="large"
              color="default"
              variant="solid"
            >
              {t("home_page.to_shop")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
