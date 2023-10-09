import React, {useEffect, useState} from 'react';
import css from "./LayoutHeader.module.scss"
import {NavLinkB, NavLinkT} from "features/NavLink";
import Icon from "shared/ui/Icon/Icon";
import {LanguageToggle} from "features/LanguageToggle";
import TitleLogo from "shared/ui/TitleLogo/TitleLogo"
import {observer} from "mobx-react";
import {model} from "../../../model/model"
import {useLocation} from "react-router-dom";
import {headerData, instituteName} from "shared/enums/Data";
import Search from "../../Search/Search";



export const LayoutHeader = observer(() => {
    const {pathname} = useLocation()

    const [topPosition, setTopPosition] = useState(30)


    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 30 ? setTopPosition(0) : setTopPosition(30);
            window.addEventListener('scroll', handleScroll);
        }
        window.addEventListener('scroll', handleScroll);
        model.changeLink(pathname)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <div className={css.container}>
            <div style={{top: `${topPosition}px`}} className={css.headerTopContainer}>
                <div className={css.iconsContainer}>
                    {headerData.icons.map(item => (
                        <Icon height={item.height} width={item.width} iconBootstrap={item.iconBootstrap}/>
                    ))}
                    <LanguageToggle/>
                </div>
                <div className={css.linksContainer}>
                    {headerData.linksT.map(item => (
                        <NavLinkT isActive={model.pathname.includes(item.to)}
                                  click={() => model.changeLink(item.to)}
                                  title={item.title} to={item.to}/>
                    ))}
                </div>
            </div>

            <div className={css.headerBottomContainer}>
                <TitleLogo value={instituteName}/>
                <div className={css.linksContainer}>
                    {headerData.linksB.map(item => (
                        <NavLinkB click={() => model.changeLink(item.to)}
                                  isActive={model.pathname.includes(item.to)}
                                  title={item.title} to={item.to}/>
                    ))}
                    <Search/>
                </div>
            </div>
        </div>
    )
})

