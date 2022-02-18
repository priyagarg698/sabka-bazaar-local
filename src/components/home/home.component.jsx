import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner.component";
import CategoryCard from "../../components/categoryCard/categoryCard.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { getData } from "../../uitls/common.utils";
import "./home.styles.scss";

const Home = () => {
  const [bannerData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const banners = await getData("http://localhost:5000/banners")
        setBannerData(banners);
        const categories = await getData("http://localhost:5000/categories")
        setCategoryData(categories);
        setIsLoading(false)
      } catch (error) {
        console.log("error", error.message);
      }
    };

    fetchData();
  }, []);
  return (

    <>
      {isLoading ? <WithSpinner></WithSpinner> :(
          <section>
            <Banner list={bannerData}></Banner>
            <CategoryCard categoryData={categoryData}></CategoryCard>

          </section>
      )}
    </>
  );
};
export default Home;
