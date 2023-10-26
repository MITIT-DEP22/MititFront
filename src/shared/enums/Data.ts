import {RouterNames} from "./RouterNames";
import {SocialLink} from "entities/social-link";
import {NavLink} from "widgets/WrapperParts/Header/model/types";


export const instituteName = {
    ua:"ВІЙСЬКОВИЙ ІНСТИТУТ<br>ТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ<br>ІМЕНІ ГЕРОЇВ КРУТ",
    eng:"Military Institute<br> of Telecommunication and Information Technologies<br> named after Heroes of Krut"
}
export const upperTitle = "АКТУАЛЬНО: Набір на курси лідерства"


export const links = {
    linksT: [
        RouterNames.INSTITUTE,
        RouterNames.ENTRANTS,
        RouterNames.STUDY,
        RouterNames.CONTACTS
    ] as NavLink[],
    linksB: [
        RouterNames.NEWS,
        RouterNames.SCIENCE,
        RouterNames.FACULTIES,
        RouterNames.DEPARTMENTS,
        RouterNames.UNITS,
        RouterNames.COOPERATION,
        RouterNames.OUR_WINS
    ] as NavLink[]
}
export const socialIcons = [
    {iconBootstrap: "bi bi-instagram", height: 25, width: 25, to: "https://www.instagram.com/viti_krut/"},
    {iconBootstrap: "bi bi-telegram", height: 25, width: 25, to: "https://t.me/+8801LI0j47FmNTFi"},
    {iconBootstrap: "bi bi-facebook", height: 25, width: 25, to: "https://www.facebook.com/viti.edu.ua/"},
    {iconBootstrap: "bi bi-youtube", height: 25, width: 25, to: "https://www.youtube.com/@user-yq1xr5sl6v"},
    {iconBootstrap: "bi bi-tiktok", height: 25, width: 25, to: "https://www.tiktok.com/@viti_krut?_t=8ZUHTA4Hyis"}
]


