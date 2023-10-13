import React, {useState} from 'react';
import css from "./EntranceBlock.module.scss"
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import Collapse from '@kunukn/react-collapse';
import {entrances} from "../../../shared/enums/Data";
import TextBlocks from "../../../shared/ui/TextBlocks/TextBlocks";

export const EntranceBlock = () => {
    const [isOpen, setsOpen] = useState(false)

    const toggle = () => {
        setsOpen(!isOpen)
    }

    return (
        <div className={css.container}>
            <SectionTitle title={"Вступникам"}/>
            {entrances.map(item => (
                <>
                    <div>
                        <button onClick={toggle}>{item.title}</button>
                    </div>
                    <Collapse transition="height 300ms cubic-bezier(.4, 0, .2, 1)" isOpen={isOpen}
                              render={() => (
                                  <TextBlocks textBlocks={item.textBlocks}/>
                              )}>
                    </Collapse>
                </>
            ))}

        </div>
    );
};
