import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {InstituteBlock} from "widgets/InstituteBlock";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";


 const InstitutePage = () => {
    return (
        <>
            <PageHead title={"Інститут"} imgId={1}/>
            <InstituteBlock/>
        </>
    );
};
export default InstitutePage
