import React, {FC} from 'react';
import {TextBlock} from "entities/text-block";
import css from "./TextBlockComponent.module.scss"

interface TextBlockComponentProps {
    textBlock: TextBlock
}

const TextBlockComponent: FC<TextBlockComponentProps> = ({textBlock}) => {
    return (
        <div className={css.container}>
            <p className={css.title}>{textBlock.title}</p>

            {textBlock.content?.map(item => (
                <p className={css.textContent}>{item}</p>
            ))}

            {textBlock.lists?.map(list => (
                <>
                    <p className={css.listTitle}>{list.title}</p>
                    <ul className={css.list}>
                        {list.items.map(i => (
                            <li className={css.listItem}>{i}</li>
                        ))}
                    </ul>
                </>
            ))}
            {textBlock.images &&
                <div className={css.imagesContainer}>
                    {textBlock.images?.map(img => (
                        <img className={css.img} src={img?.href} alt=""/>
                    ))}
                </div>
            }
        </div>
    );
};

export default TextBlockComponent;