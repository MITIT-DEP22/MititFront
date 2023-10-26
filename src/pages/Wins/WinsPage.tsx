import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {WinsBlock} from "../../widgets/WinsBlock";
import {Wins} from "../../entities/wins";


const WinsPage = () => {

    const wins: Wins[] = [
        {
            id: 0,
            text: "Перемога в Хакатоні - 2022. Команда факультету Інформаційних технологій",
            img: 16534
        },
        {
            id: 1,
            text: "Перемога в Хакатоні - 2022. Команда факультету Інформаційних технологій",
            img: 16535
        },
        {
            id: 2,
            text: "Перемога в Хакатоні - 2022. Команда факультету Інформаційних технологій",
            img: 16536
        },
        {
            id: 3,
            text: "Перемога в Хакатоні - 2022. Команда факультету Інформаційних технологій",
            img: 16534
        },
        {
            id: 4,
            text: "Перемога в Хакатоні - 2022. Команда факультету Інформаційних технологій",
            img: 16535
        },
    ]

    return (
        <>
            <PageHead  title={"НАШІ ПЕРЕМОГИ"} imgId={16530}/>
            <WinsBlock  wins={wins}/>
        </>
    );
};
export default WinsPage
