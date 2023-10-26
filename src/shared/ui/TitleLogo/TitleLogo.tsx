import React, {FC, useState} from 'react';
import css from "./TitleLogo.module.scss";
import logo from "assets/logo/logo.png"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {observer} from "mobx-react";
import {languageToggleStore} from "../../../features/LanguageToggle/model/languageToggleStore";
import {instituteName} from "../../enums/Data";
import HTMLReactParser from "html-react-parser";

interface TitleNameProps extends React.HTMLProps<HTMLElement> {
    logoSize?: string;
    withTitle?: boolean;
}

const TitleLogo: FC<TitleNameProps> = observer(({logoSize, withTitle}) => {
            if (withTitle === undefined) {
                withTitle = true;
            }
            const [isLoading, setIsLoading] = useState(true)
            const {activeLanguage} = languageToggleStore
            return (

                <div className={css.containerTitleLogo}>
                    {isLoading && <LoadingSpinner/>}
                    <img onLoad={() => setIsLoading(false)}
                         style={{width: logoSize, height: "100%", display: isLoading ? "none" : "block"}} className={css.logo}
                         src={logo} alt=""/>
                    {
                        withTitle &&
                        <span className={css.titleName}>
                            {HTMLReactParser(activeLanguage == "ua" ? instituteName.ua : instituteName.eng)}
                        </span>
                    }
                </div>
            );
        }
    )
;

export default TitleLogo;