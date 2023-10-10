import React, {FC} from 'react';
import {TextBlock} from "../../../entities/text-block";

interface TextBlockComponentProps {
    textBlock: TextBlock
}

const TextBlockComponent: FC<TextBlockComponentProps> = ({textBlock}) => {
    return (
        <div>
            <p>{textBlock.title}</p>
            {textBlock.content?.map(item => (
                <p>{item}</p>
            ))}
            {textBlock.lists?.map(list => (
                <>
                    <p>{list.title}</p>
                    <ul>
                        {list.items.map(i => (
                            <li>{i}</li>
                        ))}
                    </ul>
                </>
            ))}
            <div>
                {textBlock.images?.map(img=>(
                    <img src={img.href} alt=""/>
                ))}
            </div>

        </div>
    );
};

export default TextBlockComponent;