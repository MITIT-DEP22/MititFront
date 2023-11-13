import React, {FC, useState} from 'react';
import css from "./ImageComponent.module.scss"
import Skeleton from "shared/ui/Skeleton/Skeleton";
import {API_URL} from "../../../shared/api";

interface ImageProps extends React.HTMLProps<HTMLElement> {
    imgId: number;
    onLoaded?: () => any;
}

export const ImageComponent: FC<ImageProps> = ({imgId, className, onLoaded}) => {

    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
        onLoaded && onLoaded()
    };

    const handleImageError = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <Skeleton className={`${css.skeletonSize}`}/>}
            <img key={`image_${imgId}`}
                 style={{display: isLoading ? 'none' : 'block'}}
                 onLoad={handleImageLoad}
                 onError={handleImageError}
                 className={`${className} ${css.img}`}
                 src={API_URL + "/images/" + imgId}
                 alt=""/>
        </>
    );
};
