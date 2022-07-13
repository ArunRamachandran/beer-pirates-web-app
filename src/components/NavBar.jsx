import React from 'react';
import "../stylesheets/components/nav-bar.css";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    
    const navigate = useNavigate();

    const handleRoute = () => {
        navigate('/category');
    }

    return (
        <header className="nav-bar-container">
            <h2 onClick={handleRoute}>Beer Pirates Inc.</h2>
        </header>
    );
}