import React, {FC} from 'react';
import TitleWithLine from "../../../../shared/ui/TitleWithLine/TitleWithLine";
import {Link} from "react-router-dom";
import css from "./InfoCard.module.scss"

interface InfoCardProps {
    link: string;
    img: string;
    title: string;
}

const InfoCard: FC<InfoCardProps> = ({link, img, title}) => {
    return (
        <Link to={link} className={css.card}>
            <img className={css.img} src={img} alt=""/>
            <TitleWithLine title={title}/>
        </Link>
    );
};

export default InfoCard;