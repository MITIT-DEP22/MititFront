import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {SuperiorsBlock} from "widgets/SuperiorsBlock";


 const SuperiorsPage = () => {
    return (
        <>
            <PageHead title={"Керівний склад"} imgId={151}/>
            <SuperiorsBlock/>
        </>
    );
};

export default SuperiorsPage
