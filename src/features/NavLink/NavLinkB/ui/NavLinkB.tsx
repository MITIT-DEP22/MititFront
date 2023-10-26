import React, {FC} from 'react';
import css from "./NavLinkB.module.scss"
import {Link} from "react-router-dom"
import {NavLink} from "../../../../widgets/WrapperParts/Header/model/types";
import {languageToggleStore} from "../../../LanguageToggle/model/languageToggleStore";
import {observer} from "mobx-react";

interface NavLinkProps {
    isMobile?: boolean;
    link: NavLink;
    isActive: boolean;
    click: (any: any) => any;
}

export const NavLinkB: FC<NavLinkProps> = observer(({link, isActive, click, isMobile}) => {
    const {activeLanguage} = languageToggleStore

    return (
        <Link onClick={click}
              className={`${css.navLinkB} ${isMobile && css.navLinkBMobile} ${isActive && css.navLinkB_active}`}
              to={link.to}>
            <span>{activeLanguage == "ua" ? link.titleUA : link.titleENG}</span>
        </Link>
    );
});
