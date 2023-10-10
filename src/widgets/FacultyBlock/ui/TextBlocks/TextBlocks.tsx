import React, {FC} from 'react';
import {TextBlock} from "../../../../entities/text-block";
import TextBlockComponent from "../../../../shared/ui/TextBlockComponent/TextBlockComponent";

interface TextBlocksProps {
    textBlocks?: TextBlock[];
}

const TextBlocks: FC<TextBlocksProps> = ({textBlocks}) => {
    return (
        <div>
            {textBlocks?.map(item => (
                <TextBlockComponent textBlock={item}/>
            ))}
        </div>
    );
};

export default TextBlocks;