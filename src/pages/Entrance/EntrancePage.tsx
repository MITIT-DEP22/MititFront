import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {EntranceBlock} from "widgets/EntranceBlock";

 const EntrancePage = () => {
    return (
        <>
            <PageHead title={"Вступникам"} imgId={148}/>
            <EntranceBlock/>
        </>
    );
};

export default EntrancePage