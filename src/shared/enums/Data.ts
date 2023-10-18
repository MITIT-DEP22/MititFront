import {RouterNames} from "./RouterNames";
import {Superior} from "entities/superior";
import {Department} from "entities/department";
import {TextBlock, List} from "entities/text-block";
import { Row, RowElement, Table} from "entities/text-block/model/types";
import {Unit} from "entities/unit";
import {WhyMITIT} from "entities/why_mitit";
import {Image} from "entities/image";
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
            title: "Кафедри", to:"/department",
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
                    id: 17, title: "Науковий центр зв’язку та інформатизації", to: RouterNames.UNIT.to
                },
                {
                    id: 18, title: "Батальйон забезпечення навчального процесу", to: RouterNames.UNIT.to
                },
                {
                    id: 19, title: "5-ті Курси перепідготовки та підвищення кваліфікації", to: RouterNames.UNIT.to
                },
            ]
        },
        {title: "Співробітництво", to: RouterNames.COOPERATION.to},
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

export const facultyPages = [


    //     departments: [
    //         {
    //             title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
    //             description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник КУЗАВКОВ Василь Вікторович",
    //                 achievements: [
    //                     "доктор технічних наук",
    //                     "доцент"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 }
    //             } as Superior
    //
    //         } as Department,
    //         {
    //             title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
    //             description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник ГУРСЬКИЙ Тарас Григорович",
    //                 achievements: [
    //                     "кандидат технічних наук", "доцент", "учасник бойових дій"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 }
    //             } as Superior
    //
    //         } as Department,
    //         {
    //             title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
    //             description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник ГУРЖІЙ Павло Миколайович",
    //                 achievements: [
    //                     "кандидат технічних наук", "учасник бойових дій"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image
    //             } as Superior
    //
    //         } as Department,
    //     ],
    //     textBlocks: [
    //         {
    //             title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
    //             textContent: [
    //                 "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
    //             ],
    //             uLists: [
    //                 {
    //                     title: "На факультеті організована робота:\n",
    //                     items: [
    //                         "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
    //                         "підготовки ад'юнктів до захисту дисертаційних робіт."
    //                     ]
    //                 } as List
    //             ]
    //         } as TextBlock,
    //         {
    //             textContent: [
    //                 "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "КУРСАНТСЬКИЙ ПОБУТ",
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
    //             textContent: [
    //                 "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "ВИХОВНА РОБОТА",
    //             textContent: [
    //                 "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
    //             textContent: [
    //                 "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //     ]
    // },
    // {
    //     id: 8,
    //     title: "Факультет інформаційних технологій",
    //     headerImage: {
    //         id: 1,
    //         contentType: "",
    //         imageFilename: ""
    //     } as Image,
    //
    //     description: "Факультет Телекомунікаційних систем Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів.\n\nОсновною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
    //     superiors: [
    //         {
    //             fullName: "полковник РИБКА Євгеній Миколайович",
    //             position: "Начальник факультету",
    //             achievements: [
    //                 "лицар ордена Богдана Хмельницького III ступеня",
    //                 "учасник бойових дій"
    //             ],
    //             image: {
    //                 id: 1,
    //                 contentType: "",
    //                 imageFilename: ""
    //             } as Image,
    //         } as Superior,
    //         {
    //             fullName: "підполковник ЛЕБІДЬ Євген Віцентович",
    //             position: "Заступник начальника факультету з навчальної\n" +
    //                 "та наукової роботи - начальник навчальної частини",
    //             achievements: [
    //                 "кандидат технічних наук",
    //                 "учасник бойових дій"
    //             ],
    //             image: {
    //                 id: 1,
    //                 contentType: "",
    //                 imageFilename: ""
    //             } as Image,
    //         } as Superior,
    //         {
    //             fullName: "підполковник ЛАНКО Антон Вікторович",
    //             position: "Заступник начальника факультету\n" +
    //                 "з морально-психологічного забезпечення",
    //             achievements: [
    //                 "учасник бойових дій"
    //             ],
    //             image: {
    //                 id: 1,
    //                 contentType: "",
    //                 imageFilename: ""
    //             } as Image,
    //         } as Superior,
    //     ],
    //     branches: [
    //         "Електроніка та телекомунікації"
    //     ],
    //     specialties: [
    //         {
    //             title: "Телекомунікації та радіотехніка"
    //         } as Speciality
    //     ],
    //     departments: [
    //         {
    //             title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
    //             description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник КУЗАВКОВ Василь Вікторович",
    //                 achievements: [
    //                     "доктор технічних наук",
    //                     "доцент"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             } as Superior
    //
    //         } as Department,
    //         {
    //             title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
    //             description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник ГУРСЬКИЙ Тарас Григорович",
    //                 achievements: [
    //                     "кандидат технічних наук", "доцент", "учасник бойових дій"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             } as Superior
    //
    //         } as Department,
    //         {
    //             title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
    //             description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник ГУРЖІЙ Павло Миколайович",
    //                 achievements: [
    //                     "кандидат технічних наук", "учасник бойових дій"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             } as Superior
    //
    //         } as Department,
    //     ],
    //     textBlocks: [
    //         {
    //             title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
    //             textContent: [
    //                 "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
    //             ],
    //             uLists: [
    //                 {
    //                     title: "На факультеті організована робота:\n",
    //                     items: [
    //                         "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
    //                         "підготовки ад'юнктів до захисту дисертаційних робіт."
    //                     ]
    //                 } as List
    //             ]
    //         } as TextBlock,
    //         {
    //             textContent: [
    //                 "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
    //             textContent: [
    //                 "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "ВИХОВНА РОБОТА",
    //             textContent: [
    //                 "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
    //             textContent: [
    //                 "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //     ]
    // } as Faculty,
    // {
    //     id: 9,
    //     title: "Факультет бойового застосування систем управління та зв'язку",
    //     headerImage: {
    //         id: 1,
    //         contentType: "",
    //         imageFilename: ""
    //     } as Image,
    //     description: "Факультет Телекомунікаційних систем Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів.\n\nОсновною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
    //     superiors: [
    //         {
    //             fullName: "полковник РИБКА Євгеній Миколайович",
    //             position: "Начальник факультету",
    //             achievements: [
    //                 "лицар ордена Богдана Хмельницького III ступеня",
    //                 "учасник бойових дій"
    //             ],
    //             image: {
    //                 id: 1,
    //                 contentType: "",
    //                 imageFilename: ""
    //             } as Image,
    //         } as Superior,
    //         {
    //             fullName: "підполковник ЛЕБІДЬ Євген Віцентович",
    //             position: "Заступник начальника факультету з навчальної\n" +
    //                 "та наукової роботи - начальник навчальної частини",
    //             achievements: [
    //                 "кандидат технічних наук",
    //                 "учасник бойових дій"
    //             ],
    //             image: {
    //                 id: 1,
    //                 contentType: "",
    //                 imageFilename: ""
    //             } as Image,
    //         } as Superior,
    //         {
    //             fullName: "підполковник ЛАНКО Антон Вікторович",
    //             position: "Заступник начальника факультету\n" +
    //                 "з морально-психологічного забезпечення",
    //             achievements: [
    //                 "учасник бойових дій"
    //             ],
    //             image: {
    //                 id: 1,
    //                 contentType: "",
    //                 imageFilename: ""
    //             } as Image,
    //         } as Superior,
    //     ],
    //     branches: [
    //         "Електроніка та телекомунікації"
    //     ],
    //     specialties: [
    //         {
    //             title: "Телекомунікації та радіотехніка"
    //         } as Speciality
    //
    //     ],
    //     departments: [
    //         {
    //             title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
    //             description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник КУЗАВКОВ Василь Вікторович",
    //                 achievements: [
    //                     "доктор технічних наук",
    //                     "доцент"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             } as Superior
    //
    //         } as Department,
    //         {
    //             title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
    //             description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник ГУРСЬКИЙ Тарас Григорович",
    //                 achievements: [
    //                     "кандидат технічних наук", "доцент", "учасник бойових дій"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             } as Superior
    //
    //         } as Department,
    //         {
    //             title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
    //             description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
    //             superior: {
    //                 position: "Начальник кафедри",
    //                 fullName: "полковник ГУРЖІЙ Павло Миколайович",
    //                 achievements: [
    //                     "кандидат технічних наук", "учасник бойових дій"
    //                 ],
    //                 image: {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             } as Superior
    //
    //         } as Department,
    //     ],
    //     textBlocks: [
    //         {
    //             title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
    //             textContent: [
    //                 "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
    //             ],
    //             uLists: [
    //                 {
    //                     title: "На факультеті організована робота:\n",
    //                     items: [
    //                         "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
    //                         "підготовки ад'юнктів до захисту дисертаційних робіт."
    //                     ]
    //                 } as List
    //             ]
    //         } as TextBlock,
    //         {
    //             textContent: [
    //                 "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
    //             textContent: [
    //                 "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "ВИХОВНА РОБОТА",
    //             textContent: [
    //                 "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //         {
    //             title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
    //             textContent: [
    //                 "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
    //             ],
    //             images: [
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //                 {
    //                     id: 1,
    //                     contentType: "",
    //                     imageFilename: ""
    //                 } as Image,
    //             ]
    //         } as TextBlock,
    //     ]
    // } as Faculty
]



export const departments: Department[] = [
    {
        id: 10,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        titleTextBlock: {
            textContent: [
                "Кафедра загальної тактики є базовим структурним підрозділ інституту що провадить освітню, методичну та наукову діяльність за всіма спеціальностями та спеціалізаціями підготовки курсантів (слухачів, студентів).\n"
            ],
            uLists: [
                {
                    title: "Головними завданнями кафедри є:",
                    items: [
                        "виховування майбутніх офіцерів з твердою командирською волею та ініціативою, здатних самостійно вирішувати поставлені завдання та нести відповідальність за прийняті рішення;\n",
                        "навчання курсантів теорії та практиці застосування підрозділів Сухопутних військ в сучасному загальновійськовому бою, формам та способам тактичних дій, вмілому управлінню підрозділами в бою з дотриманням норм міжнародного гуманітарного права;\n",
                        "реалізація на практиці вимог начальника військ зв’язку Збройних Сил України – начальника Головного управління зв’язку та інформаційних систем Генерального штабу Збройних Сил України до випускників інституту в питаннях загальновійськової підготовки;\n",
                        "впровадження у підготовку курсантів (слухачів, студентів) інституту нових форм підготовки з урахуванням вимог стандартів НАТО та досвіду застосування Збройних сил України в антитерористичній операції.",
                    ]
                } as List
            ]
        } as TextBlock,
        superior: {
            fullName: "ПАВЛЕНКО Олег Анатолійович",
            militaryRank: "полковник",
            achievements: [
                "кандидат педагогічних наук"
            ],
            position: "Начальник кафедри",
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "На кафедрі викладаються наступні дисципліни: загальна тактика, основи військового управління (в тому числі штабні процедури НАТО), управління повсякденною діяльністю військ, інженерна підготовка, військова топографія, радіаційний, хімічний, біологічний захист підрозділів (в тому числі екологія), бойова система виживання воїна (у тому числі військово-медична підготовка), стрілецька зброя та вогнева підготовка, а також історія війн та воєнного мистецтва (у тому числі історія українського війська)."
                ],
                images: [
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                ]
            } as TextBlock
        ]
    } as Department,
    {
        id: 11,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "Кафедра іноземних мов",
        titleTextBlock: {
            textContent: [
                "Кафедра Іноземних мов є загальноінститутською кафедрою, яка здійснює підготовку висококваліфікованих офіцерських кадрів для Збройних Сил України та інших військових формувань. Основний акцент в підготовці фахівців викладацьким складом кафедри робиться на вдосконаленні мовної компетентності фахівців, приведення її у відповідність з міжнародними стандартами та сучасними потребами щодо забезпечення мовної взаємосумісності органів управління, частин та підрозділів Збройних Сил України з військовими формуваннями міжнародних організацій та країн-партнерів НАТО у рамках реалізації заходів міжнародного співробітництва."
            ]
        } as TextBlock,
        superior: {
            fullName: "КАПАНАЙКО Ірина Ярославівна",
            militaryRank: "Пр. ЗСУ",
            achievements: [
                "кандидат філологічних наук"
            ],
            position: "Завідувач кафедри іноземних мов",
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "Навчання проводиться за навчальними дисциплінами: Іноземна мова, Іноземна мова (військово-спеціальна підготовка), Іноземна мова професійного спрямування, Ділова іноземна мова (для ад’юнктів). Завданням кафедри під час вивчення іноземної мови є розвиток у курсантів професійно орієнтованої міжкультурної комунікативної компетентності. Ця компетентність є результатом взаємодії та комплексної реалізації низки компетентностей, а саме, розвитку загальнонавчальної компетентності, формування та розвитку лінгвістичної мовної компетентності, розвитку іншомовної комунікативної компетентності, розвитку соціокультурної та прагматичної компетентностей. Зазначені компетентності формують професійну комунікативну компетентність особистості курсанта (слухача, ад’юнкта), здатного брати безпосередню участь у розв’язанні важливих проблем та професійних завдань іноземною мовою.\n",
                    "Науково-педагогічні працівники кафедри забезпечують якісне проведення практичних занять, використовуючи сучасні навчально-методичні комплекси.",
                    "На кафедрі працює 9 викладачів та 2 працівники лаборантського складу, які забезпечують навчальний процес.\n",
                    "Значна увага на кафедрі приділяється підвищенню кваліфікації викладачів та їх професійному самовдосконаленню. Основними напрямками наукових досліджень кафедри є: лінгвістичні, методичні та педагогічні засади взаємопов’язаного навчання різних видів мовленнєвої діяльності, шляхи поповнення словникового запасу мови, психолінгвістичні аспекти підвищення ефективності викладання іноземних мов, удосконалення професійно-орієнтованої іншомовної підготовки як фактор підвищення ефективності діяльності працівників."
                ]
            } as TextBlock,
            {
                title: "Розклад додаткових консультативних занять.",
                tables: [
                    {
                        headers: [
                            "День тижня",
                            "Назва курсу",
                            "Час проведення",
                            "Куратори курсу"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["ПОНЕДІЛОК"]} as RowElement,
                                    {value: ["Advanced Grammar Lab / Підвищений курс Граматики"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Бокій В.І., Дідурик А.І."]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["ВІВТОРОК"]} as RowElement,
                                    {value: ["Speaking Booster (for officers) / Розмовний курс для офіцерів"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Циганкова З.М., Бецько О.С"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["СЕРЕДА"]} as RowElement,
                                    {value: ["Basic Grammar Lab / Початковий курс Граматики"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Шаблій О.С., Задорожна О."]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["ЧЕТВЕР"]} as RowElement,
                                    {value: ["Speaking Club (for cadets) / Розмовний клуб для курсантів"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Храбан Т.Є., Лемещенко А."]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["П’ЯТНИЦЯ"]} as RowElement,
                                    {value: ["Pronunciation Course"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Куценко М.А., Дзіман А.М."]} as RowElement
                                ]
                            } as Row,
                        ],
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Відвідання занять буде проводитися за попереднім записом, який відкритий щоп’ятниці на кафедрі Іноземних мов у Навчальному кабінеті. Місце занять – 206 ауд."
                ],
                images: [
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                ]
            } as TextBlock,
        ]
    } as Department,
    {
        id: 12,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "Кафедра фізичного виховання, \n" +
            "спеціальної фізичної підготовки і спорту",
        titleTextBlock: {
            textContent: [
                "Кафедра призначена для формування та вдосконалення у військових фахівців основ теоретичних знань, практичних та організаційно-методичних навичок та умінь управління фізичним вихованням, спеціальною фізичною підготовкою, спортом і фізичною реабілітацією військовослужбовців; забезпечення необхідного рівня розвитку фізичних якостей, військово-прикладних рухових навичок та їх вдосконалення; показників функціональних та морфологічних можливостей організму; працездатності. Курсанти мають можливість проводити тренування з різних спортивних та військово-прикладних видів спорту на навчально-спортивній базі інституту, що включає:\n"
            ],
            uLists: [
                {
                    items: [
                        "спортивний зал (36х18);",
                        "зал рукопашного бою;",
                        "тренажерний зал;",
                        "методичний клас;",
                        "смуга перешкод;",
                        "гімнастичні майданчики;",
                        "майданчики для гри: волейбол, баскетбол, міні-футбол;",
                        "дистанції для бігу на короткі та довгі дистанції.",
                    ]
                } as List
            ]
        } as TextBlock,
        superior: {
            fullName: "БИЧІХІН Юрій Ігорович",
            militaryRank: "полковник",
            position: "Начальник кафедри",
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        } as Superior,
        textBlocks: [
            {
                uLists: [
                    {
                        title: "За 2016-2017 навчальний рік кафедра підготовила спортсменів-розрядників та військовослужбовців, які виконали норми ВСК",
                        items: [
                            "МС – 1",
                            "КМС – 3",
                            "1 розряд – 62",
                            "2 розряд – 81",
                            "3 розряд – 186",
                            "Військовослужбовці, які виконали вправи ВСК : І ступеню - 62, та ІІ ступеню – 129 чол.",
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Кафедра має сучасні спортивні тренажери для розвитку різних груп м’язів."
                ],
                images: [
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                ]
            } as TextBlock
        ]
    } as Department,
    {
        id: 13,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "Кафедра військово-гуманітарних дисциплін",
        titleTextBlock: {
            textContent: [
                "Кафедра призначена для провадження освітньої, методичної та наукової діяльності за всіма напрями підготовки та спеціальностями (спеціалізаціями) інституту по гуманітарним та соціально-економічним дисциплінам."
            ]
        } as TextBlock,
        superior: {
            fullName: "САЄНКО Олександр Григорович",
            position: "Начальник кафедри",
            militaryRank: "полковник",
            achievements: [
                "кандидат технічних наук"
            ],
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        } as Superior,
        textBlocks: [
            {
                uLists: [
                    {
                        title: "Основні дисципліни кафедри:",
                        items: [
                            "Історія України та української культури;",
                            "Українська мова за професійним спрямуванням;",
                            "Філософія (філософія, релігієзнавство, логіка, етика, естетика);",
                            "Політологія та соціологія;",
                            "Правознавство (у тому числі основи військового законодавства та міжнародне гуманітарне право);",
                            "Військова педагогіка та психологія;",
                            "Морально-психологічне забезпечення підготовки та застосування Збройних Сил України.",
                        ]
                    } as List,
                    {
                        title: "Характеристика науково-педагогічних працівників кафедри:",
                        items: [
                            "Докторів наук – 1;",
                            "Кандидатів наук – 5;",
                            "Професорів – 1;",
                            "Доцентів – 3.",
                        ]
                    } as List,
                    {
                        title: "У своєму складі кафедра має навчальний кабінет, який дозволяє курсантам (студентам), ад’юнктам (здобувачам) під час самостійної роботи більш якісно готуватись до навчальних занять та займатись науковою роботою. У своєму розпорядженні він має:",
                        items: [
                            "більш 800 сучасних підручників навчального, наукового та навчально-методичного характеру;",
                            "100% підручників у електронному вигляді, які були віданні кафедрою;",
                            "електронну базу законодавства України щодо військових питань.",
                        ]
                    } as List,
                ]
            } as TextBlock,
            {
                images: [
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                ]
            } as TextBlock,
        ]
    } as Department,
    {
        id: 14,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "Кафедра математики та фізики",
        titleTextBlock: {
            textContent: [
                "Кафедра забезпечує викладання фундаментальних <strong>математичних дисциплін</strong>(«Вища математика», «Теорія ймовірностей, імовірнісні процеси та математична статистика», «Теорія прийняття рішень») і <strong>фізики</strong> («Електрика і магнетизм», «Основи електродинаміки», «Основи квантової фізики», «Основи квантової механіки», «Фізика твердового тіла», «Фізика напвпровідників», «Контактні явища», «Квантова електроніка», «Ядерна фізика») для курсантів (студентів заочної форми навчання) усіх спеціальностей підготовки на трьох факультетах. З метою забезпечення високої якості навчального процесу підготовки курсантів, навчання на кафедрі організоване з урахуванням освітніх потреб учасників навчального процесу в частині поглибленого опанування програм навчальних дисциплін, як базових, для подальшого вивчення шляхом поєднання лекційного курсу з лабораторними та практичними заняттями, де кожний курсант активно включається в рішення поставлених завдань, а одержані результати запроваджує в практику навчання."
            ]
        } as TextBlock,
        superior: {
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            fullName: "РУДОМІНО-ДУСЯТСЬКА Ірина Анатоліївна",
            position: "Завідувач кафедри математики та фізики",
            militaryRank: "Пр. ЗСУ ",
            achievements: [
                "кандидат фізико-математичних наук, доцент"
            ]
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "Протягом навчання курсанти отримують фундаментальну математичну підготовку, що поєднується з вмінням ставити, аналізувати і ефективно розв’язувати сучасні прикладні задачі та високими практичними навичками у подальшому програмуванні, вирішуванні завдання, які пов’язані з обробкою та аналізом даних.\n",
                    "Метою кафедри є надання курсантам знань, які є необхідними для підготовки фахівців у галузях Інформаційних технологій, Електроніки та телекомунікації, Воєнних наук, національної безпеки, безпеки державного кордону.\n",
                    "Стратегічним завданням кафедри залишається розробка дидактичних матеріалів, електронних посібників до занять з усіх навчальних дисциплін кафедри.\n",
                    "На кафедрі працює 11 викладачів, з них 1 професор, кандидат фізико-математичних наук, доктор педагогічних наук, 4 доцента, кандидата фізико-математичних наук.",
                    "Методичні матеріали (вища математика)\nМетодичні матеріали (фізика)",
                ]
            } as TextBlock
        ]
    } as Department,
    {
        id: 15,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "Кафедра військової підготовки",
        titleTextBlock: {
            textContent: [
                "Кафедра військової підготовки Військового інституту телекомунікацій та інформатизації здійснює підготовку громадян України за програмою підготовки офіцерів запасу за державним замовлення та за кошти фізичних осіб для Головного Управління військ зв’язку та інформаційних систем, Повітряних Сил Збройних Сил України,Військово-Морських Сил Збройних Сил України, Сухопутних військ Збройних Сил України, Головного управління по роботі з особовим складом Збройних Сил України, Департаменту фінансів Міністерства Оборони України, Центрального управління захисту інформації та криптології ГШ Збройних Сил України за 14 військово - обліковими спеціальностями."
            ],
        } as TextBlock,
        superior: {
            militaryRank: "полковник",
            fullName: "ТКАЧЕНКО Дмитро Віталійович",
            position: "Начальник кафедри",
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "Нормативно-правова база військової підготовки\n",
                    "Закон України \"Про військовий обов'язок і військову службу\" (витяг)\n",
                    "Постанова Кабінету Міністрів України від 1.02.2012 №48 (зі змінами) \"Про затвердження Порядку проведення військової підготовки громадян України за програмою підготовки офіцерів запасу\"\n",
                    "Наказ №719/1289 від 14.12.2015 \"Про затвердження Інструкції про організацію військової підготовки громадян України за програмою підготовки офіцерів запасу\"\n",
                ]
            } as TextBlock,
            {
                textContent: [
                    "Рівень підготовки науково педагогічних працівників,стан озброєння та військової техніки, навчально-матеріальна база дозволяють формувати - особистості військового фахівця вищого рівня,здатного застосовувати бойову техніку в складних умовах сучасної війни; розвиток інженерного мислення і дослідницьких якостей,вмінь і навиків працювати в складі групи,керувати підлеглими під час експлуатації та бойового застосування техніки та озброєння.\n"
                ]
            } as TextBlock,
            {
                title: "ВІЙСЬКИВИЙ ІНСТИТУТ ТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ",
                uLists: [
                    {
                        title: "Набір 2018 року буде здійснюватися для підготовки за програмою офіцерів запасу за військово-обліковими спеціальностями:\n",
                        items: [
                            "Організація захисту інформації та кібернетична безпека в інформаційно-комунікаційних системах.\n",
                            "Застосування змішаних з’єднань, військових частин і підрозділів (крім підрозділів і військових частин зв’язку та радіотехнічного забезпечення авіації).\n",
                            "Спеціальний зв'язок. Контроль за режимом секретності.\n",
                            "Математичне та програмне забезпечення функціонування автоматизованих систем.\n",
                            "Експлуатація та ремонт наземної апаратури радіозв’язку різної потужності.\n",
                            "Технічне забезпечення функціонування автоматизованих систем управління.\n",
                            "Експлуатація та ремонт автомобільної техніки і гусеничних тягачів.\n",
                            "Соціальна психологія.\n",
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "До військової підготовки можуть залучатись здобувачі вищої освіти незалежно від форми навчання у вищих навчальних закладах, у тому числі і військовослужбовці рядового складу, сержантського та старшинського складу, які проходять військову службу за контрактом та громадяни України, які мають освітній ступінь вищої освіти не нижче бакалавра, якщо їм на початок військової підготовки не виповнилося 40 років.\n",
                    "<strong>Увага!</strong> Відповідно до пункту 173 Положення про проходження громадянами України військової служби у Збройних Силах України до навчання можуть залучатися військовослужбовці, які підписали другий контракт та мають дозвіл від командира з'єднання і вище.\n",
                    "<strong>Вартість навчання: 4 500 грн./семестр (2 роки навчання - 18 000 грн.).\n</strong>",
                    "Після закінчення навчання та складання випускного іспиту присвоюється військове звання „молодший лейтенант запасу” Збройних Сил України."
                ],
                images: [
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Детальну інформацію дивіться:\n</strong>",
                    "Правила прийому громадян України для навчання за програмою підготовки офіцерів запасу на кафедрі військової підготовки Військового інституту телекомунікацій та інформатизації (2019 рік)\n",
                    "Документи (анкети) необхідні для вступу\n",
                    "Графік проведення конкурсного відбору громадян України, які виявили бажання проходити військову підготовку у Військовому інституті телекомунікацій та інформатизації за програмою підготовки офіцерів запасу у 2018 році"
                ]
            } as TextBlock,
            {} as TextBlock,


        ]
    } as Department,
]

export const units: Unit[] = [
    {
        id: 17,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "Науковий центр зв’язку та інформатизації",
        titleTextBlock: {
            textContent: [
                "Науковий центр зв’язку та інформатизації ВІТІ відповідно до директиви Міністра оборони України від 30.08.07 № 7 визначений головною науковою установою в галузі дослідження проблем розвитку зв'язку та автоматизації управління військами, наукового супроводження розробок техніки зв'язку та автоматизації управління військами. НЦЗІ ВІТІ визначений базовою організацією з військової стандартизації техніки зв'язку і автоматизації управління військами відповідно до Наказу начальника Генерального штабу Збройних Сил України від 08.01.03 № 1."
            ]
        } as TextBlock,
        superior: {
            position: "Начальник наукового центру зв'язку та інформатизації",
            militaryRank: "полковник",
            fullName: " КОЛАЧОВ Сергій Петрович",
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            achievements: [
                "кандидат технічних наук ",
                "старший науковий співробітник",
                "участник бойових дій"
            ]
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "Основним напрямом діяльності НЦЗІ ВІТІ є виконання НДДКР, відпрацювання оперативних постановок, наукове супроводження та впровадження результатів дослідно-конструкторських робіт.\n",
                    "Основна мета діяльності НЦЗІ ВІ ТІ- забезпечення реалізації державної політики у сфері науки, науково-технічної, інноваційної діяльності та інтелектуальної власності в системі Міністерства освіти і науки та Міністерства оборони України, інших галузевих міністерств."
                ],
                images: [
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                ]
            } as TextBlock,
            {
                textContent: [
                    "На НЦЗІ ВІТІ покладаються завдання щодо планування, організації і безпосереднього здійснення всіх видів і форм наукової та науково-технічної діяльності з проблем воєнної науки на замовлення (за договорами, оперативними завданнями) органам державної виконавчої влади, структурних підрозділів центрального апарату Міністерства оборони України, Генерального штабу Збройних Сил України і видів Збройних Сил України, органів місцевого самоврядування, підприємств, установ і організацій."
                ],
                uLists: [
                    {
                        title: "<strong>Основні завдання діяльності Наукового центру:\n</strong>",
                        items: [
                            "створення ідеології і концептуальних засад побудови інформаційних систем Збройних Сил України;\n",
                            "дослідження проблем розвитку теорії управління Збройними Силами України, шляхів удосконалення системи управління військами (силами);\n",
                            "визначення перспективних напрямків розвитку систем, комплексів (засобів) спеціального зв’язку, контролю безпеки зв’язку;\n",
                            "проведення науково-технічної експертизи наукових та науково-прикладних результатів з питань оцінки відповідності проектних рішень тактико-технічним завданням;\n",
                            "дослідження проблем функціонування та розвитку систем та технологій зв’язку;\n",
                            "розробки методологічного апарату оцінки властивостей інформаційних систем спеціального призначення;\n",
                            "дослідження перспективних напрямків розвитку технічного забезпечення систем зв’язку та автоматизації і визначення шляхів їх реалізації;\n",
                            "проведення державної експертизи у сфері технічного захисту інформації;\n",
                            "забезпечення наукової та науково-технічної взаємодії ВІТІ ДУТ з іншими науковими організаціями і освітніми установами України та іноземних держав;\n",
                            "забезпечення в межах своєї компетенції державної політики у сфері охорони та захисту державної таємниці, інформації з обмеженим доступом, що є власністю держави, та службової інформації, яка згідно з законодавством не підлягає розголошенню;\n",
                            "дослідження проблем технічної експлуатації систем (комплексів, засобів) зв’язку та автоматизації Збройних Сил України;\n",
                            "виконання робіт із забезпечення єдності вимірювань у сфері військового управління та зв’язку;\n",
                            "участь у розробці та удосконаленні інформаційної інфраструктури Збройних Сил України;\n",
                            "участь у перепідготовці та підвищенні кваліфікації кадрів;\n",
                            "підготовка кадрів вищої кваліфікації через аспірантуру та докторантуру;\n",
                            "залучення до науково-технічної діяльності військовослужбовців та працівників Збройних Сил України у відповідності до чинного законодавства;\n",
                            "проведення НДДКР, тематичних досліджень щодо розробки систем (комплексів, засобів) криптографічного захисту секретної та конфіденційної інформації;\n",
                            "сертифікація систем, технічних засобів та послуг зв’язку, які призначені для застосування у Збройних Силах України;\n",
                            "створення суб'єктам наукової і науково-технічної діяльності необхідних умов, які стимулюють розробку технічних і технологічних нововведень, забезпечують скорочення інноваційного циклу «наука – виробництво»;\n",
                            "участь у проведенні оглядів-конкурсів на кращу науково-технічну розробку;\n",
                            "оновлення експериментальної та матеріально-технічної бази за рахунок коштів, отриманих для виконання окремих конкретних доручень від підприємств, організацій чи фізичних осіб, а також від інших бюджетних установ;\n",
                            "участь у проведенні науково-технічних конференцій, семінарів, виставок, презентацій тощо;\n",
                            "підготовка та поширення рекламних матеріалів НДДКР;\n",
                            "нормативно-методичне та інформаційно-довідкове забезпечення науково-технічної діяльності ВІТІ ДУТ, структурних підрозділів центрального апарату Міністерства оборони України, Генерального штабу Збройних Сил України і видів Збройних Сил України з проблем розвитку зв'язку та автоматизації Збройних Сил України;\n",
                            "визначення та обґрунтування шляхів та напрямків досягнення сумісності системи зв'язку та інформатизації Збройних Сил України з системами зв'язку та інформатизації Збройних Сил країн НАТО, країн-партнерів Альянсу, інших іноземних держав;\n",
                            "забезпечення інтеграції військової науки та військової освіти;\n",
                            "розроблення оперативно-тактичних та тактико-технічних вимог до перспективних систем зв'язку та вузлів зв'язку, окремих комплексів, зразків, засобів зв'язку та автоматизації;\n",
                            "участь у випробуваннях зразків засобів зв’язку та автоматизації;",
                        ]
                    } as List,
                    {
                        title: "Наукове супроводження:\n",
                        items: [
                            "заходів інтеграції системи управління Збройними Силами України в єдину систему загальнодержавного управління, створення умов для входження її в інформаційні структури європейської та трансатлантичної безпеки на основі використаної єдиних міжнародних стандартів;\n",
                            "заходів реалізації міжнародного військово-технічного співробітництва;\n",
                            "реалізації заходів оборонного розвитку Загальнодержавної національної космічної програми України на 2007-2011 роки;\n",
                            "НДДКР з питань технічного та криптографічного захисту інформації Збройних Сил України;\n",
                            "створення цифрової інтегральної мережі зв'язку Збройних Сил України, інтегрованої до телекомунікаційних мереж України;\n",
                            "проведення наукових досліджень на навчаннях та інших заходах оперативної, мобілізаційної і бойової підготовки"
                        ]
                    } as List,
                ],
                images: [
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                ]

            } as TextBlock,
            {
                textContent: [
                    "<strong>Можливі напрямки надання наукових послуг НЦЗІ ВІТІ</strong>",
                    "Перелік платних послуг, що можуть надаватися за напрямками захисту інформації, електромагнітна сумісність радіоелектронних засобів, автоматизації, зв’язку, кібернетичного захисту"
                ],
                uLists: [
                    {
                        title: "Наукова та науково-технічна експертиза:\n",
                        items: [
                            "результатів виконання наукових і науково-технічних програм, інноваційних програм щодо розвитку озброєння і військової техніки;\n",
                            "результатів виконання ініціативних НДДКР;\n",
                            "дисертаційних досліджень, науково-технічної документації на раціоналізаторські пропозиції, винаходи;\n",
                            "ефективності науково-технічних та інноваційних проектів;"
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком захисту інформації:\n</strong>",
                        items: [
                            "створення КТЗІ\n",
                            "випробування та атестація КТЗІ\n",
                            "пошук закладних пристроїв\n",
                            "створення КСЗІ\n",
                            "проведення науково-дослідних робіт з розробки нормативних документів системи ТЗІ\n",
                            "проведення дослідно-конструкторських робіт з розробки засобів ТЗІ, засобів КЗІ, засобів спеціального зв’язку та іншого радіоелектронного обладнання\n",
                            "проведення робіт з сертифікації засобів зв’язку, засобів ТЗІ, засобів спеціального зв’язку, засобів КЗІ та спеціальних поглинаючих матеріалів, які призначені для об’єктів та техніки в захищеному виконанні\n",
                            "наукова та науково-технічна експертиза НДР та ДКР з питань захисту інформації\n",
                            "випробування обладнання, конструкцій, виробів, матеріалів щодо виконання вимог по електромагнітній сумісності\n",
                            "надання консультацій з питань наукових досліджень, їх організації та наукового обслуговування, послуг з розроблення науково-технічної документації на науково-технічну продукцію в галузі захисту інформації\n",
                            "організація підвищення кваліфікації спеціалістів в галузі захисту інформації\n",
                            "забезпечення розроблення державних стандартів і технічних умов на виробництво засобів ТЗІ, проведення її сертифікаційних випробувань"
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком метрології та стандартизації:\n</strong>",
                        items: [
                            "проведення робіт з діагностики, стандартизації та метрологічного забезпечення,:\n",
                            "метрологічна атестація засобів вимірювальної техніки (ЗВТ);\n",
                            "повірка ЗВТ;\n",
                            "калібрування ЗВТ;\n",
                            "атестація випробувального (лабораторного) обладнання;\n",
                            "проведення вимірювань;\n",
                            "державні випробування ЗВТ;\n",
                            "розробка методик повірки, калібрування, атестації ЗВТ;\n",
                            "розробка та експертиза методик виконання вимірювань;\n",
                            "атестація вимірювальних лабораторій і перевірка вже атестованих;\n",
                            "ведення переліку атестованих вимірювальних лабораторій України;\n",
                            "узгодження переліків ЗВТ, які знаходяться в експлуатації на підприємствах та в організаціях і підлягають повірці;\n",
                            "проведення метрологічної експертизи технічної документації на ЗВТ, що ввозяться на територію України;\n",
                            "виконання робіт з метрологічного забезпечення інформаційних вимірювальних систем, вимірювальних і обчислювальних каналів автоматизованих систем управління технологічними процесами;\n",
                            "методична допомога метрологічним службам підприємств і організацій;\n",
                            "метрологічної експертизи документації ЗВП на всіх етапах її життєвого циклу;\n",
                            "забезпечення розроблення державних стандартів і технічних умов на виробництво продукції, проведення її сертифікаційних випробувань."
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком електромагнітна сумісність радіоелектронних засобів:\n</strong>",
                        items: [
                            "проведення науково-дослідних, пошукових, проектно-пошукових та дослідно-конструкторських робіт з питань розподілу, виділення і присвоєння радіочастот, їх міжнародно-правового захисту, забезпечення електромагнітної сумісності радіоелектронних засобів.\n",
                            "наукова та науково-технічна експертиза електромагнітної сумісності радіоелектронних засобів.\n",
                            "натурні випробування радіоелектронних засобів з метою визначення їх електромагнітної сумісності.\n",
                            "розроблення, впровадження, реалізація та супровід програмних засобів і продуктів по визначенню електромагнітної сумісності радіоелектронних засобів.\n",
                            "організація та проведення наукових семінарів, конференцій з питань забезпечення електромагнітної сумісності радіоелектронних засобів.\n",
                            "організація навчання роботи з комп’ютерною технікою та методик статистичної обробки інформації в наукових дослідженнях та з питань забезпечення електромагнітної сумісності радіоелектронних засобів.\n",
                            "надання консультацій з питань наукових досліджень у галузі електромагнітної сумісності радіоелектронних засобів, їх організації;\n",
                            "надання послуг з розроблення науково-технічної документації на науково-технічну продукцію, натурний зразок в частині що стосується забезпечення електромагнітної сумісності радіоелектронних засобів."
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком автоматизації:\n</strong>",
                        items: [
                            "\n" +
                            "проведення науково-дослідних, дослідно-конструкторських робіт які спрямовані на створення інформаційно-аналітичних систем та автоматизованих систем управління.\n",
                            "проектування та виготовлення експериментальних зразків інформаційних систем, впровадження нових інформаційних технологій в системи, комплекси і засоби автоматизації.\n",
                            "випробування обладнання, виробів, зразків та комплексів засобів автоматизації, що розробляються в рамках дослідно-конструкторських робіт щодо створення автоматизованих систем управління та їх підсистем.\n",
                            "розроблення державних та галузевих стандартів щодо створення автоматизованих систем управління.\n",
                            "послуги з розроблення науково-технічної документації на інформаційні системи та автоматизовані системи управління.\n",
                            "розроблення програмного продукту, впровадження, реалізація та супровід програмних засобів і продуктів.\n",
                            "надання консультацій з питань наукових досліджень спеціального програмного забезпечення, їх організації та наукового обслуговування, послуг з розроблення науково-технічної документації на спеціальне програмне забезпечення;\n",
                            "організація та проведення наукових семінарів, конференцій, симпозіумів, лекторіїв, виставок, тренінгів з питань автоматизованих систем управління;\n",
                            "послуги з забезпечення доступу до локальних і корпоративних комп'ютерних мереж, до мережі Інтернет, автоматизованих баз даних та пошукових систем."
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком зв’язку:\n</strong>",
                        items: [
                            "проведення науково-дослідних, дослідно-конструкторських, проектно-конструкторських, технологічних, пошукових та проектно-пошукових робіт які спрямовані на створення інформаційно-телекомунікаційних мереж\n",
                            "організація та проведення наукових семінарів, конференцій, симпозіумів, лекторіїв, виставок, тренінгів з питань зв’язку\n",
                            "надання консультацій з питань наукових досліджень телекомунікаційних мереж, їх організації та обслуговування, послуг з розроблення науково-технічної документації на інформаційно-телекомунікаційні мережі\n",
                            "послуги з розроблення науково-технічної документації на телекомунікаційні мережі, що створюються\n",
                            "випробування обладнання, виробів, зразків та комплексів засобів"
                        ]
                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком кібернетичного захисту:\n</strong>",
                        items: [
                            "планування заходів з кіберзахисту;\n",
                            "організація навчання спеціалістів з питань кібербезпеки;\n",
                            "надання консультативних послуг по відновлення інформаційно-телекомунікаційних систем від наслідків кібернетичних атак;\n",
                            "надання консультативних послуг по відновленню інформації;\n",
                            "надання консультативних послуг по розслідуванню інцендентів у кіберпросторі;\n",
                            "впровадження, реалізація та супровід програмних засобів і продуктів кіберзахисту;\n",
                            "забезпечення розроблення державних та галузевих стандартів з питань кіберзахисту;\n",
                            "наукова та науково-технічна експертиза НДР та ДКР з питань кібербезпеки;\n",
                            "надання консультацій з питань наукових досліджень, їх організації та наукового обслуговування, послуг з розроблення науково-технічної документації на науково-технічну продукцію в галузі кіберзахисту;\n",
                            "підвищення кваліфікації спеціалістів з кіберзахисту інформаційно-телекомунікаційних систем;\n",
                            "проведення робіт з кіберзахисту локальних та глобальних мереж."
                        ]
                    } as List,
                ]
            } as TextBlock
        ]


    } as Unit,
    {
        id: 18,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "Батальйон забезпечення навчального процесу",
        titleTextBlock: {
            textContent: [
                "Відповідно до спільної директиви Міністества оборони України та Генерального штабу Збройних Сил України від 04.05.2016 № Д-322/1/8ДСК введений в дію штат №17/194 Військового інституту телекомунікацій та інформатизації в складі якого введено батальйон забезпечення навчального процесу (БЗНП)."
            ]
        } as TextBlock,
        superior: {
            position: "Командир батальйону забезпечення навчального процесу",
            militaryRank: "підполковник",
            fullName: " КУРГАН Юрій Вікторович",
            achievements: [
                "учасник бойових дій"
            ],
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "За Військовим інститутом телекомунікацій та інформатизації (місто Київ) закріплені на праві оперативного управління будівлі №75 та №106 військового містечка №1 (село Семиполки Київської області) з метою розміщення підрозділів БЗНП Військового інституту телекомунікацій та інформатизації (ВІТІ )\n",
                    "Батальйон забезпечення навчального процесу з місцем дислокації смт. Семиполки введений до складу Військового інституту телекомунікацій та інформатизації для посилення практичної (польової) складової в підготовці випускників ВІТІ.\n",
                ],
                uLists: [
                    {
                        title: "Це дозволило у 2016-2017 навчальному році реалізувати положення Плану вдосконалення практичної підготовки курсантів, а саме:\n",
                        items: [
                            "здійснити 4 польових виходи курсантів 1-3 курсів;\n" +
                            "провести практичну складову державної екзаменаційної атестації для випускників всіх спеціальностей в польових умовах;\n",
                            "провести навчальний збір з громадянами які проходять навчання за програмою підготовки офіцерів запасу у ВІТІ;\n",
                            "провести курси перепідготовки та підвищення кваліфікації для осіб офіцерського складу за призовом, які закінчили кафедри військової підготовки, офіцерів військових частин прийнятих на військову служби за контрактом, осіб рядового та сержантського складу з вищою освітою;\n",
                            "ппідготувати екіпажі для комплексних апаратних зв’язку БЗНП та забезпечити їх залучення в командно-штабних навчаннях з органами військового управління “Непохитна стійкість 2017”.\n"
                        ]
                    } as List,
                    {
                        title: "<strong>Об'єкти навчальної матеріальної бази БЗНП:</strong>",
                        items: [
                            "клас Тактико-спеціальної підготовки;\n",
                            "клас Загальновійськових дисциплін;\n",
                            "навчальне поле (взводний опорний пункт, полігон звязку);\n",
                            "будівля 1/75 (казарма, спортивний зал).\n"
                        ]
                    } as List,
                    {
                        title: "<strong>Озброєння та військова техніка, які розгорнуті в БЗНП:\n</strong>",
                        items: [
                            "6 комплексних апаратних зв'язку (СТГ 8/16, П-240ТМ, Р-142Н \"Motorola\", Р-145БМ \"Motorola\", Р-142Н \"Harris\", Р-142Н \"Harris\");\n",
                            "радіорелейна станція (Р-414-МУ);\n",
                            "тропосферна станція (Р-412А)."
                        ]
                    } as List,
                ], images: [
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                ]
            } as TextBlock,
        ]

    } as Unit,
    {
        id: 19,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "5-ті Курси перепідготовки та підвищення кваліфікації",
        titleTextBlock: {
            textContent: [
                "5-ті Курси перепідготовки та підвищення кваліфікації створені у 2014 році, відповідно до спільної директиви Міністра Оборони України та Генерального штабу Збройних Сил України від 03.07.2014 року. Курси перепідготовки та підвищення кваліфікації утримуються за рахунок чисельності Збройних Сил України та дислокуєтеся на території Військового інституту телекомунікацій та інформатизації."
            ]
        } as TextBlock,
        superior: {
            position: "Начальник 5 курсів перепідготовки та підвищення кваліфікації",
            militaryRank: "майор",
            fullName: "КРАВЧЕНКО Олексій Олександрович",
            image: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            achievements: []
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "<strong>Мета</strong> – організація перепідготовки та підвищення кваліфікації військовослужбовців в особливий період за військово-обліковими спеціальностями.",
                    "1. <strong>5 курси перепідготовки та підвищення кваліфікації (допідготовки) офіцерів, прийнятих на військову службу за контрактом з запасу, оперативного резерву №1 та №2, офіцери військових частин, що відновлюють боєздатність.\n</strong>",
                    "<strong>Група №1.</strong> Підвищення кваліфікації офіцерів, прийнятих на військову службу за контрактом з запасу\n",
                    "<strong>Термін навчання – 3 місяці\n</strong>",
                    "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери прийняті на віськову службу за контрактом з запасу (за відповідними спеціалізаціями); офіцери, які закінчили кафедри військової підготовки та не мають досвіду служби.\n",
                    "<strong>Група №2.</strong> Підвищення кваліфікації офіцерів оперативного резерву №1 та №2 та військових частин, що відновлюють боєздатність\n",
                    "<strong>Термін навчання – до 15 діб\n</strong>",
                    "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери оперативного резерву, яких призвано на навчальні збори, та військових частин, що відновлюють боєздатність.\n",
                    "<strong>Група №3.</strong> Курси методичної підготовки\n",
                    "<strong>Термін навчання – 7 діб\n</strong>",
                    "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери оперативного резерву, яких призвано на навчальні збори, та військових частин, що відновлюють боєздатність.\n",
                    "2.<strong> Курси військової підготовки осіб сержантського (старшинського) складу з вищою освітою.\n</strong>",
                    "<strong>Термін навчання – 3 місяці\n</strong>",
                    "<strong>Група №1.</strong> Підготовка осіб рядового та сержантського (старшинського) складу з вищою освітою (за військово-обліковими спеціальностями, за якими здійснюється підготовка військових фахівців).\n",
                    "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: особи рядового та сержантського (старшинського) складу, які проходять військову службу за контрактом (призвані на військову службу під час мобілізації), обіймають (плануються до призначення на) офіцерські посади у військах, з наступним присвоєнням первинного офіцерського звання \"молодший лейтенант\".\n",
                    "<strong>Курcи перепідготовки та підвищення кваліфікації в мирний час:\n</strong>",
                    "Згідно наказу Міністерства оборони України від 04.04.2017р. № 202 \"Про організацію та проведення підвищення кваліфікації військовослужбовців, працівників Збройних Сил України та державних службовців Міністерства оборони України та Збройних Сил України"
                ],
                tables: [
                    {
                        headers: [
                            "<strong>Назва курсів</strong>",
                            "<strong>Групи та напрями підвищення кваліфікації</strong>"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>1. Центральні курси підвищення кваліфікації офіцерів – фахівців зв’язку</strong>"]} as RowElement,
                                    {
                                        value: [
                                            "<strong>Група № 1</strong> Підвищення кваліфікації офіцерів командної ланки з’єднань, військових частин і підрозділів зв’язку.",
                                            "<strong>Група № 2</strong> Підвищення кваліфікації офіцерів штабів з’єднань, військових частин і підрозділів зв’язку.",
                                            "<strong>Група № 3</strong> Підвищення кваліфікації офіцерів штабів з’єднань, військових частин і підрозділів зв’язку.",
                                            "<strong>Група № 4</strong> Підвищення кваліфікації офіцерів з питань розгортання та обслуговування програмно-технічних комплексів.",
                                            "<strong>Група № 5</strong> Підвищення кваліфікації офіцерів з питань розвитку та забезпечення функціонування телекомунікаційних мереж.",
                                            "<strong>Група № 6</strong> Підвищення кваліфікації офіцерів з питань застосування новітніх засобів зв'язку.",
                                        ]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>2. Центральні курси підвищення кваліфікації офіцерів – фахівців зв’язку</strong>"]} as RowElement,
                                    {
                                        value: ["<strong>Група № 1 </strong>Підвищення кваліфікації з питань забезпечення та організації електронного документування управлінської інформації."]
                                    } as RowElement,
                                ]
                            } as Row,

                            {
                                elements: [
                                    {value: ["<strong>2. Центральні курси підвищення кваліфікації офіцерів – фахівців зв’язку</strong>"]} as RowElement,
                                    {
                                        value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань забезпечення та організації електронного документування управлінської інформації."]
                                    } as RowElement,
                                ]
                            } as Row,

                            {
                                elements: [
                                    {value: ["<strong>3. Курси підвищення кваліфікації з питань захисту інформації в захищеній системі електронного документообігу Міністерства оборони України</strong>"]} as RowElement,
                                    {
                                        value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань забезпечення та організації захисту інформації в захищеній системі електронногодокументообігу Міністерства оборони України."]
                                    } as RowElement,
                                ]
                            } as Row,

                            {
                                elements: [
                                    {value: ["<strong>4. Курси підвищення кваліфікації з питань технічного захисту інформації (у сфері відкритої інформації)</strong>"]} as RowElement,
                                    {
                                        value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань технічного захисту інформації (у сфері відкритої інформації)."]
                                    } as RowElement,
                                ]
                            } as Row,

                            {
                                elements: [
                                    {
                                        value: [
                                            "<strong>5. Курси підвищення кваліфікації з питань технічного захисту інформації та кібернетичної безпеки</strong>"
                                        ]
                                    } as RowElement,
                                    {
                                        value: [
                                            "<strong>Група № 1</strong> Підвищення кваліфікації з питань кібернетичної безпеки. ",
                                            "<strong>Група № 2</strong> Підвищення кваліфікації з питань захисту інформації від витоку технічними каналами та несанкціонованого доступу.",
                                            "<strong>Група № 3</strong> Підвищення кваліфікації з питань забезпечення та організації захисту інформації в захищеній системі обміну інформації Збройних Сил України та мережі обміну службовою інформації Збройних Сил України.",
                                            "<strong>Група № 4</strong> Підвищення кваліфікації з питань кібернетичної безпеки та ведення спеціальних дій в кібернетичному просторі."
                                        ]
                                    } as RowElement,
                                ]
                            } as Row,
                        ],
                    } as Table
                ]
            } as TextBlock
        ]
    } as Unit,
]


export const why_mitit: WhyMITIT[] = [
    {
        title: "1.ВІТІ – потужний навчальний заклад у складі 3-х факультетів та 15 кафедр, Наукового центру зв'язку та інформатизації та Військового коледжу сержантського складу.",
        finalText: "Ти отримаєш диплом бакалавра, магістра в галузі ІТ-технологій та телекомунікацій!"
    } as WhyMITIT,
    {
        title: "2. ВІТІ – міжвидовий військовий навчальний заклад,",
        titleText: "який розташований в історичному центрі Києва на Печерських пагорбах та має славетні традиції та своїх видатних вихованців. Багато випускників інституту стали провідними військовими фахівцями та генералами.",
        content: [
            "Інститут готує офіцерів для Збройних Сил України (Сухопутні війська, Військово-Повітряні та Військово-Морські Сили, Сили спеціальних операцій, Десантно-штурмових військ, Головного управлінння розвідки), Служби безпеки України, Служби зовнішьої розвідки України, Національної гвардії України, Державної прикордонної служби України, Державного космічного агентства України, Державної спеціальної служби транспорту.\n",
            "Ми навчимо тебе бути професіоналом військової справи, бути сильним, вольовим та хоробрим. У нас ти знайдеш справжніх товаришів.\n",
        ],
        finalText: "Ти станеш командиром! Ти можеш стати генералом!",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "3. ВІТІ – надає професійну освіту за ступенями вищої освіти магістра",
        titleText: "за такими сучасними спеціальностями як: комп’ютерні науки та інформаційні технології, комп’ютерна інженерія, телекомунікації та радіотехніка, кібербезпека, озброєння та військова техніка.\n",
        finalText: "Ти станеш професіоналом в галузі ІТ-технологій та телекомунікацій!",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "4.ВІТІ – це база підготовки майбутніх кібервоінів. ",
        titleText: "Протягом всього терміну навчання ти будеш вивчати сучасні системи захисту інформації, апаратно-програмні засоби CISCO, волоконно-оптичні технології побудови мереж передачі повідомлень.\n",
        finalText: "Ти зможеш професійно захищати Україну в кіберпросторі!",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "5. ВІТІ – це сучасний рівень викладання",
        titleText: "з використанням інноваційних технологій та сучасних програмних продуктів на базі різноманітних навчальних класів (комп’ютерні класи, спеціалізовані лабораторії, навчально-тренувальний комплекс тощо) з залученням значного наукового потенціалу (15 докторів наук, 12 професорів, 61кандидата наук, 48 доцентів, 2 Заслужених діяча науки та техніки, 1 Заслужений працівник освіти, 1 Лауреат Державної премії України, 1 – академік галузевої академії). Постійний доступ до інститутської локальної мережі а також до мережі Internet дає можливість курсантам опановувати знання на сучасному рівні\n",
        finalText: "Навчатись дуже цікаво та перспективно.",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "",
        titleText: "",
        finalText: "",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "6. ВІТІ – це можливість підвищити рівень володіння англійською мовою.",
        titleText: "В інституті створений сучасний лінгафонний клас для поглибленого вивчення англійської мови загального, технічного та військового спрямування.\n",
        content: [
            "Курсанти інституту залучаються як перекладачі при проведенні міжнародних навчань, зустрічей з військовослужбовцями країн-членів НАТО.\n",
            "Випускники інституту беруть участь в міжнародних навчаннях, миротворчих місіях, навчаються у військових коледжах та академіях збройних сил іноземних держав.\n",
            "При закінченні ти можеш отримати свідоцтво про особистий рівень володіння іноземною мовою стандарту НАТО.\n"
        ],
        finalText: "Ти можеш навчитись та вільно спілкуватися іноземною мовою!",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "7. ВІТІ – розвиває сучасні наукові школи в галузях інформаційних технологій, електроніки та телекомунікації. ",
        titleText: "В інституті функціонує ад’юнктура та докторантура з підготовки наукових кадрів вищої кваліфікації та спеціалізована вчена рада щодо захисту кандидатських (докторських) дисертацій з визначеними науковими спеціальностями.\n" +
            "\n",
        finalText: "Після закінчення інституту ти можеш навчатись в ад’юнктурі, докторантурі та отримати наукові ступені доктора філософії та доктора наук.",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "8. ВІТІ – надає прекрасні умови для заняття спортом.",
        titleText: "Під керівництвом досвідчених офіцерів-фахівців курсанти покращують особистий рівень фізичної підготовки з бігу та силових вправ. Відпрацьовуються також й воєнно-спортивні види спорту – перетин полоси перешкод, вправи на витривалість з озброєнням.\n",
        content: [
            "Кожного року наш інститут представляє команду з військово-спортивного багатоборства, де курсанти показують свої уміння з плавання, бігу та стрільбі з пістолету.\n",
            "Щорічно відбуваються спартакіади київських ВНЗ з різних видів спорту: плавання, легкої атлетики, баскетболу, шахів, волейболу, футболу, настільному тенісу, армспорту та інше.\n"
        ],
        finalText: "Ти будеш добре фізично розвиненим!",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "9. ВІТІ – створює умови повноцінного, змістовного проведення вільного часу.",
        titleText: "Військовий колектив виховує талановитих творчих особистостей, яскраві творчі колективи.\n",
        content: [
            "Курсанти інституту постійно беруть участь та займають призові місця у Всеукраїнських конкурсах, олімпіадах, творчих виступах, в міжвишівські КВК.\n",
            "Під час звільнення та у вихідні дні є можливість знайомства зі столицею, відвідування історичних місць Києва, похід у театри.\n"
        ],
        finalText: "Ти маєш можливість розвинутись як особистість.",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "10. ВІТІ – заохочує іменними стипендіями. ",
        titleText: "Крім постійного щомісячного грошового забезпечення, кращі курсанти за результатами навчання та участі в суспільній діяльності інституту заохочуються іменними стипендіями: Президента України, Верховної Ради України, Кабінету Міністрів України, та іншими\n",
        finalText: "Ти можеш отримувати додаткову стипендію!",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "11. Випусники ВІТІ отримують посвідчення водія категорій “В”, “С”",
        titleText: "Під час основного терміну навчання ти зможеш вивчити складові автомобіля та опанувати його водіння.",
        finalText: "Ти можеш стати класним водієм!",
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,
    {
        title: "12. ВІТІ – це гарант соціального захисту:",
        content: [
            "1. Ти навчаєшся тільки на бюджетній формі навчання (за кошти держави);\n",
            "2. Ти отримуєш щомісячне грошове забезпечення протягом всього терміну навчання, за навчання на «добре» та «відмінно» - підвищене;\n",
            "3. Тебе повністю забезпечують одягом, харчуванням, місцем для проживання;\n",
            "4. Весь термін твого навчання зараховується до загальної вислуги років.\n",
            "Протягом всього терміну військової служби в ЗСУ (інших військових формуваннях) тобі гарантовано отримання стабільного грошового забезпечення!!!"
        ],
        images: [
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
        ]
    } as WhyMITIT,

]
//
// export const specialities: Speciality[] = [
//     {
//         id: 1,
//         title: "Компʼютерні науки",
//         description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
//         images: {
//             id: 1,
//             contentType: "",
//             imageFilename: ""
//         } as Image,
//     },
//     {
//         id: 2,
//         title: "Кібербезпека",
//         description: "Захист інформації та кібернетична безпека в інформаційно-телекомунікаційних системах",
//         images: {
//             id: 1,
//             contentType: "",
//             imageFilename: ""
//         } as Image,
//     },
//     {
//         id: 3,
//         title: "Інформаційні системи та технології",
//         description: "Автоматизовані системи управління військами та озброєнням",
//         images: {
//             id: 1,
//             contentType: "",
//             imageFilename: ""
//         } as Image,
//     },
//     {
//         id: 4,
//         title: "Телекомунікації та радіотехніка",
//         description: "Системи військового зв’язку",
//         images:
//             {
//                 id: 1,
//                 contentType: "",
//                 imageFilename: ""
//             } as Image,
//     },
//     {
//         id: 5,
//         title: "Військове управління (за видами збройних сил)",
//         description: "Управління діями підрозділів зв’язку",
//         images: {
//             id: 1,
//             contentType: "",
//             imageFilename: ""
//         } as Image,
//     },
//     {
//         id: 6,
//         title: "Озброєння та військова техніка",
//         description: "Радіоелектронні інформаційні системи, оперативна техніка та спецозброєння",
//         images: {
//             id: 1,
//             contentType: "",
//             imageFilename: ""
//         } as Image,
//     },
// ]
//
//
//
//
//
//
