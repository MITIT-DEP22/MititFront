import React from 'react';
import {PageHead} from "widgets/PageHead";
import {ScienceBlock} from "widgets/ScienceBlock";

const SciencePage = () => {
    return (
        <>
            <PageHead title={"наука"} imgId={1}/>
            <ScienceBlock/>
        </>
    );
};

export default SciencePage;