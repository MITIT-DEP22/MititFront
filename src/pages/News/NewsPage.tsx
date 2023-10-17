import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {NewsBlock} from "widgets/NewsBlock";
import {observer} from "mobx-react";

const NewsPage = observer(() => {
    return (
        <>
            <PageHead title={"Новини"} imgId={153}/>
            <NewsBlock/>
        </>
    );
});

export default NewsPage
