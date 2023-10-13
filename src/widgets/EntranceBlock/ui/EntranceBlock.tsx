import React, {useState} from 'react';
import css from "./EntranceBlock.module.scss"
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import Collapse from '@kunukn/react-collapse';

export const EntranceBlock = () => {
    const [isOpen, setsOpen] = useState(false)

    const toggle = () => {
        setsOpen(!isOpen)
    }


    return (
        <div className={css.container}>
            <SectionTitle title={"Вступникам"}/>
            <button onClick={toggle}>togglke</button>
            <Collapse transition="height 300ms cubic-bezier(.4, 0, .2, 1)" isOpen={isOpen} render={collapseState => (
                <div>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                    <p>asdads</p>
                </div>
            )}>

            </Collapse>
            <div className={`${css.burger} ${isOpen && css.burger_open}`}>

            </div>
        </div>
    );
};
