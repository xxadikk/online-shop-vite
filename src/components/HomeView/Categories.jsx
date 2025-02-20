import CategoriesCard from "./CategoriesCard";
import driedFruits from "../assets/driedFruits.jpg";
import vegetablesAndFruits from "../assets/vegetablesAndFruits.png";
import meatAndEggs from "../assets/meetAndEgg.jpg";
import dairyProducts from "../assets/dairyProducts.jpg";
import cerealsAndLegumes from "../assets/cerealsAndLegumes.jpg";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories-body">
          <h1>Categories</h1>
          <div className="categories-cards">
            <div className="categories-cards">
              <div className="categories-card">
                <div className="categories-card__body">
                  <div className="image-container">
                    <img src={driedFruits} alt="" />
                    <div className="categories-card__title">Dried fruits</div>
                  </div>
                </div>
              </div>
              <div className="categories-card">
                <div className="categories-card__body">
                  <div className="image-container">
                    <img src={vegetablesAndFruits} alt="" />
                    <div className="categories-card__title">
                      Vegetables and Fruits
                    </div>
                  </div>
                </div>
              </div>
              <div className="categories-card">
                <div className="categories-card__body">
                  <div className="image-container">
                    <img src={meatAndEggs} alt="" />
                    <div className="categories-card__title">Meat and Eggs</div>
                  </div>
                </div>
              </div>
              <div className="categories-card">
                <div className="categories-card__body">
                  <div className="image-container">
                    <img src={dairyProducts} alt="" />
                    <div className="categories-card__title">Dairy Products</div>
                  </div>
                </div>
              </div>
              <div className="categories-card">
                <div className="categories-card__body">
                  <div className="image-container">
                    <img src={cerealsAndLegumes} alt="" />
                    <div className="categories-card__title">
                      Cereals and Legumes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
