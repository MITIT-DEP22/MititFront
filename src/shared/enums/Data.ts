import {RouterNames} from "./RouterNames";
import {SocialLink} from "entities/social-link";
import {NavLink} from "widgets/WrapperParts/Header/model/types";


export const instituteName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ"
export const upperTitle = "АКТУАЛЬНО: Набір на курси лідерства"

export const links = {
    linksT: [
        {title: "Інститут", to: RouterNames.INSTITUTE.to},
        {title: "Вступникам", to: RouterNames.ENTRANTS.to},
        {title: "Навчання", to: RouterNames.STUDY.to},
        {title: "Контакти", to: RouterNames.CONTACTS.to},
    ] as NavLink[],

    linksB: [
        {title: "Новини", to: RouterNames.NEWS.to},
        {title: "Наука", to: RouterNames.SCIENCE.to},
        {
            title: "Факультети", to: "/faculty",
            subLinks: [
                {title: "Факультет телекомунікаційних систем", to: RouterNames.FACULTY_1.to},
                {title: "Факультет інформаційних технологій", to: RouterNames.FACULTY_2.to},
                {
                    title: "Факультет бойового застосування систем управління та звʼязку",
                    to: RouterNames.FACULTY_3.to
                },
            ]
        },
        {
            title: "Кафедри", to: "/department",
            subLinks: [
                {id: 10, title: "Кафедра загально-військових дисциплін", to: RouterNames.DEPARTMENT_1.to},
                {id: 11, title: "Кафедра іноземних мов", to: RouterNames.DEPARTMENT_2.to},
                {
                    id: 12,
                    title: "Кафедра фізичного виховання, спеціальної фізичної підготовки і спорту",
                    to: RouterNames.DEPARTMENT_3.to
                },
                {id: 13, title: "Кафедра військово-гуманітарних дисциплін", to: RouterNames.DEPARTMENT_4.to},
                {id: 14, title: "Кафедра математики та фізики", to: RouterNames.DEPARTMENT_5.to},
                {id: 15, title: "Кафедра військової підготовки", to: RouterNames.DEPARTMENT_6.to},
            ]
        },
        {
            title: "Підрозіли", to: "/unit",
            subLinks: [
                {
                    id: 17, title: "Науковий центр зв’язку та інформатизації", to: RouterNames.UNIT_1.to
                },
                {
                    id: 18, title: "Батальйон забезпечення навчального процесу", to: RouterNames.UNIT_2.to
                },
                {
                    id: 19, title: "5-ті Курси перепідготовки та підвищення кваліфікації", to: RouterNames.UNIT_3.to
                },
            ]
        },
        {
            title: "Співробітництво", to: "/cooperation",
            subLinks: [
                {
                    title: "Міжнародне співробітництво", to: RouterNames.COOPERATION_INTERNATIONAL.to
                },
                {
                    title: "Внутрішнє співробітництво", to: RouterNames.COOPERATION_INSIDE.to
                },
            ]
        },
        {title: "Наші перемоги", to: RouterNames.OUR_WINS.to}
    ] as NavLink[],

    icons: [
        {iconBootstrap: "bi bi-instagram", height: 25, width: 25, to: "https://www.instagram.com/viti_krut/"},
        {iconBootstrap: "bi bi-telegram", height: 25, width: 25, to: "https://t.me/+8801LI0j47FmNTFi"},
        {iconBootstrap: "bi bi-facebook", height: 25, width: 25, to: "https://www.facebook.com/viti.edu.ua/"},
        {iconBootstrap: "bi bi-youtube", height: 25, width: 25, to: "https://www.youtube.com/@user-yq1xr5sl6v"},
        {iconBootstrap: "bi bi-tiktok", height: 25, width: 25, to: "https://www.tiktok.com/@viti_krut?_t=8ZUHTA4Hyis"}
    ] as SocialLink[]
}


