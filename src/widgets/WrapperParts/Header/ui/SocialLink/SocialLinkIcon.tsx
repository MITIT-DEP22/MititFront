import React, {FC} from 'react';
import css from "./SocialLink.module.scss";
import Icon from "shared/ui/Icon/Icon";
import {SocialLink} from "entities/social-link";

interface LinkProps {
    link: SocialLink;
    color?:string;
}

const SocialLinkIcon: FC<LinkProps> = ({link, color}) => {
    return (
        <a style={{color:color}} className={css.socLink} href={link.to}>
            <Icon height={link.height} width={link.width} iconBootstrap={link.iconBootstrap}/>
        </a>
    );
};

export default SocialLinkIcon;