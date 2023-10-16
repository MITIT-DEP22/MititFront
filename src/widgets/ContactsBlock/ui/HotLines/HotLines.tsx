import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import css from "./HotLines.module.scss"
import NumbersBlock from "./ui/NumbersBlock/NumbersBlock";


const numbersBlockData = [
    {
        superiorNumbers: [
            {position: "Заступник начальника:", number: "(044) 256-23-08"},
            {position: "Заступник начальника інституту з навчальної роботи:", number: "(044) 290-41-64"},
            {position: "Заступник начальника інституту з наукової роботи:", number: "(044) 290-40-30"},
            {position: "Начальник факультету телекомунікаційних систем:", number: "(044) 256-22-21"},
            {position: "Начальник факультету інформаційних технологій:", number: "(044) 256-22-35"},
            {
                position: "Начальник факультету бойового застосування систем управління та зв'язку:",
                number: "(044) 256-23-37"
            },
            {position: "Начальник кафедри військової підготовки:", number: "(044) 290-40-33"},
            {position: "Начальник навчального відділу:", number: "(044) 290-40-3"},
            {position: "Начальник відділу особового складу та стройового: ", number: "(044) 290-40-17"},
        ],
        titleNumbers: "(044) 290-41-48, в мережі ЗСУ:442-00",
        title: "Телефон/факс (черговий Військового інституту):"
    },
    {
        superiorNumbers: [
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
        ],
        titleNumbers: "(044) 290-41-56, (044) 290-41-64",
        title: "Телефони Приймальної комісії:"
    }
]

const HotLines = () => {
    return (
        <div className={css.container}>
            <SectionTitle margin={"25px 0 0 0"} title={"Гаряча лінія"}/>
            {numbersBlockData.map(item => (
                <NumbersBlock title={item.title} titleNumbers={item.titleNumbers}
                              superiorNumbers={item.superiorNumbers}/>
            ))}
        </div>
    );
};

export default HotLines;