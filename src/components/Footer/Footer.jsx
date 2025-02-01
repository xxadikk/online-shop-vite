import { Link, useLocation } from "react-router-dom";
import logo from "../helpers/const";
import "./Footer.css";
import LogoTelegram from "../assets/telegramIcon.svg";
import Logofacebook from "../assets/facebookIcon.svg";
import LogoInsta from "../assets/instaIcon.svg";
import LogoWhatsapp from "../assets/whatsappIcon.svg";
import LogoYoutube from "../assets/youtubeIcon.svg";

const Footer = () => {
  const { pathname } = useLocation();
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="block_menu">
              <h3>Pages</h3>
              <ul>
                <li>
                  <Link
                    className={pathname === "/" ? "active_footer" : ""}
                    to="/"
                  >
                    Main
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname === "/products" ? "active_footer" : ""}
                    to="/products"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname === "/about-us" ? "active_footer" : ""}
                    to="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname === "/news" ? "active_footer" : ""}
                    to="/news"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname === "/faq" ? "active_footer" : ""}
                    to="/faq"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block_contacts">
              <h3>Contacts</h3>
              <ul>
                <li>
                  <span>Phone number</span>
                  <a href="#">+996 (550) 34 56 77</a>
                </li>
                <li>
                  <span>E-Mail</span>
                  <a href="#">example@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="block_social">
              <h3>Social media</h3>
              <div className="social-body">
                <ul>
                  <li>
                    <div>
                      <img src={LogoWhatsapp} alt="WhatsApp" />{" "}
                    </div>
                    <a href="">WhatsApp</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoTelegram} alt="Telegram" />{" "}
                    </div>
                    <a href="#">Telegram</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoInsta} alt="Instagram" />{" "}
                    </div>
                    <a href="#">Инстаграм</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <img src={Logofacebook} alt="facebook" />{" "}
                    </div>
                    <a href="#">Фейсбук</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoYoutube} alt="Youtube" />{" "}
                    </div>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-block">
            <span>© 2024 Web Site All rights Recerved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
