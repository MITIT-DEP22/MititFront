import React, {FC} from 'react';
import {Link} from "react-router-dom";
import css from "./NavLinkT.module.scss"

interface NavLinkProps extends React.HTMLProps<HTMLElement>{
    isMobile?:boolean;
    title: string;
    to: string;
    click: (any: any) => any;
    isActive: boolean;
}

export const NavLinkT: FC<NavLinkProps> = ({title, to, click, isActive, isMobile}) => {
    return (
            <Link  onClick={click} className={`${css.navLinkT} ${isMobile && css.navLinkTMobile}`} to={to}>
                <span className={`${isActive && css.navLinkT_active}`}>{title}</span>
            </Link>
    );
};
