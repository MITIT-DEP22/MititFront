import React from 'react';
import {PageHead} from "../../widgets/PageHead";
import {EntranceBlock} from "../../widgets/EntranceBlock";

const EntrancePage = () => {
    return (
        <>
            <PageHead title={"Вступникам"} imgId={1}/>
            <EntranceBlock/>
        </>
    );
};

export default EntrancePage;