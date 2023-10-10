import React, {FC, useEffect, useState} from 'react';
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
                <div className={`${css.title} }`}>
                    {link.title}
                    <div className={` ${isOpen && css.title_active}`}>
                        <i style={{fontSize: 24}} className={`bi bi-caret-left`}></i>
                    </div>
                </div>
                <div className={`${css.container} ${isOpen && css.container_active}`}>
                    {link.sublinks?.map(item => (
                        <Link className={css.link} to={`${item.to}/${item.id}` }>{item.title}</Link>
                    ))}
                </div>
            </div>
        );
    }
;

export default NavSublinksM;