import React, {FC, useEffect, useState} from 'react';
import css from "./PageHead.module.scss"
import {ftpPath} from "features/ImageComponent/model";
import Icon from "../../Icon/Icon";

interface PageHeadProps {
    title: string;
    imgId: number;
}

export const PageHead: FC<PageHeadProps> = ({title, imgId}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [src, setSrc] = useState("")

    const scroll = () => {
        window.scrollTo({
            top: window.innerHeight - 100,
            behavior: 'smooth',
        });
    };

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        const newSrc = ftpPath + imgId;
        setIsLoading(true);
        const img = new Image();
        img.onload = () => {
            setSrc(newSrc)
            handleImageLoad();
        };
        img.src = newSrc;
    }, [imgId]);

    return (
        <>
            {
                isLoading &&
                <div className={css.skeleton}>
                    <p style={{color: "black"}} className={css.title}>{title}</p>
                    <Icon height={36} iconBootstrap={"bi bi-caret-down"} width={36} className={css.scrollDown}
                          onClick={scroll}/>
                </div>
            }

            <div onLoad={() => {
                setIsLoading(false)
            }}
                 className={`${css.container}  ${isLoading && css.none}`}>
                <p className={css.title}>{title}</p>
                <img className={css.img} onLoad={handleImageLoad} src={src} alt=""/>
                <div className={css.filter}/>
                <Icon height={36} iconBootstrap={"bi bi-caret-down"} width={36} className={css.scrollDown}
                      onClick={scroll}/>
            </div>
        </>
    );
};