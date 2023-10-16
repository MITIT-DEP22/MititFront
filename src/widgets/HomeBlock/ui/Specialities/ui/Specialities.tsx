import React from 'react';
import css from "./Specialities.module.scss"
import SpecialityCard from "./SpecialityCard/SpecialityCard";
import specialityStore from "../../../../../entities/speciality/store/speciality-store";
import LoadingSpinner from "../../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import {observer} from "mobx-react";

export const Specialities = observer(() => {
    const {specialities, isLoading} = specialityStore;
    if (isLoading) {
        return <LoadingSpinner padding={"5vh 5vw"}/>;
    } else {
        return (
            <div className={css.container}>
                {specialities.map(item => (
                    <SpecialityCard speciality={item}/>
                ))}
            </div>
        );
    }
});
