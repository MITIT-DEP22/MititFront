import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import css from "./NavSublinksD.module.scss";
import {NavLink} from "../../../../widgets/WrapperParts/Header/model/types";
import {observer} from "mobx-react";
import {languageToggleStore} from "../../../LanguageToggle/model/languageToggleStore";

interface NavSubLinksProps {
    isMobile?: boolean;
    link: NavLink;
    isActive: boolean;
    click: (any: any) => any;
}

const NavSubLinksD: FC<NavSubLinksProps> = observer(({click, link, isMobile, isActive}) => {
    const [isHovered, setHovered] = useState(false)
    const {activeLanguage} = languageToggleStore
    return (
        <div onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)}
             className={`${css.navLinkB} ${isActive && css.navLinkB_active}`}>
            <span>{activeLanguage == "ua" ? link.titleUA : link.titleENG}</span>
            {
                link.subLinks &&
                <>
                    <div className={`${css.triangle} ${isHovered && css.triangle_active}`}/>
                    <div className={`${css.sublinksContainer} ${isHovered && css.sublinksContainer_active}`}>
                        {link.subLinks.map((item, index) => (
                            <Link key={`${index}_${item.titleUA}`} onClick={click} className={css.sublink}
                                  to={item.to}>{activeLanguage == "ua" ? item.titleUA : item.titleENG}</Link>
                        ))}
                    </div>
                </>
            }
        </div>
    );
});

export default NavSubLinksD;