import React, {FC} from 'react';
import {ImageTextRow} from "entities/text-block/model/types";
import css from "./ImageTextRow.module.scss"
import {ImageComponent} from "features/ImageComponent";
import HTMLReactParser from "html-react-parser";
import TextBlocks from "../../../TextBlocks/TextBlocks";

interface ImageTextRowProps {
    imageTextRows: ImageTextRow[];
    id?:number;
}

const ImageTextRowsContainer: FC<ImageTextRowProps> = ({imageTextRows, id}) => {
    return (
        <div className={css.container}>
            {imageTextRows.map((item,index) => (
                item.imgLeft
                    ?
                    <div key={`image-text-row_${index}_${id}`} className={css.subContainer}>
                        <ImageComponent imgId={item.image.id}/>
                        <div>{HTMLReactParser(item.text)}</div>
                    </div>
                    :
                    <div  key={`image-text-row_${index}_${id}`} className={css.subContainer}>
                        <div style={{textAlign: "right"}}>{HTMLReactParser(item.text)}</div>
                        <ImageComponent imgId={item.image.id}/>
                    </div>
            ))}

        </div>
    );
};

export default ImageTextRowsContainer;