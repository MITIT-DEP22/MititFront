import React from 'react';
import css from "./Specialities.module.scss"
import SpecialityCard from "./SpecialityCard/SpecialityCard";

const specialities = [
    {
        id:1,
        title: "Компʼютерні науки",
        description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
        img: "https://loremflickr.com/640/480/people"
    },
    {
        id:2,
        title: "Компʼ.терні науки",
        description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
        img: "https://loremflickr.com/640/480/people"
    },
    {
        id:3,
        title: "Компʼ.терні науки",
        description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
        img: "https://loremflickr.com/640/480/people"
    },
    {
        id:4,
        title: "Компʼ.терні науки",
        description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
        img: "https://loremflickr.com/640/480/people"
    },
    {
        id:5,
        title: "Компʼ.терні науки",
        description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
        img: "https://loremflickr.com/640/480/people"
    },
    {
        id:6,
        title: "Компʼ.терні науки",
        description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
        img: "https://loremflickr.com/640/480/people"
    },

]

export const Specialities = () => {
    return (
        <div className={css.container}>
            {specialities.map(item=>(
                <SpecialityCard id={item.id} title={item.title} description={item.description} img={item.img}/>
            ))}
        </div>
    );
};
