import React, {useEffect, useState} from 'react';
import css from "./LayoutHeader.module.scss"
import {NavLinkB, NavLinkT} from "features/NavLink";
import Icon from "shared/ui/Icon/Icon";
import {LanguageToggle} from "features/LanguageToggle";
import TitleLogo from "shared/ui/TitleLogo/TitleLogo"
import UpperTitle from "./UpperTitle/UpperTitle";
import {observer} from "mobx-react";
import {model} from "../model/model"
import {RouterNames} from "shared/enums/RouterNames";
import {useLocation} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const linksT = [
    {title: "Інститут", to: RouterNames.INSTITUTE},
    {title: "Вступникам", to: RouterNames.ENTRANTS},
    {title: "Навчання", to: RouterNames.STUDY},
    {title: "Контакти", to: RouterNames.CONTACTS},
]

const linksB = [
    {title: "Новини", to: RouterNames.NEWS},
    {title: "Наука", to: RouterNames.SCIENCE},
    {title: "Факультети", to: RouterNames.FACULTIES},
    {title: "Кафедри", to: RouterNames.DEPARTMENTS},
    {title: "Підрозіли", to: RouterNames.UNITS},
    {title: "Співробітництво", to: RouterNames.COOPERATION},
    {title: "Наші перемоги", to: RouterNames.OUR_WINS}
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
    const {pathname} = useLocation()

    const [sidebar, setSidebar] = useState(false)


    const closeSidebar = () => {
        setSidebar(false)
    }

    const handleScroll = () => {
        window.scrollY > 30 ? setTopPosition(0) : setTopPosition(30);
        window.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        model.changeLink(pathname)
    }, [])


    return (

        <>
            <Sidebar isOpen={sidebar} close={closeSidebar}/>
            <div className={css.mobileHeader}>
                <TitleLogo value={titleName}/>
                <button className={css.openSidebar} onClick={() => setSidebar(true)}>
                    <i className="bi bi-list"></i>
                </button>
            </div>

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
                            <NavLinkT isActive={model.pathname.includes(item.to)}
                                      click={() => model.changeLink(item.to)}
                                      title={item.title} to={item.to}/>
                        ))}
                    </div>
                </div>

                <div className={css.headerBottomContainer}>
                    <TitleLogo value={titleName}/>
                    <div className={css.linksContainer}>
                        {linksB.map(item => (
                            <NavLinkB click={() => model.changeLink(item.to)}
                                      isActive={model.pathname.includes(item.to)}
                                      title={item.title} to={item.to}/>
                        ))}
                        <Icon className={css.search} height={25} width={25} iconBootstrap={"bi bi-search"}/>
                    </div>
                </div>
            </div>
        </>
    )
})

