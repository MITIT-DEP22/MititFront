import React from 'react';
import css from "./LayoutFooterAlter.module.scss"
import {observer} from "mobx-react";
import TitleLogo from "./TitleLogo/TitleLogo"
import FooterInput from "./FooterInput/FooterInput";
import FooterCheckbox from "./FooterCheckbox/FooterCheckbox";
import MiddleTitle from "./MiddleTitle/MiddleTitle";
import NavigationFooter from "./NavigationAlterFooter/NavigationAlterFooter";


const titleName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ";
const middleTitle = "Вищий військовий навчальний заклад України, що готує офіцерів військ зв'язку для усіх \n" +
    "силових структур України (ЗСУ, СБУ, ДПСУ, МВС, МНС, СЗР).\n"

const navArray = [
    [
        {title: "Чому ВІТІ", to: "", id: 0},
        {title: "Історична довідка", to: "", id: 1},
        {title: "Керівний склад", to: "", id: 2},
        {title: "Публічна інформація", to: "", id: 3},
        {title: "Герої не вмирають", to: "", id: 4},
    ],
    [
        {title: "Організація освітньої діяльності", to: "", id: 5},
        {title: "Методична робота", to: "", id: 6},
        {title: "Матеріально-технічна база", to: "", id: 7},
        {title: "Ліцензія, сертифікати, акредитація", to: "", id: 8},
        {title: "Нормативно-правова база", to: "", id: 9},
    ],
    [
        {title: "Денна форма навчання", to: "", id: 10},
        {title: "Заочна форма навчання", to: "", id: 11},
        {title: "Навчання в докторантурі та ад'юнктурі", to: "", id: 12},
        {title: "Підготовка за програмою офіцерів запасу", to: "", id: 13},
        {title: "Приймальна комісія", to: "", id: 14},
        {title: "ЗНО 2022", to: "", id: 15},
    ],
    [
        {title: "Прийом громадян", to: "", id: 16},
        {title: "Адреса", to: "", id: 17},
        {title: "Гаряча лінія", to: "", id: 18},
    ]
]

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
                        {navArray.map((value, index) => (
                            <NavigationFooter key={index} title={titleArray[index]} value={value}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={css.footerGreenContainer}>
                © Військовий інститут телекомунікацій та інформатизації, 2009-2023.
            </div>
        </div>
    )
})

