import React from "react";
import "../stylesheets/components/custom-button.css";

export const CustomButton = ({ text, variant, callback }) => {

    return (
        <div className={`product-custom-btn ${variant === "primary" ? "filled" : "empty"}`} onClick={callback}>
            {text}
        </div>
    )
}