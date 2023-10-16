import React, {FC, useState} from 'react';
import {ftpPath} from "../model";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";

interface ImageProps extends React.HTMLProps<HTMLElement> {
    imgId: number;
    updateParentState?: () => void;
}

export const ImageComponent: FC<ImageProps> = ({imgId, className, updateParentState}) => {

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        if(updateParentState){
            updateParentState();
        }
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
