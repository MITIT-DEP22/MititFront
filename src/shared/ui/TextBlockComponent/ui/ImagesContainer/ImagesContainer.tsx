import React, {FC} from 'react';
import css from "./ImagesContainer.module.scss";
import {Image} from "entities/image";
import {ImageComponent} from "features/ImageComponent";

interface ImagesProps {
    images: Image[]
    id?:number;
}

const ImagesContainer: FC<ImagesProps> = ({images, id}) => {
    return (
        <div className={css.imagesContainer}>
            {images?.map(img => (
                <div key={`image_${img.id}_${id}`} className={css.element}>
                    <ImageComponent  className={css.img} imgId={img.id}/>
                </div>
            ))}
        </div>
    );
};

export default ImagesContainer;