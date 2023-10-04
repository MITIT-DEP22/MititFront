import React from 'react';
import css from "./SpecialityCard.module.scss"
import {Link} from "react-router-dom";
import {RouterNames} from "../../../../shared/enums/RouterNames";

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
            <p className={css.cardTitle}>
                <div className={css.line}/>
                {cardData.title}
            </p>
            <p className={css.cardDescription}>{cardData.description}</p>
            <div className={css.detailsContainer}>
                <Link className={css.details}  to={RouterNames.SPECIALITIES + "/:id"}>Детальніше</Link>
            </div>
        </div>
    );
};

export default SpecialityCard;