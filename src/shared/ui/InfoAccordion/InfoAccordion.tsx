import React, {FC, useState} from 'react';
import css from "./InfoAccordion.module.scss";
import Collapse from "@kunukn/react-collapse";
import TextBlocks from "../TextBlocks/TextBlocks";
import {AccordionElement} from "entities/accordion-element";

interface InfoAccordion {
    item: AccordionElement
}

const InfoAccordion: FC<InfoAccordion> = ({item}) => {
    const [isOpen, setsOpen] = useState(false)

    const toggle = () => {
        setsOpen(!isOpen)
    }
    return (
        <div className={css.container}>
            <div onClick={toggle} className={css.toggleContainer}>
                <p className={css.toggleTitle}>{item.title}</p>
                <button className={`${css.toggleBtn} ${isOpen && css.toggleBtn_active}`}>
                    <i className="bi bi-caret-left"></i>
                </button>
            </div>
            <Collapse className={css.collapse} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" isOpen={isOpen}
                      render={() => (
                          <TextBlocks textBlocks={item.textBlocks}/>
                      )}>
            </Collapse>
        </div>
    );
};

export default InfoAccordion;