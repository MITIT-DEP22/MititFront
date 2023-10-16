import React, {FC} from 'react';
import {ImageTextRow} from "entities/text-block/model/types";
import css from "./ImageTextRow.module.scss"
import {ImageComponent} from "features/ImageComponent";
import HTMLReactParser from "html-react-parser";

interface ImageTextRowProps {
    imageTextRows: ImageTextRow[];
}

const ImageTextRowsContainer: FC<ImageTextRowProps> = ({imageTextRows}) => {
    return (
        <div className={css.container}>
            {imageTextRows.map(item => (
                item.imgLeft
                    ?
                    <div className={css.subContainer}>
                        <ImageComponent imgId={item.image.id}/>
                        <p>{HTMLReactParser(item.text)}</p>
                    </div>
                    :
                    <div className={css.subContainer}>
                        <p>{HTMLReactParser(item.text)}</p>
                        <ImageComponent imgId={item.image.id}/>
                    </div>
            ))}

        </div>
    );
};

export default ImageTextRowsContainer;