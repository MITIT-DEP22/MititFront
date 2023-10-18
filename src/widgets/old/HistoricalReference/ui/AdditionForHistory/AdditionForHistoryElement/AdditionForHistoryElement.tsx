import React, {FC} from 'react';
import css from "./AdditionForHistoryElement.module.scss";
import HTMLReactParser from "html-react-parser";


interface AdditionElementInfo {
    text: string;
}

const AdditionForHistoryElement: FC<AdditionElementInfo> = ({text}) => {
    return (
        <div className={css.additionForHistoryElementContainer}>
            {HTMLReactParser(text)}
        </div>
    );
};

export default AdditionForHistoryElement;