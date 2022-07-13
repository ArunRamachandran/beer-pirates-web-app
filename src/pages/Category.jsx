/* General Category page to display the beer categories */
import React from "react";
import { BeerPiratesLandingPage } from "./BeerPiratesLandingPage";
import { useStateContext } from "../contexts/ContextProvider";
import { ProductCategorySpec } from "../components/ProductCategorySpec";
import '../stylesheets/pages/category.css';

export const Category = () => {
    const { data } = useStateContext();
    const brewingCategories = Object.keys(data);

    return (
        <div>
            <BeerPiratesLandingPage/>
            <div className="category-page">
                <h2 className="category-title">Our craft beer categories</h2>
                <div className="category-details-wrapper">
                    { brewingCategories && brewingCategories.length && 
                        brewingCategories.map((category) => (
                            <ProductCategorySpec categoryName={category} categoryData={data[category]} />
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}
