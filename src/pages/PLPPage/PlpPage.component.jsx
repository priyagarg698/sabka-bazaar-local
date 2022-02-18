import React from "react";
import { Route } from "react-router-dom";
import ProductListing from "../../components/ProductListing/productListing.component";
import ProductPage from "../productPage/productPage.component";
import "./PlpPage.styles.scss";

const PlpPage = ({ match }) => {
  console.log("PLP PAGE", match);
  return (
    <>
      <Route exact path={`${match.path}`} component={ProductListing}></Route>
      <Route exact path={`${match.path}/:productId`} component={ProductPage}></Route>
      {/* <ProductListing></ProductListing> */}
    </>
  );
};
export default PlpPage;
