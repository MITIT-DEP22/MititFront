import React, {FC} from 'react';
import {TextBlock} from "entities/text-block";
import TextBlockComponent from "../TextBlockComponent/TextBlockComponent";
import css from "./TextBlocks.module.scss"

interface TextBlocksProps {
    textBlocks?: TextBlock[];
}

const TextBlocks: FC<TextBlocksProps> = ({textBlocks}) => {
    return (
        <div className={css.container}>
            {textBlocks?.map(item => (
                <TextBlockComponent key={`${item.title}_${item.id}_${item.textContent?.length}_${item.superiors?.length}`} textBlock={item}/>
            ))}
        </div>
    );
};

export default TextBlocks;