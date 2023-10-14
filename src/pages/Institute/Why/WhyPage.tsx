import React from 'react';
import {PageHead} from "widgets/PageHead";
import {WhyPageBlock} from "widgets/WhyPageBlock";

export const WhyPage = () => {
    return (
        <>
            <PageHead title={"Чому віті?"} imgId={1}/>
            <WhyPageBlock/>
        </>
    );
};
