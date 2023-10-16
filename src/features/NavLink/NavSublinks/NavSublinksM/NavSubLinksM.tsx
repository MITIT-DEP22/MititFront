import React, {FC, useState} from 'react';
import css from "./NavSubLinksM.module.scss"
import Collapse from "@kunukn/react-collapse";
import {NavLink, SubLink} from "../../../../widgets/WrapperParts/Header/model/types";
import {Link} from "react-router-dom";

interface NavSubLinksMProps {
    isActive: boolean;
    link:NavLink;
    goTo: (any: any) => any;
}

const NavSubLinksM: FC<NavSubLinksMProps> = ({isActive, goTo, link}) => {

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
                        {link.subLinks?.map(item => (
                            <Link onClick={() => goTo(link.to)} className={css.link}
                                  to={`${item.to}/${item.id}`}>{item.title}</Link>
                        ))}
                    </div>
                )}/>
            </div>
        );
    }
;

export default NavSubLinksM;