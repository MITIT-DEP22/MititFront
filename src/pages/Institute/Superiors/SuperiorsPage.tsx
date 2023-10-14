import React from 'react';
import {PageHead} from "widgets/PageHead";
import {SuperiorsBlock} from "widgets/SuperiorsBlock";


export const SuperiorsPage = () => {
    return (
        <>
            <PageHead title={"Керівний склад"} imgId={1}/>
            <SuperiorsBlock/>
        </>
    );
};
