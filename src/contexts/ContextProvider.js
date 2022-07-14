import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import { useTranslateBeerRecommedations } from "../hooks/useTranslateBeerRecommendations";

const BEER_RECOMMENDATIONS_QUERY = gql`
{
    beerRecommendations {
      id
      category
      name
      brand
      product_image_index
      brewery_type
      product_tags
      product_price
      product_currency
      product_desc
      country
      phone
      updated_at
      created_at
    }
  }
`;

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    // Initialise state
    const [beerData, setBeerData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, updateSelectedCategory] = useState(null);

    const { data, loading, error } = useQuery(BEER_RECOMMENDATIONS_QUERY);    
    const { translatedData  } = useTranslateBeerRecommedations(data);

    useEffect(() => {
        setBeerData(translatedData);
        setIsLoading(loading);
    }, [data])

    return (
        <StateContext.Provider value={{ beerData, translatedData, isLoading, selectedCategory, updateSelectedCategory }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);