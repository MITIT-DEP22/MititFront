import React, {FC} from 'react';
import {TextBlock} from "entities/text-block";
import TextBlockComponent from "shared/ui/TextBlockComponent/TextBlockComponent";
import css from "./TextBlocks.module.scss"
interface TextBlocksProps {
    textBlocks?: TextBlock[];
}

const TextBlocks: FC<TextBlocksProps> = ({textBlocks}) => {
    return (
        <div className={css.container}>
            {textBlocks?.map(item => (
                <TextBlockComponent textBlock={item}/>
            ))}
        </div>
    );
};

export default TextBlocks;