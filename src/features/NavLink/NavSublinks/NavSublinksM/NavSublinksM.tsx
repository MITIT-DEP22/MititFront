import React, {FC, useState} from 'react';
import {NavLink} from "entities/link";
import {Link} from "react-router-dom";
import css from "./NavSublinksM.module.scss"

interface NavSublinksMProps {
    link: NavLink;
    click: (any: any) => any;
    isActive: boolean;
}

const NavSublinksM: FC<NavSublinksMProps> = ({link, click, isActive}) => {

    const [isOpen, setIsOpen] = useState(false)

    const openLinks = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div onClick={openLinks}>
            {/*<NavLinkT link={link} click={click} isActive={isActive}/>*/}
            {link.title}
            <div className={`${css.container} ${isOpen && css.container_active}`}>
                {link.sublinks?.map(item => (
                    <Link to={item.to}>{item.title}</Link>
                ))}
            </div>
        </div>
    );
};

export default NavSublinksM;