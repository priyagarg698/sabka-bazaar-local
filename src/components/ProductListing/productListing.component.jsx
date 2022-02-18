import React, { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import DropDown from "../dropdown/dropdown.component";
import ProductCard from "../ProductCard/product-card.component";
import SideBar from "../sideBar/side-bar.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import { getData } from "../../uitls/common.utils";
import "./productListing.styles.scss";

const ProductListing = ({ history }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCatergoryId, setSelectedCatergoryId] = useState();
  const [userSelectedProducts, setUserSelectedProducts] = useState([]);
  let { collectionId } = useParams();
  console.log("PPPPPPPPPPPPP", collectionId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getData("http://localhost:5000/categories");
        setCategoryData(categories);
        const productsData = await getData("http://localhost:5000/products");
        setProductData(productsData);

        if (selectedCatergoryId) {
          const filterData = productData.filter(
            (product) => product.category === selectedCatergoryId
          );
          setUserSelectedProducts(filterData);
          console.log("selected Category ID", selectedCatergoryId);
        } else {
          setUserSelectedProducts(productsData);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("error", error.message);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (id) => {
    if (selectedCatergoryId === id) {
      return setUserSelectedProducts(productData);
    } else {
      const filterData = productData.filter(
        (product) => product.category === id
      );
      setUserSelectedProducts(filterData);
      setSelectedCatergoryId(id);
    }
  };

  const handleDropDownChange = (e) => {
    const id = e.target.value;
    if (collectionId === id) {
      return setUserSelectedProducts(productData);
    } else {
      const filterData = productData.filter(
        (product) => product.category === id
      );
      setUserSelectedProducts(filterData);
      collectionId = id;
    }
  };
  return (
    <div>
      {isLoading ? (
        <WithSpinner></WithSpinner>
      ) : (
        <div className="product_listing">
          <SideBar
            categoryData={categoryData}
            id={selectedCatergoryId}
            name="select"
            handleCategoryChange={handleCategoryChange}
          ></SideBar>
          <div className="category_dropdown">
            <DropDown
              categoryData={categoryData}
              handleDropDownChange={handleDropDownChange}
            ></DropDown>
          </div>
          <div className="category__description">
            {userSelectedProducts.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
