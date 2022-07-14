/* General Category page to display the beer categories */
import React from "react";
import { useRef } from 'react';
import { BeerPiratesLandingPage } from "./BeerPiratesLandingPage";
import { useStateContext } from "../contexts/ContextProvider";
import { ProductCategorySpec } from "../components/ProductCategorySpec";
import '../stylesheets/pages/category.css';

export const Category = () => {
    const { translatedData } = useStateContext();
    const ref = useRef(null)

    if (!translatedData) {
        return null;
    }

    const brewingCategories = Object.keys(translatedData);

    const handlePageScroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div>
            <BeerPiratesLandingPage handlePageScroll={handlePageScroll}/>
            { brewingCategories && brewingCategories.length && <div className="category-page">
                <h2 className="category-title" ref={ref}>Our craft beer categories</h2>
                <div className="category-details-wrapper">
                    { brewingCategories && brewingCategories.length && 
                        brewingCategories.map((category) => (
                            <ProductCategorySpec categoryName={category} categoryData={translatedData[category]} />
                        )) 
                    }
                </div>
            </div> }
        </div>
    )
}
