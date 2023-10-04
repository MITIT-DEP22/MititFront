import React, {FC} from "react";
import css from "./TitleWithLine.module.scss"

interface TitleLineProps {
    title: string;
}

const TitleWithLine: FC<TitleLineProps> = ({title}) => {
    return (
        <div className={css.title}>
            <div className={css.line}/>
            {title}
        </div>
    );
};

export default TitleWithLine;

