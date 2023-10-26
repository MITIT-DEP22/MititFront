import React, {FC} from 'react';
import {Link} from "react-router-dom";
import css from "./NavLinkT.module.scss"
import {NavLink} from "../../../../widgets/WrapperParts/Header/model/types";
import {observer} from "mobx-react";
import {languageToggleStore} from "../../../LanguageToggle/model/languageToggleStore";

interface NavLinkProps extends React.HTMLProps<HTMLElement> {
    isMobile?: boolean;
    link: NavLink;
    click: (any: any) => any;
    isActive: boolean;
}

export const NavLinkT: FC<NavLinkProps> = observer(({link, click, isActive, isMobile}) => {
    const {activeLanguage} = languageToggleStore
    return (
        <Link onClick={click} className={`${css.navLinkT} ${isMobile && css.navLinkTMobile}`} to={link.to}>
            <span
                className={`${isActive && (isMobile ? css.navLinkTMobile_active : css.navLinkT_active)}`}>{activeLanguage == "ua" ? link.titleUA : link.titleENG}</span>
        </Link>
    );
});
