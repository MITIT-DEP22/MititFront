import React from 'react';
import {PageHead} from "../../../widgets/PageHead";
import {HistoricalReference} from "../../../widgets/HistoricalReference"
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";


 const HistoricalPage = () => {
    return (
        <>
            <PageHead title={"Історична довідка"} imgId={1}/>
            <HistoricalReference/>
        </>
    );
};
export default HistoricalPage