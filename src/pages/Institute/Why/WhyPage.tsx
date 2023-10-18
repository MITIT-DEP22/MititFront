import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {WhyPageBlock} from "widgets/old/WhyPageBlock";

 const WhyPage = () => {
    return (
        <>
            <PageHead title={"Чому віті?"} imgId={1}/>
            <WhyPageBlock/>
        </>
    );
};

export default WhyPage
