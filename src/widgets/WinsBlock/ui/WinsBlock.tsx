import React, {FC, useEffect, useState} from 'react';
import css from './WinsBlock.module.scss';
import {ImageComponent} from "features/ImageComponent";
import {observer} from "mobx-react";
import {Wins} from "entities/wins";
import WinComponent from "./WinComponent/WinComponent";


interface SliderProps {
    wins: Wins[];
}

export const WinsBlock: FC<SliderProps> = observer(({wins}) => {
    const [currentWin, setCurrentWIn] = useState<Wins>({} as Wins);
    const [onChange, setOnChange] = useState(false);

    const [isMore, setIsMore] = useState(false);

    useEffect(() => {
        wins && setCurrentWIn(wins[0])
    }, [wins]);

    useEffect(() => {
        scrollOnActive()
    }, [currentWin]);

    const animate = () => {
        setOnChange(true)
        setTimeout(() => {
            setOnChange(false)
        }, 400)
    }

    const scrollOnActive = () => {
        if (document.getElementById("preview-container")) {
            // @ts-ignore
            document.getElementById("preview-container").scrollTo({
                left: 150 * wins?.indexOf(currentWin),
                behavior: "smooth"
            })
        }
    }

    const prevImg = () => {
        animate()
        setTimeout(() => {
            setCurrentWIn(wins[
                (wins.indexOf(currentWin) - 1) < 0 ? wins.length - 1 : (wins.indexOf(currentWin) - 1)
                ])
        }, 300)
    }

    const nextImg = () => {
        animate()
        setTimeout(() => {
            setCurrentWIn(wins[
                (wins.indexOf(currentWin) + 1) === wins.length ? 0 : (wins.indexOf(currentWin) + 1)
                ])
        }, 300)
    }



    return (
        <>
            {isMore?
                <div className={css.wins}>
                    {wins.map((value, index) => (
                        <WinComponent win={value}/>
                    ))}
                    <div className={css.winsBack}>
                        <h4 onClick={() => setIsMore(false)}>{`< Назад`}</h4>
                    </div>
                </div>
                :
                <div className={css.wins}>
                    <div className={css.winsTitle}>
                        Наші перемоги
                    </div>
                    <h3 className={css.winsText}>
                        {currentWin?.text}
                    </h3>
                    <div className={css.winsContainer} >
                        <div className={css.winsSlider}>
                            <i className={`bi bi-caret-left ${css.winsArrowLeft}`} onClick={prevImg}></i>
                            <ImageComponent imgId={currentWin?.img} className={`${css.winsImage} ${onChange && css.winsSliderImg_change}`}/>
                            <i className={`bi bi-caret-right ${css.winsArrowRight}`} onClick={nextImg}></i>
                        </div>
                        <div id={"preview-container"} className={css.winsSliderElements}>
                            {wins.map((value, index) => (
                                <button onClick={() => {
                                    animate()
                                    setCurrentWIn(value)
                                }} className={css.imgBtn}>
                                    <ImageComponent key={`slider-img-news-page_${value.id}`}
                                                    className={`${css.winsImageSlider} ${value?.id === currentWin?.id && css.imgBtn_active}`}
                                                    imgId={value?.img}/>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={css.winsMore}>
                        <h4 onClick={() => setIsMore(true)}>{`Більше >`}</h4>
                    </div>
                </div>
            }
        </>
    );
});