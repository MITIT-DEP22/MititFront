import React, {FC} from 'react';
import {TextBlock} from "entities/text-block";
import TextBlockComponent from "../TextBlockComponent/TextBlockComponent";
import css from "./TextBlocks.module.scss"
import {observer} from "mobx-react";

interface TextBlocksProps {
    textBlocks?: TextBlock[];
}

const TextBlocks: FC<TextBlocksProps> = ({textBlocks}) => {

    return (
        <div className={css.container}>
            {textBlocks?.map(item => (
                <TextBlockComponent key={`text-block_${item.id}`} textBlock={item}/>
            ))}
        </div>
    );
};

export default TextBlocks;