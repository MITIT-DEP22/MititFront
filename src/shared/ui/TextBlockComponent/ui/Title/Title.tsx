import React, {FC} from 'react';
import css from "./Title.module.scss";

interface TitleProps{
    title:string;
}
const Title:FC<TitleProps> = ({title}) => {
    return (
        <>
            <p className={css.title}>{title}</p>
        </>
    );
};

export default Title;