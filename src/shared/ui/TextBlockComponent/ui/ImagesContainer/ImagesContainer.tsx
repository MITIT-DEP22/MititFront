import React, {FC} from 'react';
import css from "./ImagesContainer.module.scss";
import {Image} from "entities/image";
import {ImageComponent} from "../../../../../features/ImageComponent";

interface ImagesProps {
    images: Image[]
}

const ImagesContainer: FC<ImagesProps> = ({images}) => {
    return (
        <div className={css.imagesContainer}>
            {images?.map(img => (
                <ImageComponent imgId={img.id}/>
            ))}
        </div>
    );
};

export default ImagesContainer;