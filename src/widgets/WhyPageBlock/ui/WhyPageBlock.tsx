import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import css from "./WhyPageBlock.module.scss"
import {why_mitit} from "shared/enums/Data";
import WhyMititCard from "./TextBlockSpecial/WhyMititCard";

export const WhyPageBlock = () => {
    return (
        <div className={css.container}>

            <SectionTitle title={"Чому ВІТІ?"}/>
            <div className={css.headerContainer}>
                <img
                    src="https://s3-alpha-sig.figma.com/img/7204/7c85/2d15bc661b035fb053f9a9ddcc423e00?Expires=1698019200&Signature=Y8al6r2zhCoCSlSjEgskbCGmV4wLB26VSr0xaFwxGXYHeZJZrWnng6CFd2L5muw5mxjz541PVaF~sKTU8Z4dy9OGjwD29oeqZk9I53l5Ovv4XVSLWkw7p-8JMNLH3SMZcX87p5PvglAme9sOXLvxRvt9JoigS1C5cdZZI3cBqNODaldW9O5Q7aXs6pwN4fwktC7pr1b~yw7AiNKkfSSyzT80Jyf~fxobkO0SaViRgn0ql~i-3-867XyIkpraM~oUJBYfmCBTMnGG18k0LHkn0Linu3Na5FI93WYFb2TXt7xzVL9BdVUYXpcosNiVJZYjO6O2xeHCLbRE~lXcmvRa5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""/>
                <WhyMititCard why={why_mitit[0]}/>
            </div>
            {why_mitit.slice(1, why_mitit.length).map(item => (
                <WhyMititCard why={item}/>
            ))}
            <p className={css.endText}>ТИ І ТВОЯ РОДИНА БУДЕТЕ СОЦІАЛЬНО ЗАХИЩЕНІ!</p>
        </div>
    );
};
