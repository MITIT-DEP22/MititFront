import React, {FC} from 'react';
import css from "./SuperiorNumber.module.scss"

interface SuperiorNumberProps {
    position: string;
    number: string;
    name?: string;
}

const SuperiorNumber: FC<SuperiorNumberProps> = ({position, number, name}) => {
    return (
        <div className={css.container}>
            <p>{position}</p>{name && <p className={css.name}>{name}:</p>}<p>{number}</p>
        </div>
    );
};

export default SuperiorNumber;