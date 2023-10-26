import React, {FC, useState} from 'react';
import css from "./NavSubLinksM.module.scss"
import Collapse from "@kunukn/react-collapse";
import {NavLink, SubLink} from "../../../../widgets/WrapperParts/Header/model/types";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
import {languageToggleStore} from "../../../LanguageToggle/model/languageToggleStore";

interface NavSubLinksMProps {
    isActive: boolean;
    link: NavLink;
    goTo: (any: any) => any;
}

const NavSubLinksM: FC<NavSubLinksMProps> = observer(({isActive, goTo, link}) => {

    const [isOpen, setIsOpen] = useState(false)

    const {activeLanguage} = languageToggleStore
    const openLinks = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div onClick={openLinks}>
            <div className={`${css.title} ${isActive && css.link_active} }`}>
                {activeLanguage == "ua" ? link.titleUA : link.titleENG}
                <div className={` ${isOpen && css.title_active}`}>
                    <i style={{fontSize: 24}} className={`bi bi-caret-left`}></i>
                </div>
            </div>
            <Collapse isOpen={isOpen} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" render={() => (
                <div className={css.container}>
                    {link.subLinks?.map(item => (
                        <Link onClick={() => goTo(link.to)} className={css.link}
                              to={item.to}>
                            {activeLanguage == "ua" ? item.titleUA : item.titleENG}
                        </Link>
                    ))}
                </div>
            )}/>
        </div>
    );
});

export default NavSubLinksM;