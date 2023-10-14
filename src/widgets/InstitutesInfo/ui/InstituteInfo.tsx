import React from 'react';
import InfoCard from "./InfoCard/InfoCard";
import css from "./InstituteInfo.module.scss"
import {InstituteInfoCards} from "entities/institute-info/api/InstituteInfoApi";
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";


export const InstituteInfo = () => {
    return (
        <>
            <SectionTitle margin={"25px 0"} title={"Інститут"}/>
            <div className={css.container}>
                {InstituteInfoCards.map(item => (
                    <InfoCard info={item}/>
                ))}
            </div>
        </>
    );
};
