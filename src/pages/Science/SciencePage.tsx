import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {ScienceBlock} from "widgets/ScienceBlock";

 const SciencePage = () => {
    return (
        <>
            <PageHead title={"наука"} imgId={154}/>
            <ScienceBlock/>
        </>
    );
};

export default SciencePage
