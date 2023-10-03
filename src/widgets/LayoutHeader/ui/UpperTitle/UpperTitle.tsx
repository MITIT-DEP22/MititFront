import React, {FC} from 'react';
import css from "../LayoutHeader.module.scss";

interface UpperTitleProps {
    value: string;
}

const UpperTitle: FC<UpperTitleProps> = ({value}) => {
    return (
        <div className={css.upperTitle}>
            {value}
        </div>
    );
};

export default UpperTitle;