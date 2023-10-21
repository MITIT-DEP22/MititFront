import React, {useState} from 'react';
import css from "./Slider.module.scss";
import {sliderItems} from "../model";
import {Link} from "react-router-dom";
import Icon from "shared/ui/Icon/Icon";
import {ftpPath} from "features/ImageComponent/model";
import Skeleton from "../../../../../shared/ui/Skeleton/Skeleton";

interface SliderProps {
    scrollDown: () => void;
}

export const Slider: React.FC<SliderProps> = ({scrollDown}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    };

    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className={css.slider}>
            {sliderItems.map((item, index) => (
                <picture
                    key={item.img.id + index}
                    className={`${css.sliderPicture} ${index === currentImageIndex ? css.active : ''}`}
                >

                    {item.mobImg && (
                        <source media="(max-width: 420px)" srcSet={ftpPath + item.mobImg.id}/>
                    )}

                    <img style={{display:isLoading ? "none" : "block"}} onLoad={()=>setIsLoading(false)} className={css.sliderImg} src={ftpPath + item.img.id} alt=""/>
                    <Skeleton className={css.skeleton}/>
                    <div className={css.sliderContent}>
                        {item.text && (
                            <div className={css.sliderDescription}>{item.text}</div>
                        )}

                        {item.title && (
                            <div className={css.sliderTitle}>{item.title}</div>
                        )}

                        {item.descriptionButton && (
                            <Link className={css.sliderLink}
                                  to={item.descriptionButton.href}>{item.descriptionButton.text}</Link>
                        )}
                    </div>
                </picture>
            ))}


            <Icon height={36} iconBootstrap={"bi bi-caret-left"} width={36} className={`${css.prevButton} ${css.left}`}
                  onClick={prevImage}/>
            <Icon height={36} iconBootstrap={"bi bi-caret-right"} width={36}
                  className={`${css.nextButton} ${css.right}`}
                  onClick={nextImage}/>

            <Icon height={36} iconBootstrap={"bi bi-caret-down"} width={36} className={css.bottomButton}
                  onClick={scrollDown}/>
        </div>
    );
};