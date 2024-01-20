import React, {FC} from 'react';
import {FileElement} from "entities/text-block/model/types";
import {ImageComponent} from "features/ImageComponent";
import css from "./FileElement.module.css"
import HTMLReactParser from "html-react-parser";

interface FileElementProps {
    fileElement: FileElement;
    id?: number;
}

const FileElementComponent: FC<FileElementProps> = ({fileElement, id}) => {
    return (
        <div className={css.container}>
            <ImageComponent className={css.image}
                            imgId={fileElement.image.id}/>
            <div className={css.title}>
                {fileElement.title &&
                    <a className={css.link} download
                       href={`${process.env.REACT_APP_API_URL}/files/${fileElement.fileId}`}>{HTMLReactParser(fileElement.title)}</a>
                }
            </div>

        </div>
    );
};

export default FileElementComponent;