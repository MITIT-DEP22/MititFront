import React, {FC} from 'react';
import css from "./Sidebar.module.scss"
import {headerData, instituteName} from "shared/enums/Data";
import {NavLinkB, NavLinkT} from "features/NavLink";
import {observer} from "mobx-react";
import {model} from "../../../../model/model";
import TitleLogo from "shared/ui/TitleLogo/TitleLogo";
import Icon from "shared/ui/Icon/Icon";
import {LanguageToggle} from "features/LanguageToggle";
import Search from "../../../Search/Search";
import NavSublinksM from "../../../../../../features/NavLink/NavSublinks/NavSublinksM/NavSublinksM";

interface SidebarProps {
    isOpen: boolean;
    close: () => void;
}

const Sidebar: FC<SidebarProps> = observer(({isOpen, close}) => {
    return (
        <div className={`${css.container} ${isOpen && css.active}`}>
            <div className={`${css.menu} ${isOpen && css.menuActive}`}>
                <div className={css.logoContainer}>
                    <TitleLogo logoSize={"25vw"} withTitle={false} value={instituteName}/>
                </div>

                {headerData.linksT.map((item) => (
                    <NavLinkT isMobile={true} link={item}
                              click={() => {
                                  model.changeLink(item.to)
                                  close()
                              }}
                              isActive={model.pathname.includes(item.to)}/>
                ))}

                {headerData.linksB.map((item) => (
                    item.sublinks?
                        <NavSublinksM  click={() => {
                            model.changeLink(item.to)
                            close()
                        }} isActive={model.pathname.includes(item.to)}  link={item}/>
                        :
                    <NavLinkB isMobile={true} link={item}
                              click={() => {
                                  model.changeLink(item.to)
                                  close()
                              }}
                              isActive={model.pathname.includes(item.to)}/>
                ))}

                <div className={css.iconsContainer}>
                    {headerData.icons.map(item => (
                        <Icon height={item.height} width={item.width} iconBootstrap={item.iconBootstrap}/>
                    ))}
                </div>

                <Search mobile/>
                <LanguageToggle isMobile/>

            </div>
            <div className={`${css.close} ${isOpen && css.close_active}`} onClick={close}/>
        </div>
    );
});

export default Sidebar;