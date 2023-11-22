import React, {FC} from 'react';
import {Unit} from "../../../../entities/old/unit";
import SectionTitle from "../../../../shared/ui/SectionTitle/SectionTitle";
import SuperiorCard from "../../../../shared/ui/TextBlockComponent/ui/CompositionOfSuperiors/ui/SuperiorCard/SuperiorCard";
import TextBlockComponent from "../../../../shared/ui/TextBlockComponent/TextBlockComponent";
import TextBlocks from "../../../../shared/ui/TextBlocks/TextBlocks";
import css from "./UnitBlock.module.scss"
import BlockContainer from "../../../../shared/ui/BlockContainer/BlockContainer";

interface UnitProps {
    unit: Unit;
}

export const UnitBlock: FC<UnitProps> = ({unit}) => {
    return (
        <BlockContainer>
            <SectionTitle title={unit.title}/>
            {unit.titleTextBlock &&
                <TextBlockComponent textBlock={unit.titleTextBlock}/>
            }
            {unit.superior &&
                <SuperiorCard positionRight={true} superior={unit?.superior}/>
            }
            <TextBlocks textBlocks={unit.textBlocks}/>
        </BlockContainer>
    );
};
