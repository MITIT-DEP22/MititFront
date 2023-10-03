import React from 'react';
import css from './Icon.module.scss';

interface IconProps extends React.HTMLProps<HTMLElement> {
    iconBootstrap?: string;
    iconSvg?: string;
    height: number;
    width: number;
}

const Icon: React.FC<IconProps> = ({ iconSvg, height, width, iconBootstrap, className, ...restProps }) => {
    return (
        <i
            style={{ height: height, width: width }}
            className={`${iconBootstrap || ''} ${className || ''} ${css.icon}`}
            {...restProps}
        />
    );
};

export default Icon;
