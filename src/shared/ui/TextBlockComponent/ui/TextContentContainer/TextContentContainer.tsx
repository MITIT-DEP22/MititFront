import React, {FC} from 'react';
import css from "./TextContentContainer.module.scss";
import HTMLReactParser from "html-react-parser";


interface TextContentProps {
    textContent: string[]
}

const TextContentContainer: FC<TextContentProps> = ({textContent}) => {
    return (
        <div className={css.contentContainer}>
            {textContent?.map(item => (
                <p className={css.textContent}>{HTMLReactParser(item)}</p>
            ))}
        </div>
    );
};

export default TextContentContainer;