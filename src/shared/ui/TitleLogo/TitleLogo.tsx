import React, {FC} from 'react';
import css from "../TitleLogo/TitleLogo.module.scss";
import logo from "assets/logo/logo.png"

interface TitleNameProps {
    value: string;
}

const TitleLogo: FC<TitleNameProps> = ({value}) => {
    return (
        <div className={css.containerTitleLogo}>
            <img className={css.logo} src={logo} alt=""/>
            <pre className={css.titleName}>
            {value}
            </pre>
        </div>
    );
};

export default TitleLogo;