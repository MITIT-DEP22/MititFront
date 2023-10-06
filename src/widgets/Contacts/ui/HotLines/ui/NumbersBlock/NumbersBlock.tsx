import React, {FC} from 'react';
import css from "./NumbersBlock.module.scss";
import Title from "../../../Title/Title";
import SuperiorNumber from "../SuperiorNumber/SuperiorNumber";

interface NumbersBlockProps {
    title: string;
    titleNumbers: string;
    superiorNumbers: any[];
}

const NumbersBlock: FC<NumbersBlockProps> = ({title, titleNumbers, superiorNumbers}) => {
    return (
        <div>
            <div className={css.titleContainer}>
                <Title value={title}/>
                <div>{titleNumbers}</div>
            </div>

            <ul className={css.numbersContainer}>
                {
                    superiorNumbers.map(item => (
                        <li><SuperiorNumber position={item.position} number={item.number}/></li>
                    ))
                }
            </ul>
        </div>

    );
};

export default NumbersBlock;