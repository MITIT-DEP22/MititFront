import React, {FC} from 'react';
import css from "./MiddleHistoryBlock.module.scss";
import {ISecondHistoryCard} from "../../model/model";
import HTMLReactParser from "html-react-parser";


interface InfoBlock {
    value: ISecondHistoryCard;
}

const MiddleHistoryBlock: FC<InfoBlock> = ({value}) => {
    return (
        <div className={css.middleHistoryContainer}>
            <div className={css.middleHistoryText}>{HTMLReactParser(value.text)}</div>
            <div className={css.middleHistoryImgContainer}>
                {value.imageSrc.map((value, index) => (
                    index % 2 ?
                        <div className={`${css.middleHistoryImg} ${css.alignImgRight}`}>
                            <img src={value} alt=""/>
                        </div>
                        :
                        <div className={`${css.middleHistoryImg} ${css.alignImgLeft}`}>
                            <img src={value} alt=""/>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default MiddleHistoryBlock;