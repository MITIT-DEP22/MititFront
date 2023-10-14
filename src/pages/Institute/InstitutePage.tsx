import React from 'react';
import {PageHead} from "widgets/PageHead";
import {InstituteInfo} from "widgets/InstitutesInfo";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";


 const InstitutePage = () => {
    return (
        <>
            <PageHead title={"Інститут"} imgId={1}/>
            <InstituteInfo/>
        </>
    );
};
export default InstitutePage
