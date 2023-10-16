import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {HeroesBlock} from "widgets/HeroesBlock";

 const HeroesPage = () => {
    return (
        <>
            <PageHead title={"Герої не вмирають"} imgId={1}/>
            <HeroesBlock/>
        </>
    );
};
export default HeroesPage
