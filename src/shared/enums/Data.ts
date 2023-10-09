import {RouterNames} from "./RouterNames";
import {NavLink} from "entities/link";

export const instituteName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ"
export const upperTitle = "АКТУАЛЬНО: Набір на курси лідерства"

export const headerData = {
    linksT: [
        {title: "Інститут", to: RouterNames.INSTITUTE},
        {title: "Вступникам", to: RouterNames.ENTRANTS},
        {title: "Навчання", to: RouterNames.STUDY},
        {title: "Контакти", to: RouterNames.CONTACTS},
    ] as NavLink[],

    linksB: [
        {title: "Новини", to: RouterNames.NEWS},
        {title: "Наука", to: RouterNames.SCIENCE},
        {
            title: "Факультети", to: RouterNames.FACULTIES,
            sublinks: [
                {title: "Факультет телекомунікаційних систем", to: RouterNames.FACULTIES},
                {title: "Факультет інформаційних технологій", to: RouterNames.FACULTIES},
                {title: "Факультет бойового застосування систем управління та звʼязку", to: RouterNames.FACULTIES},
            ]
        },
        {
            title: "Кафедри", to: RouterNames.DEPARTMENTS,
            sublinks: [
                {title: "Кафедра загально-військових дисциплін", to: RouterNames.DEPARTMENTS},
                {title: "Кафедра іноземних мов", to: RouterNames.DEPARTMENTS},
                {
                    title: "Кафедра фізичного виховання, спеціальної фізичної підготовки і спорту",
                    to: RouterNames.DEPARTMENTS
                },
                {title: "Кафедра військово-гуманітарних дисциплін", to: RouterNames.DEPARTMENTS},
                {title: "Кафедра математики та фізики", to: RouterNames.DEPARTMENTS},
                {title: "Кафедра військової підготовки", to: RouterNames.DEPARTMENTS},
            ]
        },
        {
            title: "Підрозіли", to: RouterNames.UNITS,
            sublinks: [
                {title: "Науковий центр зв’язку та інформатизації", to: RouterNames.UNITS},
                {title: "Батальйон забезпечення навчального процесу", to: RouterNames.UNITS},
                {title: "5-ті Курси перепідготовки та підвищення кваліфікації", to: RouterNames.UNITS},
            ]
        },
        {title: "Співробітництво", to: RouterNames.COOPERATION},
        {title: "Наші перемоги", to: RouterNames.OUR_WINS}
    ] as NavLink[],

    icons: [
        {iconBootstrap: "bi bi-instagram", height: 25, width: 25},
        {iconBootstrap: "bi bi-telegram", height: 25, width: 25},
        {iconBootstrap: "bi bi-facebook", height: 25, width: 25},
        {iconBootstrap: "bi bi-youtube", height: 25, width: 25},

        {iconBootstrap: "bi bi-tiktok", height: 25, width: 25}
    ]
}
