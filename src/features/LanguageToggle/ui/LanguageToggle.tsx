import React from 'react';
import {model} from "../model/model"
import {observer} from "mobx-react";
import css from "./LanguageToggle.module.scss"

export const LanguageToggle = observer(() => {

    return (
        <div className={css.toggleContainer}>
            <button className={`${css.langBtn} ${model.activeLanguage === "en" && css.langBtn_active}`}
                    onClick={() => model.changeLang("en")}>EN
            </button>
            <div className={css.separator}/>
            <button className={`${css.langBtn} ${model.activeLanguage === "ua" && css.langBtn_active}`}
                    onClick={() => model.changeLang("ua")}>UA
            </button>
        </div>
    );

});
