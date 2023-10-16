import React from 'react';
import {PageHead} from "../../shared/ui/PageHead";
import {NewsBlock} from "../../widgets/NewsBlock";

 const NewsPage = () => {
    return (
        <>
            <PageHead title={"Новини"} imgId={1}/>
            <NewsBlock/>
        </>
    );
};

export default NewsPage
