import React, {FC} from 'react';
import {ftpPath} from "../model";

interface ImageProps extends React.HTMLProps<HTMLElement> {
    imgId: number;
}

export const ImageComponent: FC<ImageProps> = ({imgId,className}) => {
    return (
        <img className={className} src={ftpPath + imgId} alt=""/>
    );
};
