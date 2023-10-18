import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {HistoricalReference} from "widgets/old/HistoricalReference"


 const HistoricalPage = () => {
    return (
        <>
            <PageHead title={"Історична довідка"} imgId={142}/>
            <HistoricalReference/>
        </>
    );
};
export default HistoricalPage