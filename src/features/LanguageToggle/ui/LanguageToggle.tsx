import React, {FC} from 'react';
import {model} from "../model/model"
import {observer} from "mobx-react";
import css from "./LanguageToggle.module.scss"

interface LanguageToggleProps {
    isMobile?: boolean
}

export const LanguageToggle: FC<LanguageToggleProps> = observer(({isMobile}) => {

    return (
        <div className={`${css.toggleContainer} `}>
            <button
                className={`${css.langBtn}  ${model.activeLanguage === "en" && css.langBtn_active} ${isMobile && css.mobile}`}
                onClick={() => model.changeLang("en")}>EN
            </button>
            <div className={`${css.separator} ${isMobile && css.separatorMobile}`}/>
            <button
                className={`${css.langBtn} ${model.activeLanguage === "ua" && css.langBtn_active} ${isMobile && css.mobile} `}
                onClick={() => model.changeLang("ua")}>UA
            </button>
        </div>
    );

});
