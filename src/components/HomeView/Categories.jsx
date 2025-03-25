import CategoriesCard from "./CategoriesCard";
import driedFruits from "../assets/driedFruits.jpg";
import vegetablesAndFruits from "../assets/vegetablesAndFruits.png";
import meatAndEggs from "../assets/meetAndEgg.jpg";
import dairyProducts from "../assets/dairyProducts.jpg";
import cerealsAndLegumes from "../assets/cerealsAndLegumes.jpg";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation(); // Инициализация перевода
  return (
    <div className="categories">
      <div className="container">
        <div className="categories-body">
          <h1>{t("home_page.categories_title")}</h1>
          <div className="categories-cards">
            <CategoriesCard image={driedFruits} title="Dried fruits" />
            <CategoriesCard image={vegetablesAndFruits} title="Vegetables and Fruits" />
            <CategoriesCard image={meatAndEggs} title="Meat and Eggs" />
            <CategoriesCard image={dairyProducts} title="Dairy Products" />
            <CategoriesCard image={cerealsAndLegumes} title="Cereals and Legumes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
