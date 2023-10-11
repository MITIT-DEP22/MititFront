import React, {FC} from 'react';
import css from "./AdditionForHistory.module.scss";
import HTMLReactParser from "html-react-parser";
import AdditionForHistoryElement from "./AdditionForHistoryElement/AdditionForHistoryElement";
import {IAdditionHistory} from "../../model/model";


interface AdditionInfo {
    value: IAdditionHistory
}

const AdditionForHistory: FC<AdditionInfo> = ({value}) => {
    return (
        <div className={css.additionForHistoryContainer}>
            <div className={css.additionForHistoryTitle}>{HTMLReactParser(value.additionHistory.title)}</div>
            <div className={css.additionForHistoryMain}>
                {value.additionHistory.textArray.map((value) => (
                    <AdditionForHistoryElement text={value}/>
                ))}
            </div>
        </div>
    );
};

export default AdditionForHistory;