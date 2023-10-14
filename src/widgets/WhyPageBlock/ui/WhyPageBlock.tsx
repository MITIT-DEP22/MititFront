import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import css from "./WhyPageBlock.module.scss"
import {why_mitit} from "shared/enums/Data";
import WhyMititCard from "./TextBlockSpecial/WhyMititCard";
import {ImageComponent} from "../../../features/ImageComponent";

export const WhyPageBlock = () => {
    return (
        <div className={css.container}>

            <SectionTitle title={"Чому ВІТІ?"}/>
            <div className={css.headerContainer}>
                {why_mitit[0].images &&
                    <ImageComponent imgId={why_mitit[0].images[0].id}/>
                }
                <WhyMititCard why={why_mitit[0]}/>
            </div>
            {why_mitit.slice(1, why_mitit.length).map(item => (
                <WhyMititCard why={item}/>
            ))}
            <p className={css.endText}>ТИ І ТВОЯ РОДИНА БУДЕТЕ СОЦІАЛЬНО ЗАХИЩЕНІ!</p>
        </div>
    );
};
