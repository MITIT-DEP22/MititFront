import React, {FC} from 'react';
import {TextBlock} from "entities/text-block";
import css from "./TextBlockComponent.module.scss"
import Title from "./ui/Title/Title";
import TextContentContainer from "./ui/TextContentContainer/TextContentContainer";
import UListsContainer from "./ui/uListsContainer/uListsContainer";
import ImagesContainer from "./ui/ImagesContainer/ImagesContainer";
import TablesContainer from "./ui/TablesContainer/TablesContainer";
import OListsContainer from "./ui/oListsContainer/oListsContainer";

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

            {textBlock.uLists &&
                <UListsContainer lists={textBlock.uLists}/>
            }
            {textBlock.oLists &&
                <OListsContainer lists={textBlock.oLists}/>
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