import React from 'react';
import css from "./LayoutFooter.module.scss"
import TitleLogo from "../../../shared/ui/TitleLogo/TitleLogo"
import {observer} from "mobx-react";
import MiddleTitle from "./MiddleTitle/MiddleTitle";
import NavigationFooter from "./NavigationFooter/NavigationFooter";

const titleName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ"
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
        {title: "Чому ВІТІ", to: "", id: 5},
        {title: "Історична довідка", to: "", id: 6},
        {title: "Керівний склад", to: "", id: 7},
        {title: "Публічна інформація", to: "", id: 8},
        {title: "Герої не вмирають", to: "", id: 9},
    ],
    [
        {title: "Чому ВІТІ", to: "", id: 10},
        {title: "Історична довідка", to: "", id: 11},
        {title: "Керівний склад", to: "", id: 12},
        {title: "Публічна інформація", to: "", id: 13},
        {title: "Герої не вмирають", to: "", id: 14},
    ],
    [
        {title: "Чому ВІТІ", to: "", id: 15},
        {title: "Історична довідка", to: "", id: 16},
        {title: "Керівний склад", to: "", id: 17},
        {title: "Публічна інформація", to: "", id: 18},
        {title: "Герої не вмирають", to: "", id: 19},
    ]
]

const titleArray = [
    'ІНСТИТУТ',
    'НАВЧАННЯ',
    'ВСТУПНИКАМ',
    'КОНТАКТИ'
]

export const LayoutFooter = observer(() => {


    return (
        <div>
            <div className={css.footerMainContainer}>
                <div className={css.footerUpperContainer}>
                    <TitleLogo value={titleName}/>
                    <MiddleTitle value={middleTitle}/>
                </div>
                <div className={css.footerBottomContainer}>
                    {navArray.map((value, index) => (
                        <NavigationFooter key={index} title={titleArray[index]} value={value} />
                    ))}
                </div>
            </div>
            <div className={css.footerWhiteContainer}>
                © Військовий інститут телекомунікацій та інформатизації, 2009-2022.
            </div>
        </div>
    )
})

