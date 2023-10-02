import React, {FC} from 'react';
import css from "./Icon.module.scss"
interface IconProps {
    iconBootstrap?: string;
    iconSvg?: string;
    height: number;
    width: number;
    className?:string;
}

const Icon: FC<IconProps> = ({iconSvg, height, width, iconBootstrap, className}) => {
    return (
        <i  style={{height: height, width: width}} className={`${iconBootstrap} ${className} ${css.icon}`}/>
    );
};

export default Icon;