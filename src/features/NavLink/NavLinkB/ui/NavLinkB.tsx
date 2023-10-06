import React, {FC} from 'react';
import {Link} from "react-router-dom";
import css from "./NavLinkB.module.scss"

interface NavLinkProps {
    title: string;
    to: string;
    isActive: boolean;
    click: (any: any) => any;
}

export const NavLinkB: FC<NavLinkProps> = ({title, to, isActive, click}) => {
    return (
        <Link onClick={click} className={`${css.navLinkB} ${isActive && css.navLinkB_active}`} to={to}>
            <span>{title}</span>
        </Link>
    );
};
