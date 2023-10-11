import React, {FC} from 'react';
import css from "./ImagesContainer.module.scss";
import {Image} from "entities/text-block";

interface ImagesProps {
    images: Image[]
}

const ImagesContainer: FC<ImagesProps> = ({images}) => {
    return (
        <div className={css.imagesContainer}>
            {images?.map(img => (
                <img className={css.img} src={img?.href} alt=""/>
            ))}
        </div>
    );
};

export default ImagesContainer;