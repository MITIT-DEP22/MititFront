import React, {FC} from 'react';
import css from "./UpperTitle.module.scss";

interface UpperTitleProps {
    value: string;
}

const UpperTitle: FC<UpperTitleProps> = ({value}) => {
    return (
        <>
            <div className={css.marquee}>
                <div className={css.marqueeContent}>{value}</div>
            </div>
        </>
    );
};

export default UpperTitle;