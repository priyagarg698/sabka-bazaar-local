import React from "react";

import "./side-bar.styles.scss";

const SideBar = ({ categoryData, ...props }) => {
  return (
    <div className="category__container">
      <ul className="category__list">
        {categoryData.map((category) =>
          category.enabled ? (
            <li
              key={category.id}
              className={(category.id === props.id) ? "active" : null}
              onClick={() => props.handleCategoryChange(category.id)}
            >
              {category.name}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default SideBar;
