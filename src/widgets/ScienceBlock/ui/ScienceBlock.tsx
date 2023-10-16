import React from 'react';
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import {sciences} from "../../../shared/enums/Data";
import InfoAccordion from "../../../shared/ui/InfoAccordion/InfoAccordion";

export const ScienceBlock = () => {
    return (
        <BlockContainer>
            <SectionTitle title={"Наука"}/>
            {sciences.map(science => (
                <InfoAccordion entrance={science}/>
            ))}
        </BlockContainer>
    );
};
