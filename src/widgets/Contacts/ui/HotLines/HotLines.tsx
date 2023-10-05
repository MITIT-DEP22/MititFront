import React from 'react';
import SectionTitle from "../../../../shared/ui/SectionTitle/SectionTitle";
import css from "./HotLines.module.scss"
import Title from "../Title/Title";
import SuperiorNumber from "./ui/SuperiorNumber";

const superiorNumbers = [
    {position: "Заступник начальника:", number: "(044) 256-23-08"},
    {position: "Заступник начальника інституту з навчальної роботи:", number: "(044) 290-41-64"},
    {position: "Заступник начальника інституту з наукової роботи:", number: "(044) 290-40-30"},
    {position: "Начальник факультету телекомунікаційних систем:", number: "(044) 256-22-21"},
    {position: "Начальник факультету інформаційних технологій:", number: "(044) 256-22-35"},
    {position: "Начальник факультету бойового застосування систем управління та зв'язку:", number: "(044) 256-23-37"},
    {position: "Начальник кафедри військової підготовки:", number: "(044) 290-40-33"},
    {position: "Начальник навчального відділу:", number: "(044) 290-40-3"},
    {position: "Начальник відділу особового складу та стройового: ", number: "(044) 290-40-17"},
]

const entranceSuperiorsNumbers = [
    {
        position: "Відповідальний секретар Приймальної комісії",
        name: "майор РИЖИЙ Іван Миколайович",
        number: "(067) 676-87-64, в мережі ЗСУ: 442-80"
    },
    {
        position: "Заступник голови Приймальної комісії:",
        name: "полковник СІЛКО Олексій Вікторович",
        number: "(093) 947-37-17, (067) 507-03-55, в мережі ЗСУ: 442-93"
    },
]


const HotLines = () => {
    return (
        <div className={css.container}>
            <SectionTitle margin={"25px 0 0 0"} title={"Гаряча лінія"}/>
            <div>
                <div className={css.titleContainer}>
                    <Title value={"Телефон/факс (черговий Військового інституту):"}/>
                    <div>(044) 290-41-48, в мережі ЗСУ:442-00</div>
                </div>

                <ul className={css.numbersContainer}>
                    {
                        superiorNumbers.map(item => (
                            <li><SuperiorNumber position={item.position} number={item.number}/></li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <div className={css.titleContainer}>
                    <Title value={"Телефони Приймальної комісії:"}/>
                    <div>(044) 290-41-56, (044) 290-41-64</div>
                </div>

                <ul className={css.numbersContainer}>
                    {
                        entranceSuperiorsNumbers.map(item => (
                            <li><SuperiorNumber name={item.name} position={item.position} number={item.number}/></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default HotLines;