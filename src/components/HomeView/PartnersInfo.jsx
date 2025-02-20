import udemy_logo from "../assets/PartnersLogo/udemy_logo.png";
import coursera_logo from "../assets/PartnersLogo/coursera_logo.png";
import khan_academy_logo from "../assets/PartnersLogo/khan_academy_logo.png";
import udacity_logo from "../assets/PartnersLogo/udacity_logo.png";
import kadenze_logo from "../assets/PartnersLogo/kadenze_logo.png";

const PartnersInfo = () => {
  return (
    <div className="partnersInfo">
      <div className="partnersInfo__body">
        <div className="partnersInfo__title">
          <h1>OUR PARTNERS</h1>
          <p>
            Discover Our Complete Collection of Organic and Eco-Friendly
            Products for Every Need.
          </p>
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
