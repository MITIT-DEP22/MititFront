import React, {FC} from 'react';
import css from "./Sidebar.module.scss"

interface SidebarProps {
    isOpen: boolean;
    close: () => void;
}

const Sidebar:FC<SidebarProps> = ({isOpen, close}) => {
    return (
        <div onClick={close} className={`${css.container} ${isOpen && css.active}`}>
            <div className={`${css.menu} ${isOpen && css.menuActive}`}>

            </div>
        </div>
    );
};

export default Sidebar;