import React, {FC} from 'react';
import Icon from "../../shared/ui/Icon/Icon";

interface SocialMediaLink{
    icon:string;
}
const SocialMediaLink:FC<SocialMediaLink> = ({}) => {
    return (
        <a>
            <Icon height={25} width={25} iconBootstrap={item.iconBootstrap}/>
        </a>
    );
};

export default SocialMediaLink;