import React, {FC} from 'react';

interface IconProps {
    link: string;
    icon: string;
}

const Icon: FC<IconProps> = ({link, icon}) => {
    return (
        <a href={link}>
            <i className={icon}/>
        </a>
    );
};

export default Icon;