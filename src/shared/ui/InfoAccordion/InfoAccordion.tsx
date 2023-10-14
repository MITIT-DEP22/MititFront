import React, {FC, useState} from 'react';
import css from "./InfoAccordion.module.scss";
import Collapse from "@kunukn/react-collapse";
import TextBlocks from "../TextBlocks/TextBlocks";
import {AccordionElement} from "entities/entrance";

interface InfoAccordion {
    entrance: AccordionElement
}

const InfoAccordion: FC<InfoAccordion> = ({entrance}) => {
    const [isOpen, setsOpen] = useState(false)

    const toggle = () => {
        setsOpen(!isOpen)
    }
    return (
        <div className={css.container}>
            <div className={css.toggleContainer}>
                <p className={css.toggleTitle}>{entrance.title}</p>
                <button className={`${css.toggleBtn} ${isOpen && css.toggleBtn_active}`} onClick={toggle}>
                    <i className="bi bi-caret-left"></i>
                </button>
            </div>
            <Collapse transition="height 300ms cubic-bezier(.4, 0, .2, 1)" isOpen={isOpen}
                      render={() => (
                          <TextBlocks textBlocks={entrance.textBlocks}/>
                      )}>
            </Collapse>
        </div>
    );
};

export default InfoAccordion;