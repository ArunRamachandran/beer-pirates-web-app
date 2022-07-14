import React, { useEffect, useState } from "react";

export const useTranslateBeerRecommedations = (beerRecommendations) => {

    const [translatedData, setTranslatedData] = useState({});

    useEffect(() => {
        let dataModel = {};
        if (beerRecommendations && Object.keys(beerRecommendations).length) {
            const data = beerRecommendations.beerRecommendations;
            data.forEach((beerData) => {
                if (Object.keys(dataModel).includes(beerData.category)) {
                    dataModel[beerData.category].push(beerData);
                } else {
                    dataModel[beerData.category] = [beerData];
                }
            })

            setTranslatedData(dataModel);
        };
    }, [beerRecommendations])

    return {
        translatedData
    }
}