import React, {FC, useEffect, useState} from 'react';
import {NavLink} from "entities/link";
import {Link} from "react-router-dom";
import css from "./NavSublinksM.module.scss"
import {model} from "../../../../widgets/Header/model/model";
import Collapse from "@kunukn/react-collapse";

interface NavSublinksMProps {
    link: NavLink;
    isActive: boolean;
    goTo: (any: any) => any;
}

const NavSublinksM: FC<NavSublinksMProps> = ({link, isActive, goTo}) => {

        const [isOpen, setIsOpen] = useState(false)

        const openLinks = () => {
            setIsOpen(!isOpen)
        }


        return (
            <div onClick={openLinks}>
                <div className={`${css.title} ${isActive && css.link_active} }`}>
                    {link.title}
                    <div className={` ${isOpen && css.title_active}`}>
                        <i style={{fontSize: 24}} className={`bi bi-caret-left`}></i>
                    </div>
                </div>
                <Collapse isOpen={isOpen} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" render={() => (
                    <div className={css.container}>
                        {link.sublinks?.map(item => (
                            <Link onClick={() => goTo(link.to)} className={css.link}
                                  to={`${item.to}/${item.id}`}>{item.title}</Link>
                        ))}
                    </div>
                )}>

                </Collapse>
            </div>
        );
    }
;

export default NavSublinksM;