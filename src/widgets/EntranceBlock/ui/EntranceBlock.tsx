import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {entrances} from "shared/enums/Data";
import InfoAccordion from "shared/ui/InfoAccordion/InfoAccordion";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";

export const EntranceBlock = () => {

    return (
        <BlockContainer>
            <SectionTitle title={"Вступникам"}/>
            {entrances.map(entrance => (
                    <InfoAccordion entrance={entrance}/>
            ))}
        </BlockContainer>
    );
};
