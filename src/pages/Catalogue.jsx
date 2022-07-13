/* Specific Catalogue  to display each individual beer data */
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import '../stylesheets/pages/catalogue.css';

export const Catalogue = () => {

    const { data, selectedCategory } = useStateContext();
    const categoryData = data[selectedCategory];

    console.log("catalogue : ", categoryData);

    return (
        <div className="catalogue-container">
            <div className="catalogue-action-panel">
                <p>Back</p>
                <h2>${selectedCategory}</h2>
            </div>
            <div className="catalogue-items">
                {categoryData.map((beerData) => (
                    <div className="beer-data-item-wrapper" key={beerData.id}>
                        <img src={`./images/beer-catalogue-index-${beerData.product_image_index}.jpeg`} />
                        <div className="beer-desc">
                            <p>{beerData.name}</p>
                            <p>{beerData.product_desc}</p>
                            <p>Price: ${beerData.product_price} ${beerData.product_currency}</p>
                        </div>
                    </div>
                ))}
            </div>
            Catalogue
        </div>
    )
}
