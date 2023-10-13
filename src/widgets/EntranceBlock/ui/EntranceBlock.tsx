import React from 'react';
import css from "./EntranceBlock.module.scss"
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {entrances} from "shared/enums/Data";
import InfoAccordion from "shared/ui/InfoAccordion/InfoAccordion";

export const EntranceBlock = () => {

    return (
        <div className={css.container}>
            <SectionTitle title={"Вступникам"}/>
            {entrances.map(entrance => (
                    <InfoAccordion entrance={entrance}/>
            ))}
        </div>
    );
};
