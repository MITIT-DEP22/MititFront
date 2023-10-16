import {RouterNames} from "./RouterNames";
import {NavLink} from "entities/link";
import {Faculty} from "entities/faculty";
import {Superior} from "entities/superior";
import {Department} from "entities/department";
import {TextBlock, List} from "entities/text-block";
import {Row, RowElement, Table} from "entities/text-block/model/types";
import {Unit} from "entities/unit";
import {AccordionElement} from "entities/entrance";
import {WhyMITIT} from "entities/why_mitit";
import {Image} from "entities/image";
import {Speciality} from "entities/speciality";
export const instituteName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ"
export const upperTitle = "АКТУАЛЬНО: Набір на курси лідерства"

export const headerData = {
    linksT: [
        {id: 0, title: "Інститут", to: RouterNames.INSTITUTE},
        {id: 1, title: "Вступникам", to: RouterNames.ENTRANTS},
        {id: 2, title: "Навчання", to: RouterNames.STUDY},
        {id: 3, title: "Контакти", to: RouterNames.CONTACTS},
    ] as NavLink[],

    linksB: [
        {id: 4, title: "Новини", to: RouterNames.NEWS},
        {id: 5, title: "Наука", to: RouterNames.SCIENCE},
        {
            id: 6,
            title: "Факультети", to: RouterNames.FACULTY,
            sublinks: [
                {id: 7, title: "Факультет телекомунікаційних систем", to: RouterNames.FACULTY},
                {id: 8, title: "Факультет інформаційних технологій", to: RouterNames.FACULTY},
                {id: 9, title: "Факультет бойового застосування систем управління та звʼязку", to: RouterNames.FACULTY},
            ]
        },
        {
            title: "Кафедри", to: RouterNames.DEPARTMENT,
            sublinks: [
                {id: 10, title: "Кафедра загально-військових дисциплін", to: RouterNames.DEPARTMENT},
                {id: 11, title: "Кафедра іноземних мов", to: RouterNames.DEPARTMENT},
                {
                    id: 12,
                    title: "Кафедра фізичного виховання, спеціальної фізичної підготовки і спорту",
                    to: RouterNames.DEPARTMENT
                },
                {id: 13, title: "Кафедра військово-гуманітарних дисциплін", to: RouterNames.DEPARTMENT},
                {id: 14, title: "Кафедра математики та фізики", to: RouterNames.DEPARTMENT},
                {id: 15, title: "Кафедра військової підготовки", to: RouterNames.DEPARTMENT},
            ]
        },
        {
            id: 16,
            title: "Підрозіли", to: RouterNames.UNIT,
            sublinks: [
                {
                    id: 17, title: "Науковий центр зв’язку та інформатизації", to: RouterNames.UNIT
                },
                {
                    id: 18, title: "Батальйон забезпечення навчального процесу", to: RouterNames.UNIT
                },
                {
                    id: 19, title: "5-ті Курси перепідготовки та підвищення кваліфікації", to: RouterNames.UNIT
                },
            ]
        },
        {id: 20, title: "Співробітництво", to: RouterNames.COOPERATION},
        {id: 21, title: "Наші перемоги", to: RouterNames.OUR_WINS}
    ] as NavLink[],

    icons: [
        {iconBootstrap: "bi bi-instagram", height: 25, width: 25},
        {iconBootstrap: "bi bi-telegram", height: 25, width: 25},
        {iconBootstrap: "bi bi-facebook", height: 25, width: 25},
        {iconBootstrap: "bi bi-youtube", height: 25, width: 25},

        {iconBootstrap: "bi bi-tiktok", height: 25, width: 25}
    ]
}

export const faculties: Faculty[] = [
    {
        id: 7,
        title: "Факультет телекомунікаційних систем",
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        description: "<strong>Факультет Телекомунікаційних систем</strong> Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів.\n\nОсновною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
        superiors: [
            {
                name: "полковник РИБКА Євгеній Миколайович",
                position: "Начальник факультету",
                achievements: [
                    "лицар ордена Богдана Хмельницького III ступеня",
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛЕБІДЬ Євген Віцентович",
                position: "Заступник начальника факультету з навчальної\n" +
                    "та наукової роботи - начальник навчальної частини",
                achievements: [
                    "кандидат технічних наук",
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛАНКО Антон Вікторович",
                position: "Заступник начальника факультету\n" +
                    "з морально-психологічного забезпечення",
                achievements: [
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image
            } as Superior,
        ],
        branches: [
            "Електроніка та телекомунікації"
        ],
        specialities: [
            {
                title: "Телекомунікації та радіотехніка",
            } as Speciality
        ],
        departments: [
            {
                title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
                description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник КУЗАВКОВ Василь Вікторович",
                    achievements: [
                        "доктор технічних наук",
                        "доцент"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    }
                } as Superior

            } as Department,
            {
                title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
                description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРСЬКИЙ Тарас Григорович",
                    achievements: [
                        "кандидат технічних наук", "доцент", "учасник бойових дій"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    }
                } as Superior

            } as Department,
            {
                title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
                description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРЖІЙ Павло Миколайович",
                    achievements: [
                        "кандидат технічних наук", "учасник бойових дій"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image
                } as Superior

            } as Department,
        ],
        textBlocks: [
            {
                title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
                textContent: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                uLists: [
                    {
                        title: "На факультеті організована робота:\n",
                        items: [
                            "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
                            "підготовки ад'юнктів до захисту дисертаційних робіт."
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
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
                title: "КУРСАНТСЬКИЙ ПОБУТ",
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
                title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
                textContent: [
                    "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
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
                title: "ВИХОВНА РОБОТА",
                textContent: [
                    "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
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
                title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
                textContent: [
                    "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
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
    } as Faculty,
    {
        id: 8,
        title: "Факультет інформаційних технологій",
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,

        description: "Факультет Телекомунікаційних систем Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів.\n\nОсновною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
        superiors: [
            {
                name: "полковник РИБКА Євгеній Миколайович",
                position: "Начальник факультету",
                achievements: [
                    "лицар ордена Богдана Хмельницького III ступеня",
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛЕБІДЬ Євген Віцентович",
                position: "Заступник начальника факультету з навчальної\n" +
                    "та наукової роботи - начальник навчальної частини",
                achievements: [
                    "кандидат технічних наук",
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛАНКО Антон Вікторович",
                position: "Заступник начальника факультету\n" +
                    "з морально-психологічного забезпечення",
                achievements: [
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior,
        ],
        branches: [
            "Електроніка та телекомунікації"
        ],
        specialities: [
            {
                title: "Телекомунікації та радіотехніка"
            } as Speciality
        ],
        departments: [
            {
                title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
                description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник КУЗАВКОВ Василь Вікторович",
                    achievements: [
                        "доктор технічних наук",
                        "доцент"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                } as Superior

            } as Department,
            {
                title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
                description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРСЬКИЙ Тарас Григорович",
                    achievements: [
                        "кандидат технічних наук", "доцент", "учасник бойових дій"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                } as Superior

            } as Department,
            {
                title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
                description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРЖІЙ Павло Миколайович",
                    achievements: [
                        "кандидат технічних наук", "учасник бойових дій"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                } as Superior

            } as Department,
        ],
        textBlocks: [
            {
                title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
                textContent: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                uLists: [
                    {
                        title: "На факультеті організована робота:\n",
                        items: [
                            "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
                            "підготовки ад'юнктів до захисту дисертаційних робіт."
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
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
                title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
                textContent: [
                    "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
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
                title: "ВИХОВНА РОБОТА",
                textContent: [
                    "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
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
                title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
                textContent: [
                    "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
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
    } as Faculty,
    {
        id: 9,
        title: "Факультет бойового застосування систем управління та зв'язку",
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        description: "Факультет Телекомунікаційних систем Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів.\n\nОсновною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
        superiors: [
            {
                name: "полковник РИБКА Євгеній Миколайович",
                position: "Начальник факультету",
                achievements: [
                    "лицар ордена Богдана Хмельницького III ступеня",
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛЕБІДЬ Євген Віцентович",
                position: "Заступник начальника факультету з навчальної\n" +
                    "та наукової роботи - начальник навчальної частини",
                achievements: [
                    "кандидат технічних наук",
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛАНКО Антон Вікторович",
                position: "Заступник начальника факультету\n" +
                    "з морально-психологічного забезпечення",
                achievements: [
                    "учасник бойових дій"
                ],
                img: {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior,
        ],
        branches: [
            "Електроніка та телекомунікації"
        ],
        specialities: [
            {
                title: "Телекомунікації та радіотехніка"
            } as Speciality

        ],
        departments: [
            {
                title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
                description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник КУЗАВКОВ Василь Вікторович",
                    achievements: [
                        "доктор технічних наук",
                        "доцент"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                } as Superior

            } as Department,
            {
                title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
                description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРСЬКИЙ Тарас Григорович",
                    achievements: [
                        "кандидат технічних наук", "доцент", "учасник бойових дій"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                } as Superior

            } as Department,
            {
                title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
                description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРЖІЙ Павло Миколайович",
                    achievements: [
                        "кандидат технічних наук", "учасник бойових дій"
                    ],
                    img: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                } as Superior

            } as Department,
        ],
        textBlocks: [
            {
                title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
                textContent: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                uLists: [
                    {
                        title: "На факультеті організована робота:\n",
                        items: [
                            "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
                            "підготовки ад'юнктів до захисту дисертаційних робіт."
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
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
                title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
                textContent: [
                    "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
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
                title: "ВИХОВНА РОБОТА",
                textContent: [
                    "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
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
                title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
                textContent: [
                    "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
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
    } as Faculty
]

export const superiors: Superior[] = [
    {
        img: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        name: "ОСТАПЧУК Віктор Миколайович",
        position: "Начальник інституту",
        rang: "генерал-майор",
        achievements: [
            "лицар ордена Богдана Хмельницького III ступеня",
            "учасник бойових дій"
        ],
    },
    {
        img: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        name: "ТАРАСОВ Віталій Віталійович",
        position: "Заступник начальника інституту",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-23-08"
    },
    {
        img: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        name: "СІЛКО Олексій Вікторович",
        position: "Заступник начальника інституту з навчальної роботи",
        rang: "полковник",
        achievements: [
            "кандидат технічних наук",
            "доцент, учасник бойових дій"
        ],
        telephone: "+38 (044) 256-22-93"
    },
    {
        img: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        name: "РАДЗІВІЛОВ Григорій Данилович",
        position: "Заступник начальника інституту з наукової роботи",
        rang: "полковник",
        achievements: [
            "кандидат технічних наук",
            "доцент",
            "учасник бойових дій"
        ],
    },
    {
        img: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        name: "ПЕТРОВСЬКИЙ Олег Євгенович",
        position: "Заступник начальника інституту з морально-психологічного забезпечення",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-22-09"
    },
    {
        img: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        name: "КІМ Олексій Сергійович",
        position: "Заступник начальника інституту з озброєння - начальник озброєння",
        rang: "полковник",
        achievements: [
            "лицар ордена Богдана Хмельницького III ступеня",
            "учасник бойових дій"
        ],
    },
    {
        img: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        name: "СТАНІЛОГА Олександр Григорович",
        position: "Заступник начальника інституту з тилу - начальник тилу",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-24-44"
    }
]

export const departments: Department[] = [
    {
        id: 10,
        headerImg: {
            id: 1,
            contentType: "",
            imageFilename: ""
        } as Image,
        title: "Кафедра загальної тактики",
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
            name: "ПАВЛЕНКО Олег Анатолійович",
            rang: "полковник",
            achievements: [
                "кандидат педагогічних наук"
            ],
            position: "Начальник кафедри",
            img: {
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
            name: "КАПАНАЙКО Ірина Ярославівна",
            rang: "Пр. ЗСУ",
            achievements: [
                "кандидат філологічних наук"
            ],
            position: "Завідувач кафедри іноземних мов",
            img: {
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
            name: "БИЧІХІН Юрій Ігорович",
            rang: "полковник",
            position: "Начальник кафедри",
            img: {
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
            name: "САЄНКО Олександр Григорович",
            position: "Начальник кафедри",
            rang: "полковник",
            achievements: [
                "кандидат технічних наук"
            ],
            img: {
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
            img: {
                id: 1,
                contentType: "",
                imageFilename: ""
            } as Image,
            name: "РУДОМІНО-ДУСЯТСЬКА Ірина Анатоліївна",
            position: "Завідувач кафедри математики та фізики",
            rang: "Пр. ЗСУ ",
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
            rang: "полковник",
            name: "ТКАЧЕНКО Дмитро Віталійович",
            position: "Начальник кафедри",
            img: {
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
            rang: "полковник",
            name: " КОЛАЧОВ Сергій Петрович",
            img: {
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
            rang: "підполковник",
            name: " КУРГАН Юрій Вікторович",
            achievements: [
                "учасник бойових дій"
            ],
            img: {
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
            rang: "майор",
            name: "КРАВЧЕНКО Олексій Олександрович",
            img: {
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

export const entrances: AccordionElement[] = [
    {
        title: "Денна форма навчання ВІТІ",
        textBlocks: [
            {
                textContent: [
                    "Оголошується прийом на навчання для здобуття вищої освіти (схема підготовки “курсант”) на денну форму навчання за рахунок видатків державного бюджету (для вступників на основі повної загальної середньої освіти)"
                ],
                tables: [
                    {
                        headers: [
                            " Ступінь вищої освіти бакалавр"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність </strong>(спеціалізація)<strong>підготовки</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: [
                                            "<strong>12 Інформаційні технології</strong>"
                                        ]
                                    } as RowElement,
                                    {
                                        value: [
                                            "<strong>122 Комп’ютерні науки</strong>\n (Математичне, інформаційне і програмне забезпечення \nвійськових інформаційних систем)",
                                            "<strong>125 Кібербезпека</strong> (Захист інформації та кібернетична безпека в інформаційно-телекомунікаційних системах)",
                                            "<strong>126 Інформаційні системи та технології</strong> (Автоматизовані системи управління військами та озброєнням)"
                                        ]
                                    } as RowElement,
                                    // {value: []} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>17 Електроніка та телекомунікації</strong>"]} as RowElement,
                                    {value: ["<strong>172 Телекомунікації та радіотехніка </strong>(Системи військового зв'язку)"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>25 Воєнні науки, національна безпека, безпека державного кордону</strong>"]} as RowElement,
                                    {
                                        value: [
                                            "<strong>172 Телекомунікації та радіотехніка </strong>(Системи військового зв'язку)",
                                            "<strong>253 Військове управління (за видами збройних сил)</strong> (Радіоелектронні інформаційні системи, оперативна техніка \n та спецозброєння)"
                                        ]
                                    } as RowElement,
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання: 4 роки з можливістю подальшого вступу для здобуттям ступеня магістра (1,5 роки) за спеціальністю, 4 роки для спеціальності 253 Військове управління (за видами збройних сил) нормативний термін навчання - 4 роки.",

                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вступ буде відбуватися за:</strong>",
                    "<strong>або</strong> Мультипредметний тест 2022 року.\n",
                    "<strong>або</strong> ЗНО (2019, 2020, 2021 років):\n",
                ],
                oLists: [
                    {
                        items: [
                            "Українська мова.\n",
                            "Математика",
                            " Історія України або іноземна мова, або фізика, або географія, або хімія, або біологія.\n"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>або</strong> очні іспити (українська мова, математика та історія України)",
                    "Вступники, які вступають на навчання до Військового інституту на денну форму навчання, крім надання сертифікату (сертифікатів) Українського центру оцінювання якості освіти або \n складання вступних екзаменів з конкурсних предметів, обов'язково проходять психологічне обстеження, оцінку рівня фізичної підготовки та медичний огляд військово-лікарською комісією."
                ]
            } as TextBlock,
            {
                oLists: [
                    {
                        title: "<strong>Строки прийому заяв і документів, вступних випробувань, конкурсного відбору та зарахування на навчання:</strong>",
                        items: [
                            "Початок прийому заяв, особових справ та документів відбірковою комісією Військового інституту на денну та заочну форми навчання -<strong> 20 липня 2022 року\n</strong>",
                            "Закінчення прийому заяв, особових справ та документів відбірковою комісією Військового інституту на денну та заочну форми навчання -<strong> до 18.00 07 серпня 2022 року\n</strong>",
                            "Вступні випробування (психологічне обстеження, оцінка рівня фізичної підготовленості, медичний огляд) -<strong> 08 серпня 2022 року - 20 серпня 2022 року\n</strong>",
                            "Проведення іспитів з української мови, історії України та математики -<strong> 08 серпня 2022 року - 20 серпня 2022 року\n</strong>",
                            "Термін видання наказу на зарахування вступників до Військового інституту на денну та заочну форми навчання -<strong> до 18.00 21 серпня 2022 року</strong>"
                        ]
                    } as List,
                    {
                        title: "<strong>Освітні програми:</strong>",
                        items: [
                            "Комп'ютерні науки та інформаційні технології.\n",
                            "Кібербезпека в інформаційно-телекомунікаційних системах.\n",
                            "Кіберрозвідка, системи та комплекси спеціального призначення.\n",
                            "Інформаційні системи та технології.\n",
                            "Телекомунікаційні системи та мережі.\n",
                            "Управління діями підрозділів зв'язку.\n",
                            "Спецозброєння та робототехнічні військові комплекси."
                        ]
                    } as List
                ]
            } as TextBlock,
        ]
    } as AccordionElement,
    {
        title: "Денна форма навчання ВКСС ВІТІ",
        textBlocks: [
            {
                textContent: [
                    "Оголошується набір для підготовки військових фахівців (схема підготовки “курсант”) на денну форму навчання за рахунок видатків державного бюджету (для вступників на основі повної загальної середньої освіти)"
                ],
                tables: [
                    {
                        headers: [
                            "Освітньо-професійний ступінь фаховий молодший бакалавр"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність підготовки</strong>"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>12 Інформаційні технології</strong>"]} as RowElement,
                                    {value: ["<strong>122 Комп’ютерні науки</strong>", "<strong>125 Кібербезпека</strong>", "<strong>126 Інформаційні системи та технології</strong>"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>17 Електроніка та телекомунікації</strong>"]} as RowElement,
                                    {value: ["<strong>172 Телекомунікації та радіотехніка</strong>"]} as RowElement
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання: <strong>4 роки</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вступ буде відбуватися за:</strong>",
                    "<strong>або</strong> Мультипредметний тест 2022 року.\n",
                    "<strong>або</strong> ЗНО (2019, 2020, 2021 років):\n",
                ],
                oLists: [
                    {
                        items: [
                            "Українська мова.\n",
                            "Математика",
                            " Історія України або іноземна мова, або фізика, або географія, або хімія, або біологія.\n"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>або</strong> очні іспити (українська мова, математика та історія України)",
                ]
            } as TextBlock
        ]
    } as AccordionElement,
    {
        title: "Заочна форма навчання",
        textBlocks: [
            {
                textContent: [
                    "Оголошується набір на заочну форму навчання за рахунок видатків державного бюджету<strong> (для військовослужбовців військової служби за контрактом \n</strong>" +
                    "рядового, сержантського (старшинського) складу, які продовжили службу за новим контрактом)"
                ],
                tables: [
                    {
                        headers: [
                            "Освітньо-професійний ступінь фаховий молодший бакалавр"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність підготовки</strong>"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>12 Інформаційні технології</strong>"]} as RowElement,
                                    {value: ["<strong>122 Комп’ютерні науки</strong>", "<strong>125 Кібербезпека</strong>", "<strong>126 Інформаційні системи та технології</strong>"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>17 Електроніка та телекомунікації</strong>"]} as RowElement,
                                    {value: ["<strong>172 Телекомунікації та радіотехніка</strong>"]} as RowElement
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання: <strong>4 роки</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вступ буде відбуватися за:</strong>",
                    "<strong>або</strong> Мультипредметний тест 2022 року.\n",
                    "<strong>або</strong> ЗНО (2019, 2020, 2021 років):\n",
                ],
                oLists: [
                    {
                        items: [
                            "Українська мова.\n",
                            "Математика",
                            " Історія України або іноземна мова, або фізика, або географія, або хімія, або біологія.\n"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>або</strong> очні іспити (українська мова, математика та історія України)",
                ]
            } as TextBlock
        ]

    } as AccordionElement,
    {
        title: "Навчання в докторантурі та ад'юнктурі",
        textBlocks: [
            {
                textContent: [
                    "Військовий інститут телекомунікацій та інформатизації імені Героїв Крут (далі - інститут) оголошує набір у 2022 році до очної докторантури та ад’юнктури за спеціальностями: \n" +
                    "126 інформаційні системи та технології, 255 озброєння та військова техніка.\n",
                    "До докторантури інституту приймаються офіцери Збройних Сил України віком не старше 47 років, які мають науковий ступінь доктора філософії (кандидата наук), \n" +
                    "наукові здобутки, опубліковані праці з обраної наукової спеціальності і які мають наукові результати, що потребують завершення або оформлення у вигляді дисертації, \n" +
                    "монографії чи наукової доповіді за сукупністю статей.\n",
                    "До ад’юнктури інституту приймаються офіцери Збройних Сил України у віком до 45 років включно, які перебувають на військовій службі, здобули вищу освіту ступеня магістра \n" +
                    "(освітньо-кваліфікаційний рівень спеціаліста), виявили здібності до педагогічної або науково-дослідної роботи та мають досвід служби у військах (силах) не менше 2 років.\n",
                    "При відборі кандидатів для вступу до докторантури та ад’юнктури перевага надається офіцерам – учасникам бойових дій.\n",
                    "Для зарахування кандидатом на вступ до очної докторантури та ад’юнктури необхідно до 1 лютого 2022 року подати рапорт на вступ за підпорядкованістю. Разом з рапортом, \n" +
                    "подаються документи, перелік яких наведений в „Правилах прийому до докторантури та ад’юнктури Військового інституту телекомунікацій та інформатизації \n" +
                    "за спеціальностями 126 інформаційні системи та технології, 255 озброєння та військова техніка”, які розміщені на офіційному сайті інституту.\n",
                    "Нормативний строк підготовки доктора філософії в ад’юнктурі становить чотири роки, а підготовки доктора наук у докторантурі - два роки.\n",
                    "Вступні іспити до ад’юнктури проводяться з 1 по 30 липня 2022 року.\n",
                    "Довідки за телефоном: 256-22-73."
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вимоги до рівня освіти вступників</strong>: особи офіцерського складу віком не старше 47 років, які мають науковий ступінь доктора філософії (кандидата наук), наукові здобутки, \n" +
                    "опубліковані праці з обраної наукової спеціальності і які мають наукові результати, що потребують завершення або оформлення у вигляді дисертації, \n" +
                    "монографії чи наукової доповіді за сукупністю статей.",
                    "Оголошується набір до докторантури"
                ],
                tables: [
                    {
                        headers: [
                            "Освітньо-професійний ступінь <strong>доктор наук</strong>"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність</strong> (спеціалізація) <strong>підготовки</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>12 Інформаційні технології</strong>"]} as RowElement,
                                    {value: ["<strong>126 Інформаційні системи та технології</strong>"]} as RowElement,
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання: <strong>2 роки</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "Оголошується набір до ад'юнктури",
                    "<strong>Вимоги до рівня освіти вступників:</strong> особи офіцерського складу віком не старше 45 років, які перебувають на військовій службі, здобули вищу освіту ступеня магістра (спеціаліста), \n" +
                    "виявили здібності до педагогічної або науково-дослідної роботи та мають досвід служби у військах (силах) не менше 2 років."
                ],
                tables: [
                    {
                        headers: [
                            "Освітньо-професійний ступінь <strong>доктор філософії</strong>"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність</strong> (спеціалізація)<strong> підготовки</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>12 Інформаційні технології</strong>"]} as RowElement,
                                    {value: ["<strong>126 Інформаційні системи та технології</strong>"]} as RowElement,

                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["<strong>25 Воєнні науки, національна безпека, \n" +
                                        "безпека державного кордону</strong>"]
                                    } as RowElement,
                                    {value: ["<strong>255 Озброєння та військова техніка</strong>"]} as RowElement,
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання:<strong> 4 роки</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Додаткову інформацію про підготовку та вступ до Військового інституту телекомунікацій та інформатизації можна отримати електронною поштою за адресою:</strong>",
                    "vitivstup@viti.edu.ua\n",
                    "vitivstup@ukr.net"
                ]
            } as TextBlock

        ]
    } as AccordionElement,
    {
        title: "Підготовка за програмою офіцерів запасу",
        textBlocks: [
            {
                textContent: [
                    "Оголошується набір громадян України для підготовки за програмою офіцерів запасу з 03 березня по 31 липня 2022 року.",
                    "Набір громадян України для підготовки за програмою офіцерів запасу продовжено до<strong> 31 жовтня 2022 року.\n</strong>",
                    "Військову підготовку можуть проходити здобувачі вищої освіти (в тому числі особи жіночої статі) незалежно від форми навчання у вищих навчальних закладах та \n" +
                    "громадяни України, які мають освітній ступінь вищої освіти не нижче бакалавра, якщо їм на початок військової підготовки не виповнилося 40 років."
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вартість навчання: 8 000 грн./семестр (2 роки навчання - 32 000 грн.).</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "Навчання громадян України здійснюється методом “військового дня” без відриву від основного місця навчання або роботи протягом 2 років.\n",
                    "Після закінчення навчання присвоюється військове звання – <strong>„молодший лейтенант запасу” Збройних Сил України.</strong>"
                ],
                oLists: [
                    {
                        title: "<strong>Військово-облікові спеціальності за якими здійснюється підготовка за програмою офіцерів запасу</strong>",
                        items: [
                            "Організація захисту інформації та кібернетична безпека в інформаційно-комунікаційних системах\n" +
                            "Застосування змішаних з’єднань, військових частин і підрозділів (крім підрозділів і військових частин зв’язку та радіотехнічного забезпечення авіації)\n",

                            "Математичне та програмне забезпечення функціонування автоматизованих систем\n",

                            "Експлуатація та ремонт наземної апаратури радіозв’язку різної потужності\n",

                            "Технічне забезпечення функціонування автоматизованих систем управління\n",

                            "Експлуатація та ремонт автомобільної техніки та її аналогів\n",
                            "Організація морально-психологічного забезпечення військ (сил)"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>1) Абітурієнту до початку конкурсного відбору НЕОБХІДНО:</strong>"
                ],
                tables: [
                    {
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Якщо Ви здобувач вищої освіти</strong>"]} as RowElement,
                                    {value: ["<strong>Якщо у Вас вже є вища освіта</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["Подати до приймальної комісії заяву підписану \n" +
                                        "деканом факультету (з основного місця навчання) \n" +
                                        "про бажання проходити військову підготовку"]
                                    } as RowElement,
                                    {
                                        value: ["Подати до приймальної комісії заяву на ім’я голови \n" +
                                        "відбіркової комісії, про бажання проходити військову підготовку"]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>до заяви додати</strong>"]} as RowElement,
                                    {value: ["<strong>до заяви додати</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["4 фото 3х4"]} as RowElement,
                                    {value: ["4 фото 3х4"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["копію паспорта громадянина України (1, 2, 11 сторінки)"]} as RowElement,
                                    {value: ["копію паспорта громадянина України (1, 2, 11 сторінки)"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["копію довідки про присвоєння реєстраційного номера \n" +
                                        "облікової картки платника податків"]
                                    } as RowElement,
                                    {
                                        value: ["копію довідки про присвоєння реєстраційного номера \n" +
                                        "облікової картки платника податків"]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["копію посвідчення про приписку до призовної дільниці \n" +
                                        "(для осіб чоловічої статі)"]
                                    } as RowElement,
                                    {
                                        value: ["копію посвідчення про приписку до призовної дільниці \n" +
                                        "(для осіб чоловічої статі)"]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["витяг з навчальної картки з оцінками, \n" +
                                        "завіренний печаткою у деканаті"]
                                    } as RowElement,
                                    {value: ["копію диплому про вищу освіту, та додатка до нього"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["пройти військово-лікарську комісію за місцем перебування на військовому обліку (Направлення для проходження військово-лікарської комісії видається на кафедрі військової підготовки Військового інституту телекомунікацій та інформатизації за адресою: м. Київ, вул. Московська 45/1 з 9:00 до 17:00 щоденно, крім суботи та неділі)"]} as RowElement,
                                    {value: ["пройти військово-лікарську комісію за місцем перебування на військовому обліку (Направлення для проходження військово-лікарської комісії видається на кафедрі військової підготовки Військового інституту телекомунікацій та інформатизації за адресою: м. Київ, вул. Московська 45/1 з 9:00 до 17:00 щоденно, крім суботи та неділі)"]} as RowElement,
                                ]
                            } as Row,

                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>2) Відбіркова комісія розглядає:\n</strong>"
                ],
                tables: [
                    {
                        rows: [
                            {
                                elements: [
                                    {
                                        value: ["Придатність до військової служби за висновками \n" +
                                        "Військово-лікарської комісії"]
                                    } as RowElement,
                                    {
                                        value: ["Придатність до військової служби за висновками \n" +
                                        "Військово-лікарської комісії"]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["Рівень успішності навчання здобувачів вищої освіти"]} as RowElement,
                                    {value: ["Рівень результатів навчання громадян у ВНЗ"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["Рівень фізичної підготовки громадян"]} as RowElement,
                                    {value: ["Рівень фізичної підготовки громадян"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["Засвоєння громадянами програми допризивної підготовки"]} as RowElement,
                                    {value: ["Засвоєння громадянами програми допризивної підготовки"]} as RowElement,
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>3) Для участі у конкурсному відборі необхідно:</strong>",
                    "В день проведення конкурсного відбору (день буде доведений до абітурієнта під час подачі документів до приймальної комісії) прибути о 14 год.00 хв. \n" +
                    "у Військовий інститут телекомунікацій та інформатизації\n",
                    "При собі мати паспорт, приписне свідоцтво або військовий квиток, довідку з висновком військово-лікарської комісії про придатність до військової служби \n" +
                    "(ксерокопії не приймаються)."
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Довідка за телефонами:</strong>",
                    "098-233-46-07, 050-959-24-39, (044) 256-22-59, (044) 256-23-94\n"
                ]
            } as TextBlock,
            {
                textContent: [
                    "Додаткову інформацію про підготовку та вступ до Військового інституту телекомунікацій та інформатизації можна отримати електронною поштою за адресою:",
                    "vitivstup@viti.edu.ua\n",
                    "vitivstup@ukr.net",
                ]
            } as TextBlock
        ]

    } as AccordionElement,

]


export const educations: AccordionElement[] = [
    {
        title: "Організація освітньої діяльності",
        textBlocks: [
            {
                textContent: [
                    "<strong>Освітня діяльність у Військовому інституті телекомунікацій та інформатизації імені" +
                    " Героїв" +
                    " Крут</strong>" +
                    " (далі – ВІТІ) реалізується як освітній процес, що включає навчальну, виховну, методичну роботу та \n" +
                    "наукову і науково-технічну діяльність, відповідно до ліцензії на здійснення освітньої діяльності закладів освіти (вища освіта) наказ Міносвіти від 11.05.1995 №126 (вперше), наказ МОН від 25.02.2016 №309л \n" +
                    "(переоформлення), та передбачає видання випускникам ВІТІ документів про вищу освіту державного зразка відповідно до сертифікатів про акредитацію за відповідними спеціальностями \n" +
                    "(освітньо-професійними програмами).",
                    "<strong>Підготовка військових фахівців у ВІТІ здійснюється</strong> за очною (денною) та заочною формами" +
                    " навчання шляхом реалізації стандартів вищої освіти.",
                    "<strong>Освітній процес у ВІТІ спрямований</strong> на на реалізацію стандартів освітньої діяльності та вищої освіти як сукупності вимог до змісту та результатів освітньої діяльності ВІТІ за освітніми ступенями \n" +
                    "“бакалавр” та “магістр” в межах кожної спеціальності, за якою здійснюється підготовка" +
                    " військових фахівців у ВІТІ."
                ],
                oLists: [
                    {
                        title: "<strong>Нормативно-правові документи, які регламентують порядок здійснення освітньої діяльності У ВІТІ:</strong>",
                        items: [
                            "Закон України від 05.09.2017 № 2145-VIII \"Про освіту\";",
                            "Закон України від 01.07.2014 № 1556-VII\"Про вищу освіту;",
                            "Постанова Кабінету Міністрів України від 30 грудня 2015 р. № 1187 \"Про затвердження Ліцензійних умов провадження освітньої діяльності\";",
                            "Наказ Міністерства освіти і науки України від 11.07.2019 року № 977 “Про затвердження Положення про акредитацію освітніх програм, за якими здійснюється підготовка \n" +
                            "здобувачів вищої освіти”;",
                            "Постанова Кабінету Міністрів України від 17.08.2002 № 1134 \"Про затвердження нормативів чисельності студентів (курсантів), аспірантів (ад'юнктів), докторантів, здобувачів \n" +
                            "наукового ступеня кандидата наук, слухачів, інтернів, клінічних ординаторів на одну штатну посаду науково-педагогічного працівника у вищих навчальних закладах III і IV рівня \n" +
                            "акредитації та вищих навчальних закладах післядипломної освіти державної форми власності\";",
                            "Наказ Міністерства оборони України від 09.01.2020 № 4 \"Про затвердження Положення про особливості організації освітньої діяльності у вищих військових навчальних \n" +
                            "закладах Міністерства оборони України та військових навчальних підрозділах закладів вищої освіти\";",
                            "Наказ Міністерства оборони України від 27.05.2015 № 240 \"Про затвердження Положення про вищі військові навчальні заклади\";",
                            "Наказ Міністерства оборони України, Міністерства освіти і науки України від 19.10.2016 № 542/1255 \"Про затвердження Інструкції про порядок заміщення на конкурсній основі \n" +
                            "вакантних посад науково- педагогічних працівників у вищих військових навчальних закладах, військових навчальних підрозділах вищих навчальних закладів, що належать до \n" +
                            "сфери управління Міністерства оборони України\";",
                            "Наказ Міністерства Оборони України № 412 від 12.11.2020 «Про організацію підготовки офіцерських кадрів тактичного рівня та сержантського (старшинського) складу у закладах \n" +
                            "фахової передвищої військової освіти, вищих військових навчальних закладах Міністерства оборони України та військових навчальних підрозділах закладів вищої освіти»;",
                            "Наказ Міністерства оборони України від 05.06.2014 № 360 \"Про затвердження Інструкції про організацію та проведення військово-професійної орієнтації молоді та прийому до \n" +
                            "вищих військових навчальних закладів та військових навчальних підрозділів закладів вищої освіти\";",
                            "Наказ Міністерства оборони України від 12.01.2016 № 5 \"Про затвердження Інструкції про порядок організації і проведення військового (флотського) стажування, навчальної, \n" +
                            "виробничої, ремонтної, корабельної та інших видів практики курсантів (слухачів, студентів) вищих військових навчальних закладів, військових навчальних підрозділів \n" +
                            "вищих навчальних закладів\";",
                            "Лист Міністерства освіти і науки України від 15.08.2018 № 1/11-8681 \" Рекомендації щодо запобігання академічному плагіату та його виявлення в наукових роботах \n" +
                            "(авторефератах, дисертаціях, монографіях, наукових доповідях, статтях тощо)\";",
                            "Наказ Міністерства оборони України, Міністерства освіти і науки України від 08.05.2002 № 155/291 \"Про затвердження Інструкції з планування та обліку діяльності \n" +
                            "науково-педагогічних (педагогічних) працівників вищих військових навчальних закладів (військових навчальних підрозділів вищих навчальних закладів, \n" +
                            "навчальних центрів Збройних Сил України);",
                            "Наказ Міністерства оборони України, Міністерства освіти і науки України від 11.02.2016 №71/109 \"Про затвердження Положення про проведення атестації науково-педагогічних \n" +
                            "працівників вищих військових навчальних закладів, військових навчальних підрозділів вищих навчальних закладів, що належать до сфери управління Міністерства оборони України\";",
                            "Наказ Міністерства оборони України, Міністерства освіти і науки України від 14.12.2015 № 719/1289 \"Про затвердження Інструкції про організацію військової підготовки \n" +
                            "громадян України за програмою підготовки офіцерів запасу\";",
                            "Наказ Міністерства оборони України від 09.09.2015 № 472 \"Про затвердження Положення про екзаменаційні комісії вищих військових навчальних закладів та військових \n" +
                            "навчальних підрозділів вищих навчальних закладів\".",
                        ]
                    } as List
                ]
            } as TextBlock
        ]

    } as AccordionElement,
    {
        title: "Документи освітнього процесу",
        textBlocks: [
            {
                oLists: [
                    {
                        title: "<strong>Статут та інші установчі документи</strong>",
                        items: [
                            "Статут Військового інституту телекомунікацій та інфоматизації імені Героїв Крут(нова редакція, Наказ МОУ від 16.10.2019 № 535)",
                            "Статут Військового інституту телекомунікацій та інфоматизації (Наказ МОУ від 20.10.2015 № 572)",
                            "Стратегія і перспективні напрями розвитку освітньої, наукової та інноваційної діяльності Військового інституту телекомункаіцій та інформатизації імені Героїв Крут на період до 2025 року",
                            "Стратегія і перспективні напрями розвитку освітньої, наукової та інноваційної діяльності Військового інституту телекомункаіцій та інформатизації на період до 2020 року",
                            "Ліцензія на провадження освітньої діяльності",
                            "Відомості щодо здійснення освітньої діяльності у сфері вищої освіти",
                            "Відомості щодо права здійснення освітньої діяльності у сфері фахової передвищої освіти",
                            "Сертифікати про акредитацію освітніх програм",
                            "Державний контракт на підготовку військових фахівців, наукових, науково-педагогічних кадрів, на підвищення кваліфікації та перепідготовку кадрів 2020 2019 2018 2017",
                            "Положення про Вчену раду Військового інституту телекомунікацій та інформатизації імені Героїв Крут",
                            "Положення «Про дорадчий орган курсантської ініціативи ВІТІ імені Героїв Крут»  Наказ про введення в дію\n",
                            "Положення про воєнно-наукове товаритство курсантів ВІТІ\n",
                            "Положення «Про запобігання та врегулювання конфлікту інтересів Військового інституту" +
                            " телекомунікацій та інформатизації імені Героїв Крут»  Наказ про введення в дію</p>" +
                            "<p>Методичні рекомендації щодо запобігання та врегулювання конфлікту інтересів</p>" +
                            "<p>Роз'яснення положень антикорупційного законодавства щодо обмеження спільної роботи близьких осіб</p>" +
                            "<p>Антикорупційна програма Міністерства оборони України на 2018 - 2020 роки</p>" +
                            "<p>Організаційно-методичні вказівки з питань реалізації державної антикорупційної політики в діяльності Міністерства оборони України та Збройних Сил України в 2020 році</p>" +
                            "<p>Матеріали для інформування військовослужбовців та працівників Збройних Сил України в рамках міжнародного дня боротьби з корупцією</p>",
                            "Положенням «Про комісію з питань етики та професійної діяльності у Військовому інституті телекомунікації та інформатизації імені Героїв Крут»  Наказ про введення в дію\n",
                            "Положенням «Про забезпечення академічної доброчесності у Військовому інституті телекомунікації та інформатизації імені Героїв Крут»  Наказ про введення в дію\n" +
                            "<p>Кодекс академічної доброчесності</p>" +
                            "<p>Кодекс доброчесної поведінки та професійної етики військових посадових осіб, державних службовців та інших осіб, уповноважених на виконання функцій держави, \n" +
                            "в Міністерстві оборони України та Збройних Силах України</p>" +
                            "<p>Декларація про дотримання академічної доброчесності у Військовому інституті телекомунікації та інформатизації імені Героїв Крут</p>",
                        ]
                    } as List,
                    {
                        title: "<strong>Документи закладу вищої освіти, якими регулюється порядок здійснення освітнього процесу</strong>",
                        items: [
                            "Положення про організацію освітнього процесу у Військовому інституті телекомунікацій та інформатизації\n",
                            "Положення «Про порядок організації академічної мобільності здобувачів вищої освіти у Військовому інституті телекомунікації та інформатизації імені Героїв Крут»\n",
                            "Положення «Про визнання та перезарахування результатів навчання учасників академічної мобільності»\n",
                            "Положення «Про реалізацію права на вільний вибір навчальних дисциплін здобувачами вищої освіти Військового інституту телекомунікації та інформатизації імені Героїв Крут»  \n" +
                            "Наказ про введення в дію\n",
                            "Положення «Про індивідуальні плани здобувачів вищої освіти Військового інституту телекомунікації та інформатизації імені Героїв Крут»  Наказ про введення в дію\n",
                            "Положенням «Про переведення, відрахування та поновлення курсантів Військового інституту телекомунікацій та інформатизації імені Героїв Крут  Наказ про введення в дію\n",
                            "Положення «Про систему внутрішнього забезпеченн якості освітньої діяльності та якості вищої освіти ВІТІ»\n",
                            "Положення «Про екзаменаційні комісії вищих військових навчальних закладів та навчальних підрозділів вищих навчальних закладів»\n",
                            "Положення «Про контроль та оцінювання навчальних досягнень здобувачів вищої освіти у Військовому інституті телекомунікації та інформатизації імені Героїв Крут»\n",
                            "Положенням «Про порядок визнання у Військовому інституті телекомунікації та інформатизації імені Героїв Крут результатів навчання, здобутих у неформальній та інформальній освіті»\n",
                            "Положення про дистанційне навчання у Військовому інституті телекомунікацій та інформатизації імені Героїв Крут»\n",
                            "Положення «Про підвищення кваліфікації педагогічних та науково-педагогічних працівників у Військовому інституті телекомунікації та інформатизації імені Героїв Крут»\n" +
                            "<p>Методичні рекомендації для професійного розвитку науково-педагогічних праціників</p>" +
                            "<p>Порядок підвищення кваліфікації педагогічних і науково-педагогічних працівників</p>",
                            "Положення «Про вимоги Вченої ради ВІТІ до здобувачів вчених звань професора, доцента і старшого дослідника та порядку розгляду їх атестаційних матеріалів»\n",
                            "Положення «Про контроль освітнього процесу, вивчення стану справ на факультетах і кафедрах ВІТІ імені Героїв Крут",
                        ]
                    } as List
                ]
            } as TextBlock
        ]

    } as AccordionElement,
    {
        title: "Ліцензія, сертифікати, акредитація",
        textBlocks: [
            {
                textContent: [
                    "Ліцензія ВІТІ\n",
                    "Відомості щодо здійснення освітньої діяльності у сфері вищої освіти\n",
                    "Відомості щодо права здійснення освітньої діяльності у сфері фахової передвищої освіти"
                ],
            } as TextBlock,
            {
                textContent: [
                    "<strong>Сертифікати про акредитацію:</strong>",
                    "12 Інформаційні технології 122 Комп’ютерні науки (бакалавр)",
                    "12 Інформаційні технології 123 Комп’ютерна інженерія (бакалавр)",
                    "12 Інформаційні технології 125 Кібербезпека (бакалавр)",
                    "17 Електроніка та телекомунікації 172 Телекомунікації та радіотехніка (бакалавр)",
                    "25 Воєнні науки, національна безпека, безпека державного кордону 253 Військове управління (за видами збройних сил) (бакалавр)",
                    "25 Воєнні науки, національна безпека, безпека державного кордону 254 Забезпечення військ (сил) (бакалавр)",
                    "25 Воєнні науки, національна безпека, безпека державного кордону 255 Озброєння та військова техніка",
                    "12 Інформаційні технології 122 Комп’ютерні науки (магістр)",
                    "Освітньо-професійна програма Кібербезпека за спеціальністю 125 Кібербезпека (другий (магістерських) рівень вищої освіти)",
                    "Освітньо-професійна програма Інформаційні системи та технології за спеціальністю 126 Інформаційні системи та технології (другий (магістерських) рівень вищої освіти)",
                    "17 Електроніка та телекомунікації 172 Телекомунікації та радіотехніка (магістр)",
                    "Освітньо-професійна програма Озброєння та військова техніка за спеціальністю 255 Озброєння та військова техніка (другий (магістерських) рівень вищої освіти)",
                    "12 Інформаційні технології 122 Комп’ютерні науки (молодший спеціаліст)",
                    "17 Електроніка та телекомунікації 172 Телекомунікації та радіотехніка (молодший спеціаліст)"
                ],
            } as TextBlock,
            {
                textContent: [
                    "<strong>Акредитація 2020 (ВКСС ВІТІ):</strong>",
                    "Експертний висновок експертної комісії Міністрерства освіти і науки України за результами акредитаційної експертизи освтітньо-професійної програми \"Комп'ютерні науки\" \n" +
                    "зі спеціальності 122 Комп'ютерні науки галузі знань 12 Інформаційні технології рівня вищої освіти молодший спеціаліст у Військовому коледжі сержантського складу Військового \n" +
                    "інституту телекомунікацій та інформатизаціх імені Героїв Крут\n",
                    "Експертний висновок експертної комісії Міністрерства освіти і науки України за результами проведення первинної акредитатійної експертизи підготовки молодших спеціалістів \n" +
                    "за освтітньо-професійною програмою \"Телекомунікації та радіотехніка\" зі спеціальності 172 Телекомунікації та радіотехніка у Військовому коледжі сержантського складу Військового \n" +
                    "інституту телекомунікацій та інформатизаціх імені Героїв Крут",
                ],
            } as TextBlock,
            {
                textContent: [
                    "<strong>Акредитація 2018:</strong>",
                    "Експертний висновок експертної комісії Міністерства освіти і науки України за результатами чергової акредитаціної експертизи освітньо-кваліфікаційного рівня бакалавр з напряму \n" +
                    "підготовки 6.160101 Військове управління у Військовому інституті телекомунікацій та інформатизації\n",
                    "Висновок експертної комісії Міністерства освіти і науки України з проведення акредитаційної експертизи освітньо-професійної програми \"Кібербезпека\" галузі знань 12 \"Інформаційні технології\" \n" +
                    "за другим (магістерським) рівнем вищої освіти у Військовому інституті телекомунікацій та інформатизації\n",
                    "Експертний висновок експертної комісії Міністерства освіти і науки України за результатами акредитаційної експертизи освітньо-професійної програми \"Інформаційні системи та технології\" \n" +
                    "зі спеціальності 126 Інформаційні системи та технології за другим (магістерським) рівнем вищої освіти у Військовому інституті телекомунікацій та інформатизації\n",
                    "Експертний висновок експертної комісії Міністерства освіти і науки України за результатами первинної акредитаційної експертизи освітньо-професійної програми \"Озброєння та військова техніка\" \n" +
                    "зі спеціальності 255 Озброєння та військова техніка за другим (магістерським) рівнем вищої освіти у Військовому інституті телекомунікацій та інформатизації",
                ],
            } as TextBlock,
            {
                textContent: [
                    "<strong>Акредитація 2016:</strong>",
                    "Експертні висновоки про результати проведення чергової акредитаційної експертизи підготовки бакалаврів і спеціалістів з напряму підготовки 6.170101 \"Безпека інформаційних і \n" +
                    "комунікаційних систем\" спеціальності 7.17010181 \"Безпека інформації у спеціальних інформаційних системах\" у Військовому інституті телекомунікацій та інформатизації\n",
                    "Експертні висновоки проведення чергової акредитаційної експертизи підготовки фахівців освітньо-кваліфікаційних рівнів \"бакалаврів\", \"спеціаліст\", \"магістр\" за напрямом підговтовки 6.050903 \n" +
                    "Телекомунікації зі спеціальності 7.05090381, 8.05090381 Системи та комплекси військового зв'язку у Військовому інституті телекомунікацій та інформатизації\n",
                    "Експертні висновки за результатами акредитаційної експертизи підготовки бакалаврів, спеціалістів, магістрів з напряму підготовки, 6.050101 \"Комп'ютерні науки\", спеціальностей 7.05010181, 8.05010181 \n" +
                    "\"Інформаційні управляючі системи та технології спеціального призначаення\" у Військовому інституті телекомунікацій та інформатизації\n",
                    "Експертні висновки за результатами акредаційної експертизи підготовки фахівців освітньо-кваліфікаційного рівня \"бакалавр\" та \"спеціаліст\" з напряму підготовки 6.050201 \"Системна інженерія\" \n" +
                    "за спеціальністю 7.05020181 - \"Комплекси, системи та засоби автоматизації управління військами і озброєнням\" у Військовий інститут телекомунікацій та інформатизації\n",
                    "Експертні висновки за результатами акредитаційної експеритизи підготовки фахівців освітньо-кваліфікаційних рівнів \"бакалавр\" і \"спеціаліст\" з напряму підготовки 6.170102 \"Системи технічного \n" +
                    "захисту інформації\", спеціальності 7.17010281 \"Організація захисту інформації з обмежиним доступом та автоматизація її обробки\" у Військовому інституті телекомунікацій та інформатизації",
                ],
            } as TextBlock
        ]

    } as AccordionElement,
    {
        title: "Освітні програми",
        textBlocks: [
            {
                textContent: [
                    "<strong>Стандарти. Перший (бакалаврський) рівень вищої освіти</strong>",
                    "122 Комп’ютерні науки (Наказ МОН України від 10.07.2019 р. № 962)\n",
                    " 125 Кібербезпека (Наказ МОН України від 04.10.2018 р. № 1074)\n",
                    " 126 Інформаційні системи та технології (Наказ МОН України від 12.12.2018 р. № 1380)\n",
                    " 172 Телекомунікації та радіотехніка (Наказ МОН України від 12.12.2018 р. № 1382)\n",
                    " 253 Військове управління (за видами збройних сил) (Наказ МОН України від 29.10.2018 р. № 1168)\n",
                    " 255 Озброєння та військова техніка (Наказ МОН України від 05.12.2018 р. № 1341)",
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Стандарти. Другий (магістерський) рівень вищої освіти</strong>",
                    "122 Комп’ютерні науки (Проект)\n",
                    " 125 Кібербезпека\n",
                    " 126 Інформаційні системи та технології\n",
                    " 172 Телекомунікації та радіотехніка\n",
                    " 255 Озброєння та військова техніка (Наказ МОН України від 30.04.2020 р. № 583)",
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Стандарти. Третій (освітньо-науковий) рівень вищої освіти</strong>",
                    "Тимчасовий стандарт вищої освіти третій (освітньо-науковий) рівень “Інформаційні системи та технології” 2020  Наказ про введення в дію\n",
                    " Тимчасовий стандарт вищої освіти третій (освітньо-науковий) “Озброєння та військова техніка” 2020  Наказ про введення в дію"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Професійні стандарти:</strong>",
                    "Про затвердження та введення в дію професійних стандартів 2020\n",
                    " Про затвердження та введення в дію професійних стандартів 2017"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Освітні програми:</strong>",
                    "Положення «Про розроблення, затвердження, моніторинг та перегляд освітніх програм Військового інституту телекомунікацій та інформатизації імені Героїв Крут»  Наказ про введення в дію\n",
                    "<strong>Пройти опитування:</strong>  Визначення рівня залучення здобувачів вищої освіти до" +
                    " розроблення і перегляду освітньої програми"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Перший (бакалаврський) рівень вищої освіти</strong>",
                    " Наказ про введення в дію освітньо-професійних програм першого (бакалаврського) рівня вищої освіти\n",
                    " Освітня програма першого (бакалаврського) рівня “Комп'ютерні науки та технології” 2020\n",
                    " Освітня програма першого (бакалаврського) рівня “Кібербезпека в інформаційно-телекомунікаційних системах” 2020\n",
                    " Освітня програма першого (бакалаврського) рівня “Інформаційні системи та технології” 2020\n",
                    " Освітня програма першого (бакалаврського) рівня “Телекомунікаційні системи та мережі” 2020\n",
                    " Освітня програма першого (бакалаврського) рівня “Управління діями підрозділів зв'язку” 2020\n",
                    " Освітня програма першого (бакалаврського) рівня “Спецозброєння та робототехнічні військові комплекси” 2020"
                ]
            } as TextBlock,
            {
                textContent: [
                    " Освітня програма першого (бакалаврського) рівня “Комп'ютерні науки” 2017\n",
                    " Освітня програма першого (бакалаврського) рівня “Кібербезпека” 2017\n",
                    " Освітня програма першого (бакалаврського) рівня “Інформаційні системи та технології” 2017\n",
                    " Освітня програма першого (бакалаврського) рівня “Телекомунікація та радіотехніка” 2017\n",
                    " Освітня програма першого (бакалаврського) рівня “Військове управління” 2017\n",
                    " Освітня програма першого (бакалаврського) рівня “Озброєння та військова техніка” 2017",
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Другий (магістерський) рівень вищої освіти</strong>",
                    " Освітня програма другого (магістерського) рівня “Комп'ютерні науки” 2017\n",
                    " Освітня програма другого (магістерського) рівня “Кібербезпека” 2017\n",
                    " Освітня програма другого (магістерського) рівня “Інформаційні системи та технології” 2017\n",
                    " Освітня програма другого (магістерського) рівня “Телекомунікація та радіотехніка” 2017\n",
                    " Освітня програма другого (магістерського) рівня “Озброєння та військова техніка” 2017",
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Третій (освітньо-науковий) рівень вищої освіти</strong>",
                    " Освітня програма третього (освітньо-наукового) рівня “Інформаційні системи та технології” 2020\n",
                    " Освітня програма третього (освітньо-наукового) рівня “Озброєння та військова техніка” 2020\n",
                    " Освітня програма третього (освітньо-наукового) рівня “Комп'ютерні науки” 2017\n",
                    " Освітня програма третього (освітньо-наукового) рівня “Інформаційні системи та технології” 2017\n",
                    " Освітня програма третього (освітньо-наукового) рівня “Озброєння та військова техніка” 2017\n",
                    " Освітня програма третього (освітньо-наукового) рівня “Комп'ютерні науки та інформаційні технології” 2016\n",
                    " Освітня програма третього (освітньо-наукового) рівня “Озброєння та військова техніка” 2016",
                ]
            } as TextBlock,
        ]

    } as AccordionElement,
    {
        title: "Силабуси",
        textBlocks: [
            {
                textContent: [
                    "<strong>Навчальні плани. Перший (бакалаврський) рівень вищої освіти</strong>",
                    " Навчальний план підготовки за ОПП першого (бакалаврського) рівня “Комп'ютерні науки” 2018\n",
                    " Навчальний план підготовки за ОПП першого (бакалаврського) рівня “Кібербезпека” 2018\n",
                    " Навчальний план підготовки за ОПП першого (бакалаврського) рівня “Інформаційні системи та технології” 2018\n",
                    " Навчальний план підготовки за ОПП першого (бакалаврського) рівня “Телекомунікація та радіотехніка” 2018\n",
                    " Навчальний план підготовки за ОПП першого (бакалаврського) рівня “Військове управління” 2018\n",
                    " Навчальний план підготовки за ОПП першого (бакалаврського) рівня “Озброєння та військова техніка” 2018",
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Навчальні плани. Другий (магістерський) рівень вищої освіти</strong>",
                    " Навчальний план підготовки за ОПП другого (магістерського) рівня “Комп'ютерні науки” 2018\n",
                    " Навчальний план підготовки за ОПП другого (магістерського) рівня “Кібербезпека” 2018\n",
                    " Навчальний план підготовки за ОПП другого (магістерського) рівня “Інформаційні системи та технології” 2018\n",
                    " Навчальний план підготовки за ОПП другого (магістерського) рівня “Телекомунікація та радіотехніка” 2018\n",
                    " Навчальний план підготовки за ОПП другого (магістерського) рівня “Озброєння та військова техніка” 2018",
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Силабуси. Перший (бакалаврський) рівень вищої освіти</strong>",
                    " Компоненти освітньо-професійної програми Комп'ютерні науки та технології першого (бакалаврського) рівня 2020\n",
                    " Компоненти освітньо-професійної програми Кібербезпека в інформаційно-телекомуінкаційних системах першого (бакалаврського) рівня 2020\n",
                    " Компоненти освітньо-професійної програми Інформаційні системи та технології першого (бакалаврського) рівня 2020\n",
                    " Компоненти освітньо-професійної програми Телекомунікаційні системи та мережі першого (бакалаврського) рівня 2020\n",
                    " Компоненти освітньо-професійної програми Управління діями підрозділів зв'язку першого (бакалаврського) рівня 2020\n",
                    " Компоненти освітньо-професійної програми Спецозброєння та робототехнічні військові комплекси першого (бакалаврського) рівня 2020",
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Силабуси. Другий (магістерський) рівень вищої освіти</strong>",
                    " Компоненти освітньо-професійної програми Комп'ютерні науки другого (магістерського) рівня 2018\n",
                    " Компоненти освітньо-професійної програми Кібербезпека другого (магістерського) рівня 2018\n",
                    " Компоненти освітньо-професійної програми Інформаційні системи та технології другого (магістерського) рівня 2018\n",
                    " Компоненти освітньо-професійної програми Телекомунікації та радіотехінка другого (магістерського) рівня 2018\n",
                    " Компоненти освітньо-професійної програми Озброєння та військова техніка другого (магістерського) рівня 2018",
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Силабуси. Третій (освітньо-науковий) рівень вищої освіти</strong>",
                    " Компоненти освітньо-наукової програми Інформаційні системи та технології третього (освітньо-наукового) рівня 2020\n",
                    " Компоненти освітньо-наукової програми Озброєння та військова техніка третього (освітньо-наукового) рівня 2020",
                ]
            } as TextBlock
        ]

    } as AccordionElement,
    {
        title: "Методична робота",
        textBlocks: [
            {
                textContent: [
                    "Методична робота в інституті є складовою освітнього процесу і одним з основних видів діяльності командування інституту, факультетів, кафедр, науково-педагогічних працівників, \n" +
                    "командирів підрозділів курсантів, яка спрямована на вирішення завдань з підвищення якості підготовки фахівців на основі комплексного підходу до вдосконалення змісту, організації й методів навчання",
                    "<strong>Документи закладу вищої освіти, якими регулюється порядок здійснення освітнього процесу:\n</strong>"
                ],
                oLists: [
                    {
                        title: "Положення «Про навчально-методичний кабінет Військового інституту телекомунікацій та інформатизації імені Героїв Крут»  Наказ про введення в дію\n",
                        items: [
                            "Положення «Про планування та облік навантаження НПП»  Наказ про введення в дію",
                            "Інструкція з планування та обліку навчальної, методичної, наукової, науково-технічної, організаційної та інших видів діяльності науково-педагогічних працівників Військового інституту \n" +
                            "телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Інструкція щодо порядку ведення поточних (звітних) документів з методичної роботи у Військовому інституті телекомунікацій та інформатизації імені Шероїв Крут\n",
                            "Інструкція про порядок розробки, обліку та зберігання навчально-методичних матеріалів у Військовому інституті телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Методичні рекомендації щодо форм документів для проведення навчальних занять\n",
                            "Положення «Про оцінювання роботи та визначення рейтингів наукових, науково-педагогічних і педагогічних працівників у Військовому інституті телекомунікації та інформатизації імені Героїв Крут»\n",
                            "Положення «Про кураторів навчальних груп Військового інституту телекомунікацій та інформатизації»  Наказ про введення в дію\n",
                            "Методичні рекомендації кураторам навчадьних грул курсантів і слухачів ВВНЗ і ВНП ЗВО\n" +
                            "<p>Наказ Про призначення кураторів навчальних груп курсантів на 2020-2021 навчальний рік\n</p>" +
                            "<p>Наказ Про призначення кураторів навчальних груп курсантів на 2019-2020 навчальний рік\n</p>" +
                            "<p>Наказ Про призначення кураторів навчальних груп курсантів на 2018-2019 навчальний рік\n</p>",
                            "Наказ Міністерства оборони України від 01 листопада 2005 року № 654 «Про затвердження Інструкції про порядок підготовки до видання навчальної літератури та наукових \n" +
                            "публікацій у Збройних Силах України»\n",
                            "Положення «Про організацію проведення конкурсу на кращий підручник, навчальний посібник, монографію Військового інституту телекомунікацій та інформатизації імені Героїв Крут» \n" +
                            "(2021 рік)  Наказ про введення в дію\n" +
                            "<p>Положення «Про організацію проведення конкурсу на кращий підручник, навчальний посібник, монографію Військового інституту телекомунікацій та інформатизації імені Героїв Крут» (2017 рік)</p>",
                        ]
                    } as List,
                    {
                        title: "<strong>Основні завдання методичної роботи інституту на 2020 - 2021 навчальний рік\n</strong>",
                        items: [
                            "Удосконалення організації та забезпечення освітнього процесу, підвищення мотивації" +
                            " курсантів на більш глибоке засвоєння військової підготовки.\n",
                            "Підвищення наукового і методичного рівня викладання, його фундаментальність та військово-професійну спрямованість під час проведення міжкафедральних нарад науково-педагогічних \n" +
                            "працівників та інструкторсько-методичних занять.\n",
                            "Удосконалення організації та методики проведення практичної підготовки, практики та військового стажування, домагаючись при цьому прищеплення курсантам навичок у практичному \n" +
                            "застосуванні засобів зв’язку, телекомунікаційного обладнання, засобів обчислювальної техніки, експлуатації та ремонту військової техніки зв’язку.\n",
                            "Продовження впровадження новітніх технологій інтенсифікації навчального процесу та активних методів навчання за рахунок підвищення методичної майстерності науково-педагогічних \n" +
                            "працівників, командирів підрозділів курсантів та широкого застосування технічних засобів навчання, ЕОМ та дидактичних матеріалів до них.\n",
                            "Постійне вдосконалення змісту робочих програм навчальних дисциплін шляхом введення питань експлуатації військової техніки зв’язку в умовах ведення бойових дій у зоні проведення \n" +
                            "антитерористичній операції.\n",
                            "Продовження практики написання підручників, навчальних посібників, навчально-методичних і дидактичних матеріалів з використанням досвіду проведення бойових дій, використання \n" +
                            "зразків техніки зв’язку та програмних продуктів в зоні АТО.\n",
                            "Проведення аналізу відгуків на випускників та здійснення дієвих заходів щодо усунення недоліків в їх підготовці, максимально наближаючи освітній процес до вимог сьогодення, керівних \n" +
                            "документів Міністерства освіти та науки, Міністерства оборони України, Генерального штабу ЗС України."
                        ]
                    } as List
                ]
            } as TextBlock
        ]

    } as AccordionElement,
    {
        title: "Матеріально-технічна база",
        textBlocks: [
            {
                textContent: [
                    "Матеріально-технічна база військового інституту – це потужний комплекс навчальних, матеріальних і технічних засобів, будівель, споруд, майнових комплексів, обладнання, іншого майна, \n" +
                    "призначених для забезпечення підготовки курсантів відповідно до освітньо-професійних програм, навчальних планів, сучасних технологій та методик навчання, а також для виконання наукових \n" +
                    "досліджень і підготовки науково-педагогічних кадрів.\n",
                    "Матеріально-технічна база інституту відповідає вимогам, які висуваються сьогодні для підготовки військових фахівців за відповідними спеціальностями підготовки."
                ],
                uLists: [
                    {
                        title: "<strong>Основними елементами матеріально-технічної бази інституту є:</strong>",
                        items: [
                            "лекційних аудиторій - 9\n",
                            "навчальних аудиторій - 39\n",
                            "лабораторних аудиторій - 13\n",
                            "спеціалізованих аудиторій - 40\n",
                            "комп'ютерних та інших аудиторій - 10\n",
                            "лінгафонний кабінет - 2\n",
                            "спортивні зали -4 (зал атлетичний, зал ігровий, зал тренажерний, зал рукопашного бою)\n",
                            "стрілецький тир (25 м) -1\n",
                            "гімнастичний майданчик з багатопрогоновими спортивними приладами, спортивне містечко для занять силовими вправами, 4 майданчика для гри, смуга перешкод\n",
                            "комплекс (навчально-тренувальний) -1",
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Батальйон забезпечення навчального процесу розміщується в двох будівлях, що знаходяться на території військової частини польова пошта А0415 смт. Семиполки, має навчальні майданчи \n" +
                    "з розгорнутими засобами зв'язку, навчальне тактичне поле з загальновійськових дисциплін."
                ],
                oLists: [
                    {
                        title: "<strong>Документи закладу вищої освіти, якими регулюється порядок здійснення освітнього процесу:\n</strong>",
                        items: [
                            "Наказ начальника інституту Про введення в дію положень з охорони праці та перегляд інструкцій з охорони праці\n",
                            "Положення про службу охорони праці Військового інституту телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Положення про порядок проведення навчання і перевірки знань з питань охорони праці та безпеки життєдіяльності у Військовому інституті телекомунікацій та інформатизації імені Героїв Крут",
                            "Положення про медичний огляд праціників певних категорій Військового інституту телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Положення про систему управління охороною праці у Військовому інституті телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Положення про комісію з питань охорони праці Військового інституту телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Положення про діяльність уповноважених найманими працівниками осіб з питань охорони праці Військового інституту телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Інструкція з охорони праці №37 для начальника науково-організаційного відділу\n",
                            "Інструкція з охорони праці №38 для старшого помічника начальника науково-організаційного відділу\n",
                            "Інструкція з охорони праці №39 для помічника начальника науково-організаційного відділу\n",
                            "Інструкція з охорони праці №40 для старшого наукового спвіробітника науково-організаційного відділу\n",
                            "Інструкція з охорони праці №41 для наукового співробітника науково-організаційного відділу\n",
                            "Інструкція з охорони праці №42 для молодшого наукового співробтника науково-організаційного відділу\n",
                            "Інструкція з охорони праці №43 для начальника групи військово-технічної інформації\n",
                            "Інструкція з охорони праці №44 для редактора групи військово-технічної інформації",
                        ]
                    } as List
                ]
            } as TextBlock
        ]

    } as AccordionElement,
    {
        title: "Дистанціне навчання ВІТІ",
        textBlocks: [
            {
                oLists: [
                    {
                        title: "<strong>Керівні документи</strong>",
                        items: [
                            "Положення про дистанційне навчання, затверджене наказом Міністерства освіти і науки України від 25 квітня 2013 року № 466\n",
                            "Наказ Міністерства освіти і науки України 30.10.2013 № 1518 Про затвердження Вимог до вищих навчальних закладів та закладів післядипломної освіти, наукових, освітньо-наукових установ, \n" +
                            "що надають освітні послуги за дистанційною формою навчання з підготовки та підвищення кваліфікації фахівців за акредитованими напрямами і спеціальностями",
                            "Концепція дистанційного навчання у Збройних Силах України\n",
                            "Концепція розвитку дистанційного навчання у Військовому інституті телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Положення про дистанційне навчання у Військовому інституті телекомунікацій та інформатизації імені Героїв Крут"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Мережева Академія Сisco</strong>",
                    "У Військовому інституті телекомунікацій та інформатизації успішно функціонує локальна Мережева Академія Сisco: на кафедрі Автоматизованих систем систем управління факультету \n" +
                    "Інформаційних технологій.\n",
                    "Керівник Академії - начальник кафедри Автоматизованих систем управління д.т.н., с.н.с." +
                    " підполковник <strong>СОВА Олег Ярославович.</strong>",
                    "З числа особового складу Військового інституту було підготовлено 3 сертифікованих інструктори: підполковник Троцько О.О., підполковник Білан А.М., майор Симоненко О.А."
                ],
                uLists: [
                    {
                        title: "<strong>Військовий інститут телекомунікацій та інформатизації здійснює підготовку військових фахівців на курсах:</strong>",
                        items: [
                            "IT Essentials\n",
                            "CCNA R&S;: Introduction to Networks\n",
                            "CCNA Security"
                        ]
                    } as List,
                    {
                        title: "<strong>Курси дистанційного навчання</strong>",
                        items: [
                            "Система дистанційного навчання ВІТІ (Moodle)\n",
                            "Кафедра автоматизованих систем управління (CISCO Networking Academy)\n",
                            "Кафедра захисту інформації та кібербезпеки (Linux Professional Institute)\n",
                            "Кафедра математики та фізики (Авторські матеріали доктора педагогічних наук, професора Суся Б.А.)\n",
                            "Основи програмування CS50 2019 (Prometheus)\n",
                            "Курси з програмування (SoloLearn)"
                        ]
                    } as List
                ]
            } as TextBlock
        ]

    } as AccordionElement,
    {
        title: "Бібліотека ВІТІ",
        textBlocks: [
            {
                textContent: [
                    "Бібліотека Військового інституту телекомунікацій та інформатизації є бібліотечно-бібліографічним, культурно-просвітницьким підрозділом інституту. \n" +
                    "Вона робить вагомий внесок у бібліотечно-інформаційне, освітнє та культурне обслуговування наукових та науково-педагогічних працівників, докторантів, ад’юнктів, робітників інституту, \n" +
                    "військовослужбовців та працівників ЗСУ інституту, курсантів, студентів. Задовольняє інформаційні запити користувачів, сприяє підвищенню їхнього загальнотеоретичного, ідеологічного та \n" +
                    "культурного рівня, рівня військових знань, фахової та службової кваліфікації, бойової готовності, зміцнення військової дисципліни."
                ],
                oLists: [
                    {
                        items: [
                            "Положення про біліотеку Військового інституту телекомунікацій та інформатизації імені Героїв Крут\n",
                            "Правила користування бібліотекою Військового інституту телекомунікацій та інформатизації"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Загальний фонд літератури бібліотеки</strong>",
                    "Станом на квітень 2018 року бібліотека налічує понад 172 041 примірників основного фонду літератури, 80 комплектів періодичних видань та 7688 примірників літератури з грифом ДСК."
                ],
                uLists: [
                    {
                        title: "Бібліотека має:",
                        items: [
                            "фонд навчальної літератури;\n",
                            "фонд читального залу;\n",
                            "фонд художньої літератури;\n",
                            "фонд періодичних видань;\n",
                            "фонд літератури з грифом ДСК."
                        ]
                    } as List
                ]
            } as TextBlock
        ]

    } as AccordionElement,
]
export const publicInfo: TextBlock[] = [
    {
        oLists: [
            {
                items: [
                    "Реєстр суб'єктів освітньої діяльності\n" +
                    "<p>Виписка з Єдиного державного реєстру юридичних осіб, фізичних осіб-підприємців та громадських формувань ВІТІ імені Героїв Крут\n</p>" +
                    "<p>Довідка з відомчого обліку Міністерства оборони України в Єдиному державному реєстрі юридичних осіб, фізичних осіб-підприємців та громадських формувань ВІТІ імені Героїв Крут\n</p>",
                    "Статут Військового інституту телекомунікацій та інфоматизації імені Героїв Крут (нова редакція)\n",
                    " Стратегія і перспективні напрями розвитку освітньої, наукової та інноваційної діяльності ВІТІ на період до 2020 року\n",
                    " Командування інституту",
                    "Колективний договір ВІТІ імені Героїв Крут на 2019 - 2021 роки Реєстрація: Профспілка працівників ЗСУ\n",
                    "Колективний договір ВІТІ на 2016 - 2017 роки Зміни та доповнення: 2017 рік 2017 рік 2018 рік\n" +
                    "<p>Колективний договір ВІТІ ДУТ на 2014 - 2016 роки Зміни та доповнення: 2014 рік 2015 рік 2015 рік\n </p>" +
                    "<p>Кошторис закладу вищої освіти та всі зміни до нього\n</p>",
                    "Зведені показники виконання кошторису ВІТІ\n",
                    " Інформація щодо тендерних процедур\n",
                    "Державні закупівлі\n",
                    "Штатний розпис (містить інформацію з обмеженим доступом (п.2.2 наказу Генерального штабу ЗСУ №408 від 22.11.2017 \"Про затвердження Переліку відомостей Збройних Сил України, \n" +
                    "що становлять службову інформацію\")\n",
                    "Ліцензія на провадження освітньої діяльності\n",
                    "Ліцензований обсяг та фактична кількість осіб, які навчаються у закладі освіти (Інформація про кількість осіб, які навчається у Військовому інституті телекомунікацій та інформатизації \n" +
                    "імені Героїв Крут є інформацію з обмеженим доступом (п.3.27 наказу Генерального штабу ЗСУ №408 від 22.11.2017 \"Про затвердження Переліку відомостей Збройних Сил України, \n" +
                    "що становлять службову інформацію\")\n",
                    "Сертифікати про акредитацію освітніх програм\n",
                    " Освітні програми, що реалізуються в закладі освіти, та перелік освітніх компонентів, що передбачені відповідною освітньою програмою\n",
                    " Мова (мови) освітнього процесу - державна мова (Відповідно до статті 48 Закону України від 01.07.2014 № 1556-VII \"Про вищу освіту\")\n",
                    " Система менеджменту якості\n",
                    " Напрями наукової та/або мистецької діяльності (для закладів вищої освіти) - інформація про напрями наукової та/або мистецької діяльності є інформацію з обмеженим доступом \n" +
                    "(п.20.6 наказу Генерального штабу ЗСУ №408 від 22.11.2017 \"Про затвердження Переліку відомостей Збройних Сил України, що становлять службову інформацію\")\n",
                    "Матеріально-технічне забезпечення закладу освіти (згідно з ліцензійними умовами) - відповідно до статті 45 Постанови Кабінету Міністрів України від 10.05.2018 № 347 \"Ліцензійні умови \n" +
                    "провадження освітньої діяльності\" вищі військові заклади освіти (заклади вищої освіти із специфічними умовами навчання) не висвітлюють відомості про матеріально-технічне забезпечення на електронних ресурсах\n",
                    "Наявність гуртожитків та вільних місць у них, розмір плати за проживання - Курсанти упродовж всього періоду навчання безкоштовно розміщуються в казармах (спальних приміщеннях, гуртожитках) \n" +
                    "у порядку, встановленому Статутом внутрішньої служби Збройних Сил України\n",
                    "Наявність вакантних посад,\n" +
                    "порядок і умови проведення конкурсу на їх заміщення (у разі їх проведення)\n" +
                    "Річний звіт про діяльність закладу освіти - Звіт про роботу ВВНЗ (ВНП ВНЗ) за навчальний рік – інформація, яка міститься у Звіті є інформацією з обмеженим доступом згідно п.5.7.ОС \n" +
                    "Директиви начальника Генеральнго штабу – Головнокомандувача ЗСУ № ДГШ-6 від 06.03.2014 \"Про затвердження Табелю термінових донесень Збройних Сил України з кадрових питань \n" +
                    "та підготовки військових фахівців\"\n",
                    "Правила прийому до закладу освіти у відповідному році\n",
                    " Розмір плати за навчання, підготовку, перепідготовку, підвищення кваліфікації здобувачів освіти - Підготовка здобувачів вищої освіти здійснюється за рахунок коштів державного замовлення\n",
                    " Перелік додаткових освітніх та інших послуг, їх вартість, порядок надання та оплати\n",
                    " Положення о преміюванні працівників ВІТІ за загальні результати діяльності\n" +
                    "<p>Наказ Міністерства оборони України від 13 грудня 2004 року № 608 «Про виплату науковим працівникам Збройних Сил України надбавки за стаж наукової роботи»\n</p>" +
                    "<p>Наказ Міністерства оборони України від 11 лютого 2008 року № 40 «Про затвердження Інструкції про порядок відбору кандидатів та виплати академічних (соціальних) стипендій курсантам, \n" +
                    "слухачам і ад’юнктам вищих військових навчальних закладів Збройних Сил України та військових навчальних підрозділів вищих навчальних закладів»\n</p>"
                ]
            } as List
        ]
    } as TextBlock
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
