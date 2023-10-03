import React from 'react';
import css from "./LayoutHeader.module.scss"
import {NavLink} from "../../../features/NavLink";
import Icon from "../../../shared/ui/Icon/Icon";
import {LanguageToggle} from "../../../features/LanguageToggle";
import {Logo} from "./Logo/Logo";

const links = [
    {title: "Інститут", to: ""},
    {title: "Вступникам", to: ""},
    {title: "Навчання", to: ""},
    {title: "Контакти", to: ""},
]

const icons = [
    {iconBootstrap: "bi bi-instagram", height: 25, width: 25},
    {iconBootstrap: "bi bi-telegram", height: 25, width: 25},
    {iconBootstrap: "bi bi-facebook", height: 25, width: 25},
    {iconBootstrap: "bi bi-youtube", height: 25, width: 25},
    {iconBootstrap: "bi bi-tiktok", height: 25, width: 25}
]

const upperTitle = "АКТУАЛЬНО: Набір на курси лідерства"

export const LayoutHeader = () => {
    return (
        <div>
            <div className={css.upperTitle}>
                {upperTitle}
            </div>
            <div className={css.headerTopContainer}>
                <div className={css.iconsContainer}>
                    {icons.map(item => (
                        <Icon height={item.height} width={item.width} iconBootstrap={item.iconBootstrap}/>
                    ))}
                </div>
                <LanguageToggle/>
                <div className={css.linksContainer}>
                    {links.map(item => (
                        <NavLink title={item.title} to={item.to}/>
                    ))}
                </div>
            </div>
            <div className={css.headerBottomContainer}>
                <Logo/>
            </div>
        </div>

    );
};
