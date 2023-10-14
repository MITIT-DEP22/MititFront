import React, {FC} from 'react';
import TitleWithLine from "shared/ui/TitleWithLine/TitleWithLine";
import {Link} from "react-router-dom";
import css from "./InfoCard.module.scss"
import {InstituteInfo} from "entities/institute-info";
import {ImageComponent} from "features/ImageComponent";

interface InfoCardProps {
    info: InstituteInfo
}

const InfoCard: FC<InfoCardProps> = ({info}) => {
    return (
        <Link to={info.link} className={css.card}>
            <ImageComponent imgId={info.img.id}/>
            <TitleWithLine title={info.title}/>
        </Link>
    );
};

export default InfoCard;