import React, {FC, useState} from 'react';
import {ftpPath} from "../model";
import LoadingSpinner from "../../../shared/ui/LoadingSpinner/LoadingSpinner";

interface ImageProps extends React.HTMLProps<HTMLElement> {
    imgId: number;
}

export const ImageComponent: FC<ImageProps> = ({imgId, className}) => {

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
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
