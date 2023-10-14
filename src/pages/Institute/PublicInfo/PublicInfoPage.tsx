import React from 'react';
import {PageHead} from "widgets/PageHead";
import {PublicInfoBlock} from "widgets/PublicInfoBlock";

const PublicInfoPage = () => {
    return (
        <>
            <PageHead title={"Публічна інформація"}  imgId={1}/>
            <PublicInfoBlock/>
        </>
    );
};

export default PublicInfoPage;