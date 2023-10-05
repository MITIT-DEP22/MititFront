import React, {useState} from 'react';
import css from "./LayoutHeader.module.scss"
import {NavLinkB, NavLinkT} from "../../../features/NavLink";
import Icon from "../../../shared/ui/Icon/Icon";
import {LanguageToggle} from "../../../features/LanguageToggle";
import TitleLogo from "../../../shared/ui/TitleLogo/TitleLogo"
import UpperTitle from "./UpperTitle/UpperTitle";
import {observer} from "mobx-react";
import {model} from "../model/model"
import {RouterNames} from "../../../shared/enums/RouterNames";

const linksT = [
    {title: "Інститут", to: RouterNames.INSTITUTE, id: 0},
    {title: "Вступникам", to: RouterNames.ENTRANTS, id: 1},
    {title: "Навчання", to: RouterNames.STUDY, id: 2},
    {title: "Контакти", to: RouterNames.CONTACTS, id: 3},
]

const linksB = [
    {title: "Новини", to: RouterNames.NEWS, id: 4},
    {title: "Наука", to: RouterNames.SCIENCE, id: 5},
    {title: "Факультети", to: RouterNames.FACULTIES, id: 6},
    {title: "Кафедри", to: RouterNames.DEPARTMENTS, id: 7},
    {title: "Підрозіли", to: RouterNames.UNITS, id: 8},
    {title: "Співробітництво", to: RouterNames.COOPERATION, id: 9},
    {title: "Наші перемоги", to: RouterNames.OUR_WINS, id: 10}
]

const icons = [
    {iconBootstrap: "bi bi-instagram", height: 25, width: 25},
    {iconBootstrap: "bi bi-telegram", height: 25, width: 25},
    {iconBootstrap: "bi bi-facebook", height: 25, width: 25},
    {iconBootstrap: "bi bi-youtube", height: 25, width: 25},
    {iconBootstrap: "bi bi-tiktok", height: 25, width: 25}
]

const titleName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ"
const upperTitle = "АКТУАЛЬНО: Набір на курси лідерства"

export const LayoutHeader = observer(() => {

    const [topPosition, setTopPosition] = useState(30)
    const handleScroll = () => {
        window.scrollY > 30 ? setTopPosition(0) : setTopPosition(30);
        window.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);

    return (
        <div className={css.container}>
            <UpperTitle value={upperTitle}/>

            <div style={{top: `${topPosition}px`}} className={css.headerTopContainer}>
                <div className={css.iconsContainer}>
                    {icons.map(item => (
                        <Icon height={item.height} width={item.width} iconBootstrap={item.iconBootstrap}/>
                    ))}
                    <LanguageToggle/>
                </div>
                <div className={css.linksContainer}>
                    {linksT.map(item => (
                        <NavLinkT isActive={item.id === model.activeLink} click={() => model.changeLink(item.id)}
                                  title={item.title} to={item.to}/>
                    ))}
                </div>
            </div>

            <div className={css.headerBottomContainer}>
                <TitleLogo value={titleName}/>
                <div className={css.linksContainer}>
                    {linksB.map(item => (
                        <NavLinkB click={() => model.changeLink(item.id)} isActive={item.id === model.activeLink}
                                  id={item.id} title={item.title} to={item.to}/>
                    ))}
                    <Icon className={css.search} height={25} width={25} iconBootstrap={"bi bi-search"}/>
                </div>
            </div>

        </div>
    )
})

