import React, {FC} from 'react';
import css from "./Specialities.module.scss"

interface SpecialitiesBlock {
    specialities: string[];
}

const Specialities: FC<SpecialitiesBlock> = ({specialities}) => {
    return (
        <div className={css.container}>
            <p>ЗА СПЕЦІАЛЬНІСТЮ:</p>
            <ul className={css.list}>
                {specialities?.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Specialities;