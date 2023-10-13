import React from 'react';
import css from "./EducationBlock.module.scss"
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {educations} from "shared/enums/Data";
import InfoAccordion from "shared/ui/InfoAccordion/InfoAccordion";

export const EducationBlock = () => {

    return (
        <div className={css.container}>
            <SectionTitle title={"Навчання"}/>
            {educations.map(education => (
                <InfoAccordion entrance={education}/>
            ))}
        </div>
    );
};
