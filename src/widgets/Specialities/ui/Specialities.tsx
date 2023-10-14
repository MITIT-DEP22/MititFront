import React from 'react';
import css from "./Specialities.module.scss"
import SpecialityCard from "./SpecialityCard/SpecialityCard";
import {specialities} from "shared/enums/Data";


export const Specialities = () => {
    return (
        <div className={css.container}>
            {specialities.map(item=>(
                <SpecialityCard speciality={item}/>
            ))}
        </div>
    );
};
