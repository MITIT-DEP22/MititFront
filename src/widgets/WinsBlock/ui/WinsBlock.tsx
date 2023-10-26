import React, {useState} from 'react';
import css from './WinsBlock.module.scss';
import {ImageComponent} from "../../../features/ImageComponent";

export const WinsBlock = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const wins: any[] = [
        {
            title: "Перемога в Хакатоні - 2022. Команда факультету Інформаційних технологій",
            img: 16534
        },
        {
            title: "Перемога в Хакатоні - 2022. Команда факультету Інформаційних технологій",
            img: 16535
        },
        {
            title: "Перемога в Хакатоні - 2022. Команда факультету Інформаційних технологій",
            img: 16536
        }
    ]

    return (
        <div className={css.wins}>
            <div className={css.winsTitle}>
                Наші перемоги
            </div>
            <div className={css.winsContainer} >
                <div>
                    <div className={css.winsSlider}>
                        <i className={`bi bi-caret-left ${css.winsArrowLeft}`}></i>
                        <ImageComponent imgId={wins[currentIndex].img} className={css.winsImage}/>
                        <i className={`bi bi-caret-right ${css.winsArrowRight}`}></i>
                    </div>
                </div>
                <div className={css.winsSliderElement}>
                    {wins.map((value, index) => (
                        index > 0?
                            <ImageComponent imgId={wins[index].img} className={css.winsImageSlider}/>
                            :
                            <></>
                    ))}
                </div>
            </div>
        </div>
    );
};