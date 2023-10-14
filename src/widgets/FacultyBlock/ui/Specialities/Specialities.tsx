import React, {FC} from 'react';
import css from "./Specialities.module.scss"
import {Speciality} from "../../../../entities/speciality";

interface SpecialitiesBlock {
    specialities: Speciality[];
}

const Specialities: FC<SpecialitiesBlock> = ({specialities}) => {
    return (
        <div className={css.container}>
            <p>ЗА СПЕЦІАЛЬНІСТЮ:</p>
            <ul className={css.list}>
                {specialities?.map(item => (
                    <li>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Specialities;