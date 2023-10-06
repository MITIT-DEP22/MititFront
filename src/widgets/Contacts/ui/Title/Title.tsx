import React, {FC} from 'react';
import css from "./Title.module.scss"
interface TitleProps {
    value: string;
    margin?:string;
}

const Title: FC<TitleProps> = ({value, margin}) => {
    return (
        <p style={{margin:margin}} className={css.title}>
            {value}
        </p>
    );
};

export default Title;

