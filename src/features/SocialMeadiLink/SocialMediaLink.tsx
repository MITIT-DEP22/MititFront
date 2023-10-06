import React, {FC} from 'react';
import Icon from "shared/ui/Icon/Icon";

interface SocialMediaLink {
    icon: string;
}

const SocialMediaLink: FC<SocialMediaLink> = ({icon}) => {
    return (
        <a>
            <Icon height={25} width={25} iconBootstrap={icon}/>
        </a>
    );
};

export default SocialMediaLink;