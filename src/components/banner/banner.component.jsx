import React from "react";
import "./banner.styles.scss";
import Carousel from 'nuka-carousel'

const Banner = ({ list }) => {
  return (
    <div className="banner-container">
      <Carousel
      >
        {
          list.map((banner) => (
            <div key={banner.id} className="carousel_img">
              <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
            </div>
          ))
        }
      </Carousel>
    </div>
  );
};

export default Banner;
