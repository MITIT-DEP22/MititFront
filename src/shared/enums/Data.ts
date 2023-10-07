import {RouterNames} from "./RouterNames";

export const instituteName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ"

export const headerData = {
    linksT: [
        {title: "Інститут", to: RouterNames.INSTITUTE},
        {title: "Вступникам", to: RouterNames.ENTRANTS},
        {title: "Навчання", to: RouterNames.STUDY},
        {title: "Контакти", to: RouterNames.CONTACTS},
    ],

    linksB: [
        {title: "Новини", to: RouterNames.NEWS},
        {title: "Наука", to: RouterNames.SCIENCE},
        {title: "Факультети", to: RouterNames.FACULTIES},
        {title: "Кафедри", to: RouterNames.DEPARTMENTS},
        {title: "Підрозіли", to: RouterNames.UNITS},
        {title: "Співробітництво", to: RouterNames.COOPERATION},
        {title: "Наші перемоги", to: RouterNames.OUR_WINS}
    ],

    icons: [
        {iconBootstrap: "bi bi-instagram", height: 25, width: 25},
        {iconBootstrap: "bi bi-telegram", height: 25, width: 25},
        {iconBootstrap: "bi bi-facebook", height: 25, width: 25},
        {iconBootstrap: "bi bi-youtube", height: 25, width: 25},

        {iconBootstrap: "bi bi-tiktok", height: 25, width: 25}
    ]
}
