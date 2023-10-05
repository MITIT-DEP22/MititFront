import React from 'react';
import SectionTitle from "../../../../shared/ui/SectionTitle/SectionTitle";
import css from "./Addresses.module.scss"
import Title from "../Title/Title";
import AddressDataLi from "./ui/AddressDataLi";

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

const img = "https://s3-alpha-sig.figma.com/img/64e5/e148/cfac6d6479688bf56e56c96905845706?Expires=1697414400&Signature=fAm44bml00uOUj7VuvYEiWh78ZIvguSfY3mr8cmG~opepftmKWhQmI~q5MtvFsI-1x28iLXeoEe7GR0LqnPgskIDKZx1cyTeAE3YI2P0a49P0Md0vOqfQ2CYqoUQa3IpVmo6b1oM2QVyK15oWrG7~PkqLtUxqbT6~6-lhkVYqfHnHC29tBYUJhVcY72KBnwl5V~WY3Nh0dT50AtsVervT1RE0aIm4cBAvSr7gFAzU4PqPYHHRKQWUIsbxWLv3BF6Qb8hpjaRX37LMunb2Q0JOTn8BIPI2iXVar1XQxqpYMCxEu04CUsZyY9g6P40JZfCc6THislTL98i9Gb7rQIIEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const instructionForBecome = "Залізничний вокзал Київ-Пасажирський, метро “Вокзальна”, їхати до станції метро “Театральна”, \n" +
    "перехід на станцію метро “Золоті ворота”, їхати до станції метро “Печерська”"

const Addresses = () => {

    return (
        <>
            <SectionTitle title={"Адреса"}/>
            <div className={css.container}>
                <img className={css.img} src={img} alt=""/>
                <div className={css.addressesContainer}>

                    <ul>
                        <li>{address}</li>
                        {addressesData.map(item => (
                            <AddressDataLi emails={item.emails} emailTitle={item.title}/>
                        ))}
                    </ul>

                    <div>
                        <Title value={"Як дібратися?"}/>
                        <div className={css.instruction}>
                            {instructionForBecome}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Addresses;