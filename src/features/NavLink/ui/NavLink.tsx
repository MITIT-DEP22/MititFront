import React, {FC} from 'react';
import {Link} from "react-router-dom";
import css from "./NavLink.module.scss"
interface NavLinkProps {
    title: string;
    to: string;
}

export const NavLink: FC<NavLinkProps> = ({title, to}) => {
    return (
        <Link className={css.navLink} to={to}>
            <span>{title}</span>
        </Link>
    );
};
