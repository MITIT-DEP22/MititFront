import React, {FC} from 'react';
import css from "./MiddleHistoryBlock.module.scss";


interface InfoCard {
    text: string,
    array: string[]
}

const MiddleHistoryBlock: FC<InfoCard> = ({text, array}) => {
    return (
        <div className={css.middleHistoryContainer}>
            <div className={css.middleHistoryText}>{text}</div>
            <div className={css.middleHistoryImgContainer}>
                {array.map((value) => (
                    <img className={css.middleHistoryImg} src={value} alt=""/>
                ))}
            </div>
        </div>
    );
};

export default MiddleHistoryBlock;