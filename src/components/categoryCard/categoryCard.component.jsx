import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./categoryCard.styles.scss";
import { withRouter } from "react-router-dom";

const CategoryCard = ({ categoryData, history, match }) => {
  const category = categoryData.map((category) =>
    category.enabled ? (
      <div className="category" key={category.key}>
        <div className="category_image">
          <img src={category.imageUrl} alt={category.name} />
        </div>

        <div className="category_container">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          <CustomButton
            onClick={() => history.push(`${match.url}PLP/${category.id}`)}
          >
            {category.name}
          </CustomButton>
        </div>
      </div>
    ) : null
  );
  return <div className="category_section">{category}</div>;
};

export default withRouter(CategoryCard);
