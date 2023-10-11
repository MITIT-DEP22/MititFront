import React, {FC} from 'react';
import {TextBlock} from "entities/text-block";
import css from "./TextBlockComponent.module.scss"
import Title from "./ui/Title/Title";
import TextContentContainer from "./ui/TextContentContainer/TextContentContainer";
import ListsContainer from "./ui/ListsContainer/ListsContainer";
import ImagesContainer from "./ui/ImagesContainer/ImagesContainer";
import TablesContainer from "./ui/TablesContainer/TablesContainer";

interface TextBlockComponentProps {
    textBlock: TextBlock
}

const TextBlockComponent: FC<TextBlockComponentProps> = ({textBlock}) => {
    return (
        <div className={css.container}>
            {textBlock.title &&
                <Title title={textBlock.title}/>
            }

            {textBlock.textContent &&
                <TextContentContainer textContent={textBlock.textContent}/>
            }

            {textBlock.lists &&
                <ListsContainer lists={textBlock.lists}/>
            }

            {textBlock.images &&
                <ImagesContainer images={textBlock.images}/>
            }

            {textBlock.tables &&
                <TablesContainer tables={textBlock.tables}/>
            }
        </div>
    )
}
export default TextBlockComponent;