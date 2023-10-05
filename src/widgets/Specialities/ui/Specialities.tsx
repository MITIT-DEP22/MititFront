import React from 'react';
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import css from "./Specialities.module.scss"
import SpecialityCard from "./SpecialityCard/SpecialityCard";

export const Specialities = () => {
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
