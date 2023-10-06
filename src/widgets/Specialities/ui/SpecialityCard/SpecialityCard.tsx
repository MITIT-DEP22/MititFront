import React, {FC} from 'react';
import css from "./SpecialityCard.module.scss"
import {Link} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";
import TitleWithLine from "shared/ui/TitleWithLine/TitleWithLine";


interface SpecialityCardProps {
    id: number;
    title: string,
    description: string,
    img: string
}

const SpecialityCard: FC<SpecialityCardProps> = ({title, description, img, id}) => {
    return (
        <div className={css.card}>
            <img className={css.cardImg}
                 src={img}
                 alt=""/>
            <TitleWithLine title={title}/>
            <p className={css.cardDescription}>{description}</p>
            <div className={css.detailsContainer}>
                <Link className={css.details} to={RouterNames.SPECIALITIES + `${id}`}>Детальніше</Link>
            </div>
        </div>
    );
};

export default SpecialityCard;