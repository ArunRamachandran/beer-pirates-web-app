import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    // Initialise state
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, updateSelectedCategory] = useState(null);

    //fetch data
    useEffect(() => {
        axios
            .get("./BeerData.json")
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
                console.log("Beer data: ", response.data);
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <StateContext.Provider value={{ data, isLoading, selectedCategory, updateSelectedCategory }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);