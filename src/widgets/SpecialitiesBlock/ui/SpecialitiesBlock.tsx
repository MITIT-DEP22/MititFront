import React from 'react';
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import css from "./SpecialitiesBlock.module.scss"
import SpecialityCard from "./SpecialityCard/SpecialityCard";

export const SpecialitiesBlock = () => {
    return (
            <div  className={css.container}>
                <SpecialityCard/>
                <SpecialityCard/>
                <SpecialityCard/>
                <SpecialityCard/>
                <SpecialityCard/>
                <SpecialityCard/>
            </div>
    );
};
