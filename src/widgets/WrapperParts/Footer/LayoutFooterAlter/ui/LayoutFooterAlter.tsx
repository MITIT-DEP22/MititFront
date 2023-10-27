import React from 'react';
import css from "./LayoutFooterAlter.module.scss"
import {observer} from "mobx-react";
import TitleLogo from "./TitleLogo/TitleLogo"
import FooterInput from "./FooterInput/FooterInput";
import FooterCheckbox from "./FooterCheckbox/FooterCheckbox";
import MiddleTitle from "./MiddleTitle/MiddleTitle";
import NavigationFooter from "./NavigationAlterFooter/NavigationAlterFooter";
import {links} from "shared/enums/Data";


const titleName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ";
const middleTitle = "Вищий військовий навчальний заклад України, що готує офіцерів військ зв'язку для усіх \n" +
    "силових структур України (ЗСУ, СБУ, ДПСУ, МВС, МНС, СЗР).\n"


const titleArray = [
    'ІНСТИТУТ',
    'НАВЧАННЯ',
    'ВСТУПНИКАМ',
    'КОНТАКТИ'
]

export const LayoutFooterAlter = observer(() => {


    return (
        <div>
            <div className={css.footerAlterContainer}>
                <div className={css.footerAlterLeft}>
                    <div>
                        <h2>Будь в курсі подій! Підпишись на розсилку новин</h2>
                        <FooterInput/>
                    </div>
                    <FooterCheckbox/>
                    <button className={css.footerButton}>ПІДПИСАТИСЯ</button>
                </div>
                <div className={css.footerAlterRight}>
                    <TitleLogo value={titleName}/>
                    <MiddleTitle value={middleTitle}/>
                    <div className={css.footerNavigationContainer}>
                        {/*{navArray.map((value, index) => (*/}
                        {/*    <NavigationFooter key={index} title={titleArray[index]} value={value}/>*/}
                        {/*))}*/}
                    </div>
                </div>
            </div>
            <div className={css.footerGreenContainer}>
                © Військовий інститут телекомунікацій та інформатизації, 2009-2023.
            </div>
        </div>
    )
})

