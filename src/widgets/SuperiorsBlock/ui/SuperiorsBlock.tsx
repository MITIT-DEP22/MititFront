import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {CompositionOfSuperiors} from "../../CompositionOfSuperiors";
import {superiors} from "shared/enums/Data";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";

export const SuperiorsBlock = () => {
    return (
        <BlockContainer>
            <SectionTitle title={"Керівний склад"}/>
            <CompositionOfSuperiors superiors={superiors}/>
        </BlockContainer>
    );
};
