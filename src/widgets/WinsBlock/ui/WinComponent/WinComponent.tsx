import React, {FC} from 'react';
import {Wins} from "entities/wins";
import css from './WinComponent.module.scss';
import {ImageComponent} from "features/ImageComponent";

interface SliderProps {
    win: Wins;
}

const WinComponent:FC<SliderProps> = ({win}) => {
    return (
        <div className={css.winContainer}>
            <h4>{win?.text}</h4>
            <ImageComponent className={`${css.winImg}`}
                            imgId={win?.img}/>
        </div>
    );
};

export default WinComponent;