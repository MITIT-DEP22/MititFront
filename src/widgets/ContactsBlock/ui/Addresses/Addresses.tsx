import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import css from "./Addresses.module.scss"
import Title from "../Title/Title";
import AddressDataLi from "./ui/AddressDataLi";
import {ImageComponent} from "features/ImageComponent";
import $api from "../../../../shared/api";
import {faculties} from "../../../../shared/enums/Data";

const address = "01011, м. Київ, вул. Московська, 45/1"

const addressesData = [
    {
        emails: [
            "viti@viti.edu.ua",
            "viti@post.mil.gov.ua"
        ],
        title: "Електронна пошта:"
    },
    {
        emails: [
            "vitivstup@viti.edu.ua",
            "vitiinfo@post.mil.gov.ua",
            "vitivstup@ukr.net"
        ],
        title: "Електронна пошта для питань щодо вступу:"
    },
    {
        emails: [
            "viti@dod.ua",
        ],
        title: "Електронна пошта в мережі ЗСУ:"
    },
]

const instructionForBecome = "Залізничний вокзал Київ-Пасажирський, метро “Вокзальна”, їхати до станції метро “Театральна”, \n" +
    "перехід на станцію метро “Золоті ворота”, їхати до станції метро “Печерська”"

const Addresses = () => {

    return (
        <>
            <SectionTitle title={"Адреса"}/>
            <div className={css.container}>
                <ImageComponent className={css.img} imgId={155} alt=""/>
                <div className={css.addressesContainer}>
                    <ul>
                        <li>{address}</li>
                        {addressesData.map(item => (
                            <AddressDataLi emails={item.emails} emailTitle={item.title}/>
                        ))}
                    </ul>

                    <Title margin={"25px 0 0 0"} value={"Як дібратися?"}/>
                    <div className={css.instruction}>
                        <span>&#9679;</span>{instructionForBecome}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addresses;