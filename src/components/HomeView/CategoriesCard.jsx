import React from "react";

const CategoriesCard = ({ image, title }) => {
  return (
    <div className="categories-card">
      <div className="categories-card__body">
        <div className="image-container">
          <img src={image} alt={title} />
          <div className="categories-card__title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
