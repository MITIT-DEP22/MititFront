import React, {FC, useEffect, useState} from 'react';
import css from "./PageHead.module.scss"
import Icon from "../../../shared/ui/Icon/Icon";
import {API_URL, IMAGES_PATH} from "../../../shared/api";

interface PageHeadProps {
    title: string;
    imgId: number;
}

export const PageHead: FC<PageHeadProps> = ({title, imgId}) => {

    const [isLoading, setIsLoading] = useState(true);

    const scroll = () => {
        window.scrollTo({
            top: window.innerHeight - 62,
            behavior: 'smooth',
        });
    };

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true)
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
            <div className={`${css.container}  ${isLoading && css.none}`}>
                <p className={css.title}>{title}</p>
                <img className={css.img} onLoad={handleImageLoad} src={IMAGES_PATH + imgId} alt=""/>
                <div className={css.filter}/>
                <Icon height={36} iconBootstrap={"bi bi-caret-down"} width={36} className={css.scrollDown}
                      onClick={scroll}/>
            </div>
        </>
    );
};