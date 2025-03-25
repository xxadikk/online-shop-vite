import { Link, useLocation } from "react-router-dom";

import logo from "../helpers/const";
import "./Footer.css";
import LogoTelegram from "../assets/telegramIcon.svg";
import Logofacebook from "../assets/facebookIcon.svg";
import LogoInsta from "../assets/instaIcon.svg";
import LogoWhatsapp from "../assets/whatsappIcon.svg";
import LogoYoutube from "../assets/youtubeIcon.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-body">
          <div className="footer-body__block">
            <div className="block_logo">
              <div className="block_logo-img">
                <img src={logo} alt="logo" />
              </div>
              <div className="block_logo-title">
                <p>{t("footer.description")}</p>
              </div>
            </div>
            <div className="block_menu">
              <h3>{t("footer.pages")}</h3>
              <ul>
                <li>
                  <Link className={pathname === "/" ? "active_footer" : ""} to="/">
                    {t("header.main")}
                  </Link>
                </li>
                <li>
                  <Link className={pathname === "/products" ? "active_footer" : ""} to="/products">
                    {t("header.shop")}
                  </Link>
                </li>
                <li>
                  <Link className={pathname === "/about-us" ? "active_footer" : ""} to="/about-us">
                    {t("header.about_us")}
                  </Link>
                </li>
                <li>
                  <Link className={pathname === "/news" ? "active_footer" : ""} to="/news">
                    {t("header.news")}
                  </Link>
                </li>
                <li>
                  <Link className={pathname === "/faq" ? "active_footer" : ""} to="/faq">
                    {t("header.faq")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block_contacts">
              <h3>{t("footer.contacts")}</h3>
              <ul>
                <li>
                  <span>{t("footer.phone")}</span>
                  <a href="#">+996 (550) 34 56 77</a>
                </li>
                <li>
                  <span>{t("footer.email")}</span>
                  <a href="#">example@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="block_social">
              <h3>{t("footer.social_media")}</h3>
              <div className="social-body">
                <ul>
                  <li>
                    <div>
                      <img src={LogoWhatsapp} alt="WhatsApp" />
                    </div>
                    <a href="">{t("footer.whatsapp")}</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoTelegram} alt="Telegram" />
                    </div>
                    <a href="#">{t("footer.telegram")}</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoInsta} alt="Instagram" />
                    </div>
                    <a href="#">{t("footer.instagram")}</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <img src={Logofacebook} alt="facebook" />
                    </div>
                    <a href="#">{t("footer.facebook")}</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoYoutube} alt="Youtube" />
                    </div>
                    <a href="#">{t("footer.youtube")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-block">
            <span>© 2025 {t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
