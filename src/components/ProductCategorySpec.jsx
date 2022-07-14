import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { CustomButton } from "./CustomButton";

const calculateAveragePrice = (beerData) => {
    let totalPrice = 0;
    beerData.forEach(data => {
        totalPrice += parseInt(data.product_price);
    });
    return totalPrice / beerData.length; 
}

export const ProductCategorySpec = ({ categoryName, categoryData }) => {

    const navigate = useNavigate();
    const { updateSelectedCategory } = useStateContext();
  
    const handleCategorySelection = () => { 
        updateSelectedCategory(categoryName);
        navigate('/catalogue');
    }

    return (
        <div className="product-category-spec">
            <div className="category-desc">
                <p className="category-name">{categoryName}</p>
                <div>
                    <p className="category-avg-price">Avg. price: {calculateAveragePrice(categoryData)}</p>
                    <p className="category-total-count">Total craft beers: {categoryData.length}</p>
                </div>
                <div className="category-actions">
                    <CustomButton text="View products" variant="primary" callback={handleCategorySelection}/>
                </div>
            </div>
            <img src={"./images/beer-category-img.jpeg"} />
        </div>
    )
}