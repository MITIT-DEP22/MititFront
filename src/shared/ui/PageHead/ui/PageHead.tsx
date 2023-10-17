import React, {FC, useState} from 'react';
import css from "./PageHead.module.scss"
import {ftpPath} from "features/ImageComponent/model";

interface PageHeadProps {
    title: string;
    imgId: number;
}

export const PageHead: FC<PageHeadProps> = ({title, imgId}) => {

    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {isLoading && <div className={css.skeleton}>
                <p style={{color:"black"}} className={css.title}>{title}</p>
            </div>}
            <div onLoad={() => {setIsLoading(false)}}
                 className={`${css.container}  ${isLoading && css.none}`}>
                <p className={css.title}>{title}</p>
                <img className={css.img} src={ftpPath + imgId} alt=""/>
                <div className={css.filter}/>
            </div>
        </>
    );
};