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
import FileElementComponent from "./ui/FileElement/FileElementComponent";

interface TextBlockComponentProps {
    textBlock: TextBlock
}

const TextBlockComponent: FC<TextBlockComponentProps> = ({textBlock}) => {
    return (
        <div className={css.container}>
            {textBlock.title &&
                <SectionTitle id={textBlock.id} title={textBlock.title}/>
            }

            {textBlock.textContent &&
                <TextContentContainer id={textBlock.id} textContent={textBlock.textContent}/>
            }

            {textBlock.uList &&
                <UListsContainer id={textBlock.id} list={textBlock.uList}/>
            }

            {textBlock.oList &&
                <OListsContainer id={textBlock.id} list={textBlock.oList}/>
            }

            {textBlock.images &&
                <ImagesContainer id={textBlock.id} images={textBlock.images}/>
            }

            {textBlock.table &&
                <TablesContainer id={textBlock.id} table={textBlock.table}/>
            }

            {textBlock.imageTextRow &&
                <ImageTextRowsContainer id={textBlock.id} imageTextRow={textBlock.imageTextRow}/>
            }

            {textBlock.superior &&
                <CompositionOfSuperiors id={textBlock.id} superior={textBlock.superior}/>
            }

            {textBlock.fileElement &&
                <FileElementComponent id={textBlock.id} fileElement={textBlock.fileElement}/>
            }

        </div>
    )
}
export default TextBlockComponent;