import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import css from "./NavSublinks.module.scss";
import {NavLink} from "entities/link";

interface NavSublinksProps {
    isMobile?: boolean;
    link: NavLink;
    isActive: boolean;
    click: (any: any) => any;
}

const NavSublinks: FC<NavSublinksProps> = ({click, link, isMobile, isActive}) => {
    const [isHovered, setHovered] = useState(false)

    return (
        <div onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)}
             className={`${css.navLinkB} ${isMobile && css.navLinkBMobile} ${isActive && css.navLinkB_active}`}>
            <span>{link.title}</span>
            {
                link.sublinks &&
                <>
                    <div className={`${css.triangle} ${isHovered && css.triangle_active}`}/>
                    <div className={`${css.sublinksContainer} ${isHovered && css.sublinksContainer_active}`}>
                        {link.sublinks.map(item => (
                            <Link onClick={click} className={css.sublink} to={link.to}>{item.title}</Link>
                        ))}
                    </div>
                </>
            }

        </div>
    );
};

export default NavSublinks;