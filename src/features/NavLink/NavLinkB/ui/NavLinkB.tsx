import React, {FC} from 'react';
import css from "./NavLinkB.module.scss"
import {Link} from "react-router-dom"
import {NavLink} from "../../../../widgets/WrapperParts/Header/model/types";

interface NavLinkProps {
    isMobile?: boolean;
    link: NavLink;
    isActive: boolean;
    click: (any: any) => any;
}

export const NavLinkB: FC<NavLinkProps> = ({link, isActive, click, isMobile}) => {
    return (
        <Link onClick={click}
              className={`${css.navLinkB} ${isMobile && css.navLinkBMobile} ${isActive && css.navLinkB_active}`}
              to={link.to}>
            <span>{link.title}</span>
        </Link>
    );
};
