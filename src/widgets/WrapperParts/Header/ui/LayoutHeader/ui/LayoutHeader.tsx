import React, {useEffect, useState} from 'react';
import css from "./LayoutHeader.module.scss"
import {LanguageToggle} from "features/LanguageToggle";
import TitleLogo from "shared/ui/TitleLogo/TitleLogo"
import {observer} from "mobx-react";
import {headerStore} from "../../../model/headerStore"
import {Link, useLocation} from "react-router-dom";
import {instituteName, links} from "shared/enums/Data";
import Search from "../../Search/Search";
import SocialLinkIcon from "../../SocialLink/SocialLinkIcon";
import {RouterNames} from "shared/enums/RouterNames";
import {headerData} from "../../../model";
import {NavLinkB, NavLinkT} from "../../../../../../features/NavLink";
import NavSubLinksD from "features/NavLink/NavSublinks/NavSublinksD/NavSubLinksD"

export const LayoutHeader = observer(() => {
    const {pathname} = useLocation()
    const [topPosition, setTopPosition] = useState(30)


    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 30 ? setTopPosition(0) : setTopPosition(30);
            window.addEventListener('scroll', handleScroll);
        }
        window.addEventListener('scroll', handleScroll);
        headerStore.changeLink(pathname)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <div className={css.container}>
            <div style={{top: `${topPosition}px`}} className={css.headerTopContainer}>
                <div className={css.iconsContainer}>
                    {headerData.icons.map(item => (
                        <SocialLinkIcon key={`${item.iconBootstrap}_${item.to}`} link={item}/>
                    ))}
                    <LanguageToggle/>
                </div>
                <div className={css.linksContainer}>
                    {links.linksT.map(item => (
                        <NavLinkT key={`${item.title}_${item.to}`} isActive={headerStore.pathname.includes(item.to)}
                                  click={() => headerStore.changeLink(item.to)}
                                  link={item}/>
                    ))}
                </div>
            </div>

            <div className={css.headerBottomContainer}>
                <Link className={css.logoLink} to={RouterNames.HOME.to} onClick={() => headerStore.changeLink(RouterNames.HOME.to)}>
                    <TitleLogo value={instituteName}/>
                </Link>
                <div className={css.linksContainer}>
                    {links.linksB.map(item => (
                        item.subLinks ?
                            <NavSubLinksD key={`${item.title}_${item.to}`} link={item} isActive={headerStore.pathname.includes(item.to)}
                                          click={() => headerStore.changeLink(item.to)}/>
                            :
                            <NavLinkB key={`${item.title}_${item.to}`} click={() => headerStore.changeLink(item.to)}
                                      isActive={headerStore.pathname.includes(item.to)}
                                      link={item}/>
                    ))}
                    <Search color={"#fefefe"}/>
                </div>
            </div>
        </div>
    )
})

