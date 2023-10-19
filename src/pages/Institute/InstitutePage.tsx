import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {InstituteBlock} from "widgets/InstituteBlock";


 const InstitutePage = () => {
    return (
        <>
            <PageHead  title={"Інститут"} imgId={16292}/>
            <InstituteBlock/>
        </>
    );
};
export default InstitutePage
