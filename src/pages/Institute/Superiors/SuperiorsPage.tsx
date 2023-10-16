import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {SuperiorsBlock} from "widgets/SuperiorsBlock";


 const SuperiorsPage = () => {
    return (
        <>
            <PageHead title={"Керівний склад"} imgId={1}/>
            <SuperiorsBlock/>
        </>
    );
};

export default SuperiorsPage
