import React from 'react';
import css from "./AdditionalLinks.module.scss"
import AdditionalLink from "./AdditionalLink/AdditionalLink";


const links = [
    {
        title: "Новини Міністерства\nОборони України",
        img: require("../../../../../assets/additionalLinksImages/DoD.png"),
        link: "https://www.mil.gov.ua/en/news/"
    },
    {
        title: "Послухати військове радіо",
        img: require("../../../../../assets/additionalLinksImages/ArmyFM.png"),

        link: "https://www.armyfm.com.ua/"
    },
    {
        title: "Новини Командування військ\nзв‘язку та кібербезпеки ЗСУ",
        img: require("../../../../../assets/additionalLinksImages/CoST.png"),
        link: "/"
    },

]

export const AdditionalLinks = () => {
    return (
        <div className={css.container}>
            {links.map(item => (
                <AdditionalLink img={item.img} link={item.link} title={item.title}/>
            ))}
        </div>
    );
};