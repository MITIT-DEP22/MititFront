import React, {FC, useEffect, useState} from 'react';
import css from "./Sidebar.module.scss"
import {Link} from "react-router-dom";

interface SidebarProps {
    isOpen: boolean;
    close: (any: any) => any;
}

const Sidebar: FC<SidebarProps> = ({isOpen, close}) => {

    useEffect(() => {
        const root = document.getElementById("root")
        // @ts-ignore
        isOpen ? root.style.overflow = 'hidden' : root.style.overflow = 'auto'
    }, [isOpen]);


    return (
        <>
            <div className={`${css.container} ${isOpen && css.containerActive}`}>
                <div className={css.menu}>
                    <Link to={"/"}>
                        Some
                    </Link>
                    <Link to={"/"}>
                        Some
                    </Link>
                    <Link to={"/"}>
                        Some
                    </Link>
                    <Link to={"/"}>
                        Some
                    </Link>
                    <Link to={"/"}>
                        Some
                    </Link>
                    <Link to={"/"}>
                        Some
                    </Link>
                    <Link to={"/"}>
                        Some
                    </Link>

                </div>
                <div onClick={close} className={` ${css.closeContainer}  ${isOpen && css.closeContainerActive}`}/>
            </div>
        </>
    );
};

export default Sidebar;