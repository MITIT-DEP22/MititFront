import React, {FC} from 'react';
import css from "./Title.module.scss";
import HTMLReactParser from "html-react-parser";

interface TitleProps{
    title:string;
}
const Title:FC<TitleProps> = ({title}) => {
    return (
        <>
            <p className={css.title}>{HTMLReactParser(title)}</p>
        </>
    );
};

export default Title;