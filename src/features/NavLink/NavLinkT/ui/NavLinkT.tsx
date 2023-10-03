import React, {FC} from 'react';
import {Link} from "react-router-dom";
import css from "./NavLinkT.module.scss"

interface NavLinkProps {
    title: string;
    to: string;
    click: (any: any) => any;
    isActive: boolean;
}

export const NavLinkT: FC<NavLinkProps> = ({title, to, click, isActive}) => {
    return (
            <Link onClick={click} className={`${css.navLinkT}`} to={to}>
                <span className={`${isActive && css.navLinkT_active}`}>{title}</span>
            </Link>
    );
};
