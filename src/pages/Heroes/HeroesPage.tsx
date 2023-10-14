import React from 'react';
import {PageHead} from "widgets/PageHead";
import {HeroesBlock} from "widgets/HeroesBlock";

export const HeroesPage = () => {
    return (
        <>
            <PageHead title={"Герої не вмирають"} imgId={1}/>
            <HeroesBlock/>
        </>
    );
};
