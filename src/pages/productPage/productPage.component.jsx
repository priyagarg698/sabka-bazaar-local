import React from "react";
import './productPage.styles.scss';
import ProductCard from "../../components/ProductCard/product-card.component";

const ProductPage = ({match}) => {
    console.log("qroduct Page",match.params.productId)
    return(
        <div>Hello</div>
    )
}

export default ProductPage;
