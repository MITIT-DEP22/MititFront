import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import css from "./NavSublinksD.module.scss";
import {NavLink} from "../../../../entities/link";

interface NavSublinksProps {
    isMobile?: boolean;
    link: NavLink;
    isActive: boolean;
    click: (any: any) => any;
}

const NavSublinksD: FC<NavSublinksProps> = ({click, link, isMobile, isActive}) => {
    const [isHovered, setHovered] = useState(false)

    return (
        <div onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)}
             className={`${css.navLinkB} ${isActive && css.navLinkB_active}`}>
            <span>{link.title}</span>
            {
                link.sublinks &&
                <>
                    <div className={`${css.triangle} ${isHovered && css.triangle_active}`}/>
                    <div className={`${css.sublinksContainer} ${isHovered && css.sublinksContainer_active}`}>
                        {link.sublinks.map(item => (
                            <Link onClick={click} className={css.sublink}
                                  to={`${item.to}/${item.id}`}>{item.title}</Link>
                        ))}
                    </div>
                </>
            }
        </div>
    );
};

export default NavSublinksD;