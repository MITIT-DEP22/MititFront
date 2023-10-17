import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {WhyPageBlock} from "widgets/WhyPageBlock";

 const WhyPage = () => {
    return (
        <>
            <PageHead title={"Чому віті?"} imgId={136}/>
            <WhyPageBlock/>
        </>
    );
};

export default WhyPage
