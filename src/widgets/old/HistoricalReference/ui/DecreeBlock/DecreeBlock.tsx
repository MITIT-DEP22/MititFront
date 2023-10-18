import React, {FC} from 'react';
import css from "./DecreeBlock.module.scss";
import HTMLReactParser from "html-react-parser";


interface InfoDecree {
    array: string[]
}

const DecreeBlock: FC<InfoDecree> = ({array}) => {
    return (
        <div className={css.decreeBlock}>
            {array.map((value) => (
                <div className={css.decreeText}>{HTMLReactParser(value)}</div>
            ))}
        </div>
    );
};

export default DecreeBlock;