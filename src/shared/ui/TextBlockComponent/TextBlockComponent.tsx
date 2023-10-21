import React, {FC} from 'react';
import {TextBlock} from "entities/text-block";
import css from "./TextBlockComponent.module.scss"
import TextContentContainer from "./ui/TextContentContainer/TextContentContainer";
import UListsContainer from "./ui/uListsContainer/uListsContainer";
import ImagesContainer from "./ui/ImagesContainer/ImagesContainer";
import TablesContainer from "./ui/TablesContainer/TablesContainer";
import OListsContainer from "./ui/oListsContainer/oListsContainer";
import ImageTextRowsContainer from "./ui/ImageTextRow/ImageTextRowsContainer";
import {CompositionOfSuperiors} from "./ui/CompositionOfSuperiors";
import SectionTitle from "../SectionTitle/SectionTitle";

interface TextBlockComponentProps {
    textBlock: TextBlock
}

const TextBlockComponent: FC<TextBlockComponentProps> = ({textBlock}) => {
    return (
        <div className={css.container}>
            {textBlock.title &&
                <SectionTitle  title={textBlock.title}/>
            }

            {textBlock.textContent &&
                <TextContentContainer  id={textBlock.id} textContent={textBlock.textContent}/>
            }

            {textBlock.uLists &&
                <UListsContainer  id={textBlock.id} lists={textBlock.uLists}/>
            }
            {textBlock.oLists &&
                <OListsContainer  id={textBlock.id} lists={textBlock.oLists}/>
            }

            {textBlock.images &&
                <ImagesContainer  id={textBlock.id} images={textBlock.images}/>
            }

            {textBlock.tables &&
                <TablesContainer  id={textBlock.id} tables={textBlock.tables}/>
            }

            {textBlock.imageTextRows &&
                <ImageTextRowsContainer  id={textBlock.id} imageTextRows={textBlock.imageTextRows}/>
            }

            {textBlock.superiors &&
                <CompositionOfSuperiors id={textBlock.id} superiors={textBlock.superiors}/>
            }

        </div>
    )
}
export default TextBlockComponent;