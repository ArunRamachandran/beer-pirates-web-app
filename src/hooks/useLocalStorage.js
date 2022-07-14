import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";

const getStorageValue = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setStorageValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const useLocalStorage = () => {

    const { translatedData, selectedCategory } = useStateContext();
    const [ category, setCategory ] = useState(() => {
        return selectedCategory ? selectedCategory : getStorageValue('selectedCategory');
    })
    const [ data, setData ] = useState(() => {
        return Object.keys(translatedData).length ? translatedData : getStorageValue('translatedData');
    })

    useEffect(() => {
        // storing input data to local storage
        setStorageValue('translatedData', translatedData);
        setStorageValue('selectedCategory', selectedCategory);
    }, [])

    return {
        category,
        data
    }
}