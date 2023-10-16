import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {educations} from "shared/enums/Data";
import InfoAccordion from "shared/ui/InfoAccordion/InfoAccordion";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";

export const EducationBlock = () => {

    return (
        <BlockContainer>
            <SectionTitle title={"Навчання"}/>
            {educations.map(education => (
                <InfoAccordion entrance={education}/>
            ))}
        </BlockContainer>
    );
};
