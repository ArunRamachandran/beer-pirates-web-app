import React from "react";
import { CustomDownArrow } from "../components/customDownArrow";

import "../stylesheets/pages/beer-pirates-landing-page.css";

export const BeerPiratesLandingPage = () => {

    return (
        <div className="landing-page-container">
            <h2>We brew the best craft beers</h2>
            <img src={"./images/beer-pirates-home.png"} alt="landing-page-image" />
            <CustomDownArrow />
        </div>
    )
}