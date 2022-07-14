/* Specific Catalogue  to display each individual beer data */
import React, { useEffect } from "react";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../stylesheets/pages/catalogue.css';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Catalogue = () => {

    const ref = useRef(null);
    const navigate = useNavigate();
    const { data, category } = useLocalStorage();
    const categoryData = data[category];

    const handleNavigation = () => {
        navigate('/category');
    };

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }, []);

    return (
        <div className="catalogue-container" ref={ref}>
            <div className="catalogue-action-panel">
                <p className="cta-back-btn" onClick={handleNavigation}>back</p>
                <h2>All products from <span>{category}</span> category</h2>
            </div>
            <div className="catalogue-items">
                {categoryData.map((beerData) => (
                    <div className="beer-data-item-wrapper" key={beerData.id}>
                        <img src={`./images/beer-catalogue-index-${beerData.product_image_index}.jpeg`} />
                        <div className="item-desc">
                            <p className="item-name">{beerData.name}</p>
                            <p className="item-details">{beerData.product_desc}</p>
                            <p className="item-price">Price: <span>{beerData.product_price} {beerData.product_currency}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            Catalogue
        </div>
    )
}
