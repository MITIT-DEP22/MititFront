import React, {useState} from 'react';
import css from "./Slider.module.scss";
import {sliderItems} from "../model";
import {Link} from "react-router-dom";
import Icon from "../../../shared/ui/Icon/Icon";

export const Slider: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    };

    return (
        <div className={css.slider}>
            {sliderItems.map((item, index) => (
                <picture
                    key={item.imageSrc + index}
                    className={`${css.sliderPicture} ${index === currentImageIndex ? css.active : ''}`}
                >
                    <img className={css.sliderImg} src={item.imageSrc} alt=""/>

                    <div className={css.sliderContent}>
                        {item.text && (
                            <div className={css.sliderDescription}>{item.text}</div>
                        )}

                        {item.title && (
                            <div className={css.sliderTitle}>{item.title}</div>
                        )}

                        {item.descriptionButton && (
                            <Link className={css.sliderLink} to={item.descriptionButton.href}>{item.descriptionButton.text}</Link>
                        )}
                    </div>
                </picture>
            ))}


            <Icon height={36} iconBootstrap={"bi bi-caret-left"} width={36} className={css.prevButton} onClick={prevImage}/>
            <Icon height={36} iconBootstrap={"bi bi-caret-right"} width={36} className={css.nextButton} onClick={nextImage}/>

            <Icon height={36} iconBootstrap={"bi bi-caret-down"} width={36} className={css.bottomButton}/>
        </div>
    );
};