import React, {FC} from 'react';
import css from "./Sidebar.module.scss"
import {headerData, instituteName} from "shared/enums/Data";
import {NavLinkB, NavLinkT} from "features/NavLink";
import {observer} from "mobx-react";
import {model} from "../../../../model/model";
import TitleLogo from "../../../../../../shared/ui/TitleLogo/TitleLogo";

interface SidebarProps {
    isOpen: boolean;
    close: () => void;
}

const Sidebar: FC<SidebarProps> = observer(({isOpen, close}) => {
    return (
        <div onClick={close} className={`${css.container} ${isOpen && css.active}`}>
            <div className={`${css.menu} ${isOpen && css.menuActive}`}>
                <div className={css.logoContainer}>
                    <TitleLogo  logoSize={"25vw"} withTitle={false} value={instituteName}/>
                </div>
                {headerData.linksT.map((item) => (
                    <NavLinkT isMobile={true} title={item.title}
                              to={item.to}
                              click={() => model.changeLink(item.to)}
                              isActive={model.pathname.includes(item.to)}/>
                ))}

                {headerData.linksB.map((item) => (
                    <NavLinkB isMobile={true} title={item.title}
                              to={item.to}
                              click={() => model.changeLink(item.to)}
                              isActive={model.pathname.includes(item.to)}/>
                ))}
            </div>
        </div>
    );
});

export default Sidebar;