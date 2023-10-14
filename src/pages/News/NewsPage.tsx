import React from 'react';
import {PageHead} from "../../widgets/PageHead";
import {NewsBlock} from "../../widgets/NewsBlock";

export const NewsPage = () => {
    return (
        <>
            <PageHead title={"Новини"} imgId={1}/>
            <NewsBlock/>
        </>
    );
};
