import React, {FC, useEffect, useState} from 'react';
import {ftpPath} from "../model";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";

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
            {isLoading && <LoadingSpinner/>}
            <img
                style={{display: isLoading ? 'none' : 'block'}}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={className}
                src={ftpPath + imgId}
                alt=""/>
        </>
    );
};
