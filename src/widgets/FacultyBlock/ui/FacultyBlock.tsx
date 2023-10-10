import React, {FC} from 'react';
import css from "./Faculty.module.scss"
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import {Faculty} from "entities/faculty";
import Description from "./Descrition/Description";


interface FacultyProps {
    faculty:Faculty;
}
export const FacultyBlock:FC<FacultyProps> = ({faculty}) => {
    return (
        <>
            <SectionTitle title={faculty.title}/>
            <Description value={faculty.description}/>
            <Superiors/>
        </>
    );
};
