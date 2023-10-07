import React, {FC} from 'react';
import css from "./DecreeBlock.module.scss";


interface InfoDecree {
    array: string[]
}

const DecreeBlock: FC<InfoDecree> = ({array}) => {
    return (
        <div className={css.decreeBlock}>
            {array.map((value) => (
                <div className={css.decreeText}>{value}</div>
            ))}
        </div>
    );
};

export default DecreeBlock;