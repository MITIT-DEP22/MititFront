import React, {FC} from 'react';
import {Department} from "../../../entities/old/department";
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import TextBlocks from "../../../shared/ui/TextBlocks/TextBlocks";
import TextBlockComponent from "../../../shared/ui/TextBlockComponent/TextBlockComponent";
import SuperiorCard from "../../../shared/ui/TextBlockComponent/ui/CompositionOfSuperiors/ui/SuperiorCard/SuperiorCard";
import BlockContainer from "../../../shared/ui/BlockContainer/BlockContainer";
interface DepartmentProps {
    department: Department;
}

const DepartmentBlock: FC<DepartmentProps> = ({department}) => {
    return (
        <BlockContainer>
            <SectionTitle title={department?.title}/>
            {department?.titleTextBlock &&
                <TextBlockComponent textBlock={department?.titleTextBlock}/>
            }
            {department?.superior &&
                <SuperiorCard positionRight={true} superior={department?.superior}/>
            }
            <TextBlocks textBlocks={department?.textBlocks}/>
        </BlockContainer>
    );
};

export default DepartmentBlock;