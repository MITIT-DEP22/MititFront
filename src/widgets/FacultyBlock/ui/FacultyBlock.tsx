import React, {FC} from 'react';
import css from "./Faculty.module.scss"
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import {Faculty} from "entities/faculty";
import Description from "./Descrition/Description";
import Branches from "./Branches/Branches";
import Specialities from "./Specialities/Specialities";
import Departments from "./Departments/Departments";
import {CompositionOfSuperiors} from "../../CompositionOfSuperiors";
import TextBlocks from "./TextBlocks/TextBlocks";


interface FacultyProps {
    faculty: Faculty;
}

export const FacultyBlock: FC<FacultyProps> = ({faculty}) => {
    return (
        <>
            <SectionTitle title={faculty.title}/>
            <Description value={faculty.description}/>
            <CompositionOfSuperiors superiors={faculty.superiors}/>
            <Branches branches={faculty.branches}/>
            <Specialities specialities={faculty.specialities}/>
            <Departments departments={faculty.departments}/>
            <TextBlocks textBlocks={faculty.textBlocks}/>
        </>
    );
};