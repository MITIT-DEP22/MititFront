import React, {FC} from 'react';
import css from "./Title.module.scss"
interface TitleProps {
    value: string;
}

const Title: FC<TitleProps> = ({value}) => {
    return (
        <p className={css.title}>
            {value}
        </p>
    );
};

export default Title;

