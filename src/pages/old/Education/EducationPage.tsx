import React from 'react';
import {PageHead} from "../../../shared/ui/PageHead";
import {EducationBlock} from "../../../widgets/EducationBlock";

export const EducationPage = () => {
    return (
        <>
            <PageHead title={"Навчання"} imgId={149}/>
            <EducationBlock/>
        </>
    );
};

export default EducationPage
