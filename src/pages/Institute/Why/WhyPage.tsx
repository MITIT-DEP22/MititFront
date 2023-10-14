import React from 'react';
import {PageHead} from "widgets/PageHead";
import {WhyPageBlock} from "widgets/WhyPageBlock";

 const WhyPage = () => {
    return (
        <>
            <PageHead title={"Чому віті?"} imgId={1}/>
            <WhyPageBlock/>
        </>
    );
};

export default WhyPage
