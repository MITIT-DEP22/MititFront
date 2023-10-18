import React, {FC} from 'react';
import css from "./Faculty.module.scss"
import SectionTitle from "../../../../shared/ui/SectionTitle/SectionTitle";
import {Faculty} from "../../../../entities/faculty";
import Description from "./Descrition/Description";
import Branches from "./Branches/Branches";
import Specialities from "./Specialities/Specialities";
import Departments from "./Departments/Departments";
import {CompositionOfSuperiors} from "../../../../shared/ui/TextBlockComponent/ui/CompositionOfSuperiors";
import TextBlocks from "../../../../shared/ui/TextBlocks/TextBlocks";
import BlockContainer from "../../../../shared/ui/BlockContainer/BlockContainer";


interface FacultyProps {
    faculty: Faculty;
}

export const FacultyBlock: FC<FacultyProps> = ({faculty}) => {
    return (
        <BlockContainer>
            <SectionTitle title={faculty.title}/>
            <Description value={faculty.description}/>

            <div className={css.superiorContainer}>
                <CompositionOfSuperiors superiors={faculty.superiors}/>
            </div>

            <Branches branches={faculty.branches}/>
            <Specialities specialities={faculty.specialties}/>
            <Departments departments={faculty.departments}/>
            {faculty.textBlocks &&
                <TextBlocks textBlocks={faculty.textBlocks}/>
            }
        </BlockContainer>
    );
};
