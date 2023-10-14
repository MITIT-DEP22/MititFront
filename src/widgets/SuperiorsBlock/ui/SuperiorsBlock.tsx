import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {CompositionOfSuperiors} from "../../CompositionOfSuperiors";
import {superiors} from "shared/enums/Data";

export const SuperiorsBlock = () => {
    return (
        <>
            <SectionTitle margin={"2% 0 "} title={"Керівний склад"}/>
            <CompositionOfSuperiors superiors={superiors}/>
        </>
    );
};
