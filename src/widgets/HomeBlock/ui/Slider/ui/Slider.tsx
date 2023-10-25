import React, {useState} from 'react';
import css from "./Slider.module.scss";
import {Link} from "react-router-dom";
import Icon from "shared/ui/Icon/Icon";
import {ftpPath} from "features/ImageComponent/model";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import sliderStore from "../../../../../entities/slider-item/store/sliderStore";
import {observer} from "mobx-react";

interface SliderProps {
    scrollDown: () => void;
}

export const Slider: React.FC<SliderProps> = observer(({scrollDown}) => {


    const {sliderItems, isLoading} = sliderStore
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    };

    const [imageIsLoading, setImageIsLoading] = useState(true)

    return (
        <div className={css.slider}>

            {!isLoading && sliderItems.map((item, index) => (
                <picture
                    key={item.image.id + index}
                    className={`${css.sliderPicture} ${index === currentImageIndex ? css.active : ''}`}
                >

                    {item.mobileImage && (
                        <source media="(max-width: 420px)" srcSet={ftpPath + item.mobileImage.id}/>
                    )}
                    {imageIsLoading && <Skeleton className={css.skeleton}/>}
                    <img style={{display: imageIsLoading ? "none" : "block"}} onLoad={() => setImageIsLoading(false)}
                         className={css.sliderImg} src={ftpPath + item.image.id} alt=""/>
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
});