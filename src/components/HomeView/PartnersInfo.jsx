import udemy_logo from "../assets/PartnersLogo/udemy_logo.png";
import coursera_logo from "../assets/PartnersLogo/coursera_logo.png";
import khan_academy_logo from "../assets/PartnersLogo/khan_academy_logo.png";
import udacity_logo from "../assets/PartnersLogo/udacity_logo.png";
import kadenze_logo from "../assets/PartnersLogo/kadenze_logo.png";
import { useTranslation } from "react-i18next";

const PartnersInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="partnersInfo">
      <div className="partnersInfo__body">
        <div className="partnersInfo__title">
          <h1>{t("home_page.partners_title")}</h1>
          <p>{t("home_page.partners_description")}</p>
        </div>
        <div className="partnersInfo__logos">
          <div className="partnersInfo__logo">
            <img src={udemy_logo} alt="" />
          </div>
          <div className="partnersInfo__logo">
            <img src={coursera_logo} alt="" />
          </div>
          <div className="partnersInfo__logo">
            <img src={khan_academy_logo} alt="" />
          </div>
          <div className="partnersInfo__logo">
            <img src={udacity_logo} alt="" />
          </div>
          <div className="partnersInfo__logo">
            <img src={kadenze_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersInfo;
