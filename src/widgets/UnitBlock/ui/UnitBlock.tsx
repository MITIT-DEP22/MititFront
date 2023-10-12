import React, {FC} from 'react';
import {Unit} from "entities/unit";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import SuperiorCard from "shared/ui/SuperiorCard/SuperiorCard";
import TextBlockComponent from "shared/ui/TextBlockComponent/TextBlockComponent";
import TextBlocks from "shared/ui/TextBlocks/TextBlocks";
import css from "./UnitBlock.module.scss"

interface UnitProps {
    unit: Unit;
}

export const UnitBlock: FC<UnitProps> = ({unit}) => {
    return (
        <div className={css.container}>
            <SectionTitle title={unit.title}/>
            {unit.titleTextBlock &&
                <TextBlockComponent textBlock={unit.titleTextBlock}/>
            }
            <SuperiorCard positionRight={true} superior={unit?.superior}/>
            <TextBlocks textBlocks={unit.textBlocks}/>
        </div>
    );
};
