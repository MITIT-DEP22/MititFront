import React, {FC} from 'react';
import {observer} from "mobx-react";
import css from "./LanguageToggle.module.scss"
import {languageToggleStore} from "../model/languageToggleStore";

interface LanguageToggleProps {
    isMobile?: boolean
}

export const LanguageToggle: FC<LanguageToggleProps> = observer(({isMobile}) => {


    return (
        <div className={`${css.toggleContainer} `}>
            <button
                className={`${css.langBtn}  ${languageToggleStore.activeLanguage === "en" && css.langBtn_active} ${isMobile && css.mobile}`}
                onClick={() => languageToggleStore.changeLang("en")}>EN
            </button>
            <div className={`${css.separator} ${isMobile && css.separatorMobile}`}/>
            <button
                className={`${css.langBtn} ${languageToggleStore.activeLanguage === "ua" && css.langBtn_active} ${isMobile && css.mobile} `}
                onClick={() => languageToggleStore.changeLang("ua")}>UA
            </button>
        </div>
    );

});
