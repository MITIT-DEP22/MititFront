import React, {FC, useState} from 'react';
import css from "./TitleLogo.module.scss";
import logo from "assets/logo/logo.png"
import {Link} from "react-router-dom";
import {RouterNames} from "../../enums/RouterNames";
import Skeleton from "../Skeleton/Skeleton";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface TitleNameProps extends React.HTMLProps<HTMLElement> {
    value: string;
    logoSize?: string;
    withTitle?: boolean;
}

const TitleLogo: FC<TitleNameProps> = ({value, logoSize, withTitle}) => {
    if (withTitle === undefined) {
        withTitle = true;
    }
    const [isLoading, setIsLoading] = useState(true)

    return (

            <div className={css.containerTitleLogo}>
                {isLoading && <LoadingSpinner/>}
                <img onLoad={()=>setIsLoading(false)} style={{width: logoSize, height: "100%", display:isLoading ? "none" : "block"}} className={css.logo} src={logo} alt=""/>
                {
                    withTitle &&
                    <pre className={css.titleName}>
                    {value}
                 </pre>
                }
            </div>
    );
};

export default TitleLogo;