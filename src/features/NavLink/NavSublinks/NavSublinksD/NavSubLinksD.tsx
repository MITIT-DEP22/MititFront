import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import css from "./NavSublinksD.module.scss";
import {NavLink} from "../../../../widgets/WrapperParts/Header/model/types";

interface NavSubLinksProps {
    isMobile?: boolean;
    link: NavLink;
    isActive: boolean;
    click: (any: any) => any;
}

const NavSubLinksD: FC<NavSubLinksProps> = ({click, link, isMobile, isActive}) => {
    const [isHovered, setHovered] = useState(false)

    return (
        <div onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)}
             className={`${css.navLinkB} ${isActive && css.navLinkB_active}`}>
            <span>{link.title}</span>
            {
                link.subLinks &&
                <>
                    <div className={`${css.triangle} ${isHovered && css.triangle_active}`}/>
                    <div className={`${css.sublinksContainer} ${isHovered && css.sublinksContainer_active}`}>
                        {link.subLinks.map((item) => (
                            <Link key={`${item.id}_${item.title}`} onClick={click} className={css.sublink}
                                  to={item.to}>{item.title}</Link>
                        ))}
                    </div>
                </>
            }
        </div>
    );
};

export default NavSubLinksD;