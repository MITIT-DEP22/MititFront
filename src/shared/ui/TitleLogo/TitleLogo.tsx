import React, {FC} from 'react';
import css from "./TitleLogo.module.scss";
import logo from "assets/logo/logo.png"
import {Link} from "react-router-dom";
import {RouterNames} from "../../enums/RouterNames";

interface TitleNameProps extends React.HTMLProps<HTMLElement> {
    value: string;
    logoSize?: string;
    withTitle?: boolean;
}

const TitleLogo: FC<TitleNameProps> = ({value, logoSize, withTitle}) => {
    if (withTitle === undefined) {
        withTitle = true;
    }
    return (
        <Link className={css.titleName} to={RouterNames.HOME}>
            <div className={css.containerTitleLogo}>
                <img style={{width: logoSize, height: "100%"}} className={css.logo} src={logo} alt=""/>
                {
                    withTitle &&
                    <pre className={css.titleName}>
                    {value}
                 </pre>
                }
            </div>
        </Link>
    );
};

export default TitleLogo;