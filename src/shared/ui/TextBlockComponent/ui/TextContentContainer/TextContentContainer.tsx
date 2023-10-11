import React, {FC} from 'react';
import css from "./TextContentContainer.module.scss";


interface TextContentProps {
    textContent: string[]
}

const TextContentContainer: FC<TextContentProps> = ({textContent}) => {
    return (
        <div className={css.contentContainer}>
            {textContent?.map(item => (
                <p className={css.textContent}>{item}</p>
            ))}
        </div>
    );
};

export default TextContentContainer;