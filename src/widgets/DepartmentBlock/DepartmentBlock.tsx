import React, {FC} from 'react';
import {Department} from "entities/department";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import TextBlocks from "../../shared/ui/TextBlocks/TextBlocks";
import TextBlockComponent from "shared/ui/TextBlockComponent/TextBlockComponent";
import SuperiorCard from "shared/ui/SuperiorCard/SuperiorCard";
import css from "./DepartmentBlock.module.scss"

interface DepartmentProps {
    department: Department;
}

const DepartmentBlock: FC<DepartmentProps> = ({department}) => {
    return (
        <div className={css.container}>
            <SectionTitle title={department?.title}/>
            {department?.titleTextBlock &&
                <TextBlockComponent textBlock={department?.titleTextBlock}/>
            }
            {department?.superior &&
                <SuperiorCard positionRight={true} superior={department?.superior}/>
            }
            <TextBlocks textBlocks={department?.textBlocks}/>
        </div>
    );
};

export default DepartmentBlock;