import React, {FC} from 'react';
import css from "./MiddleTitle.module.scss";


interface MiddleTitleProps {
    value: string;
}

const MiddleTitle: FC<MiddleTitleProps> = ({value}) => {
    return (
        <div className={css.middleTitle}>
            {value}
        </div>
    );
};

export default MiddleTitle;