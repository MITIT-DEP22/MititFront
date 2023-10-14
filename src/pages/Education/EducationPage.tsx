import React from 'react';
import {PageHead} from "widgets/PageHead";
import {EducationBlock} from "widgets/EducationBlock";

const EducationPage = () => {
    return (
        <>
            <PageHead title={"Навчання"} imgId={1}/>
            <EducationBlock/>
        </>
    );
};

export default EducationPage;