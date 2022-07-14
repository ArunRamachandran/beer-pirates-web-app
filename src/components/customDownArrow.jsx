import React from "react";
import "../stylesheets/components/custom-down-arrow.css";

export const CustomDownArrow = ({ handlePageScroll }) => (
    <div class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="text" onClick={handlePageScroll}>Scroll down</span>
    </div>
)