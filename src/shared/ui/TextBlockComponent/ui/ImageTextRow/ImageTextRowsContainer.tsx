import React, {FC} from 'react';
import {ImageTextRow} from "entities/text-block/model/types";
import css from "./ImageTextRow.module.scss"
import {ImageComponent} from "features/ImageComponent";
import HTMLReactParser from "html-react-parser";


interface ImageTextRowProps {
    imageTextRow: ImageTextRow;
    id?: number;
}

const ImageTextRowsContainer: FC<ImageTextRowProps> = ({imageTextRow, id}) => {
    return (
        <div className={css.container}>
            {/*{imageTextRows.map((item,index) => (*/}
            {/*    item.imgLeft*/}
            {/*        ?*/}
            {/*        <div key={`image-text-row_${index}_${id}`} className={css.subContainer}>*/}
            {/*            <ImageComponent imgId={item.image.id}/>*/}
            {/*            <div>{HTMLReactParser(item.text)}</div>*/}
            {/*        </div>*/}
            {/*        :*/}
            <div key={`image-text-row_${id}`} className={css.subContainer}>
                {
                    imageTextRow.imgLeft ?
                        <>
                            <ImageComponent className={css.img} imgId={imageTextRow.image.id}/>
                            <div style={{textAlign: "left"}}>{HTMLReactParser(imageTextRow.text)}</div>
                        </>
                        :
                        <>
                            <div style={{textAlign: "right"}}>{HTMLReactParser(imageTextRow.text)}</div>
                            <ImageComponent className={css.img} imgId={imageTextRow.image.id}/>
                        </>
                }
            </div>
            {/*))}*/}

        </div>
    );
};
export default ImageTextRowsContainer;