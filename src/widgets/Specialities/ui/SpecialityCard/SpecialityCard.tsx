import React from 'react';
import css from "./SpecialityCard.module.scss"
import {Link} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";
import TitleWithLine from "shared/ui/TitleWithLine/TitleWithLine";

const SpecialityCard = () => {

    let cardData = {
        title: "Компʼ.терні науки",
        description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
        img: "https://loremflickr.com/640/480/people"
    }
    return (
        <div className={css.card}>
            <img className={css.cardImg}
                 src={cardData.img}
                 alt=""/>
            <TitleWithLine title={cardData.title}/>
            <p className={css.cardDescription}>{cardData.description}</p>
            <div className={css.detailsContainer}>
                <Link className={css.details} to={RouterNames.SPECIALITIES + "/:id"}>Детальніше</Link>
            </div>
        </div>
    );
};

export default SpecialityCard;