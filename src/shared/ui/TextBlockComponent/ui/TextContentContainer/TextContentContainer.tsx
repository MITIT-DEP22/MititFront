import React, {FC} from 'react';
import css from "./TextContentContainer.module.scss";
import HTMLReactParser from "html-react-parser";


interface TextContentProps {
    textContent: string[]
    id?:number;
}

const TextContentContainer: FC<TextContentProps> = ({textContent, id}) => {
    return (
        <div className={css.contentContainer}>
            {textContent?.map((item,index) => (
                <div key={`text-content_${index}_${id}`} className={css.textContent}>{HTMLReactParser(item)}</div>
            ))}
        </div>
    );
};

export default TextContentContainer;