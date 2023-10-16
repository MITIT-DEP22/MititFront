import React, {FC, useRef, useState} from 'react';
import Icon from "../../../../../shared/ui/Icon/Icon";
import css from "./Search.module.scss";


interface SearchProps {
    color?: string;
    mobile?: boolean;
}

const Search: FC<SearchProps> = ({color, mobile}) => {

    const [isOpen, setIsOpen] = useState(false)
    const input = useRef(null)

    const openSearch = () => {
        setIsOpen(true)
        // @ts-ignore
        input.current.focus()
    }

    return (
        <>
            <div className={`${css.container}  ${isOpen && css.containerActive} ${mobile && css.containerMobile}`}>
                <input ref={input} onBlurCapture={() => setIsOpen(false)} placeholder={"Пошук..."}
                       className={`${css.input} ${isOpen && css.inputActive} ${mobile && css.inputMobile}`}
                       type={"text"}/>
                <Icon onClick={openSearch} style={{color: color}} className={`${css.search} ${css.searchMobile}`} height={100}
                      width={50}
                      iconBootstrap={"bi bi-search"}/>
            </div>
        </>
    );
};

export default Search;