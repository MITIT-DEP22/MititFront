import React, {FC} from 'react';
import css from "./SpecialityCard.module.scss"
import {Link} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";
import TitleWithLine from "shared/ui/TitleWithLine/TitleWithLine";
import {Speciality} from "../../../../entities/speciality";
import {ImageComponent} from "../../../../features/ImageComponent";


interface SpecialityCardProps {
    speciality: Speciality
}

const SpecialityCard: FC<SpecialityCardProps> = ({speciality}) => {
    return (
        <div className={css.card}>
            <ImageComponent imgId={speciality.img.id}/>
            <TitleWithLine title={speciality.title}/>
            <p className={css.cardDescription}>{speciality.description}</p>
            <div className={css.detailsContainer}>
                <Link className={css.details} to={RouterNames.SPECIALITIES + `${speciality.id}`}>Детальніше</Link>
            </div>
        </div>
    );
};

export default SpecialityCard;