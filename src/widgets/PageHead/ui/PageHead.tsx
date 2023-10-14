import React, {FC} from 'react';
import css from "./PageHead.module.scss"
import {ftpPath} from "features/ImageComponent/model";

interface PageHeadProps {
    title: string;
    imgId: number;
}

export const PageHead: FC<PageHeadProps> = ({title, imgId}) => {
    return (
        <>
            <div style={{background: `url(${ftpPath+imgId}) no-repeat center`}} className={css.container}>
                <p className={css.title}>{title}</p>
                <div className={css.filter}/>
            </div>
        </>
    );
};