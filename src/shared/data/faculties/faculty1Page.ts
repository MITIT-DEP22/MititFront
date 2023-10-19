import {Image} from "entities/image";
import {RouterNames} from "shared/enums/RouterNames";
import {Superior} from "entities/superior";
import {List, TextBlock} from "entities/text-block";
import {Page} from "entities/page";

export const faculty1Page = {
    title: "Факультети",
    name: RouterNames.FACULTY_1.name,
    titleImage: {id: 1} as Image,
    textBlocks: [
        {
            title: [
                "Факультет Телекомунікаційних систем",
            ]
        },
        {
            textContent: [
                "<strong>Факультет Телекомунікаційних систем</strong> Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів. <br> <br>Основною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
            ]
        },
        {
            superiors: [
                {
                    fullName: "РИБКА Євгеній Миколайович",
                    position: "Начальник факультету",
                    achievements: [
                        "лицар ордена Богдана Хмельницького III ступеня",
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: 'полковник'
                } as Superior,
                {
                    fullName: "ЛЕБІДЬ Євген Віцентович",
                    position: "Заступник начальника факультету з навчальної" +
                        "та наукової роботи - начальник навчальної частини",
                    achievements: [
                        "кандидат технічних наук",
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: "підполковник"
                } as Superior,
                {
                    fullName: "ЛАНКО Антон Вікторович",
                    position: "Заступник начальника факультету" +
                        "з морально-психологічного забезпечення",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: "підполковник"
                } as Superior
            ]
        }
        ,
        {
            uLists: [
                {
                    title: "ФАКУЛЬТЕТ ГОТУЄ СПЕЦІАЛІСТІВ В ГАЛУЗІ ЗНАНЬ:",
                    items: ["Електроніка та телекомунікації"]
                }
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "ЗА СПЕЦІАЛЬНІСТЮ:",
                    items: ["Телекомунікації та радіотехніка"]
                }
            ]
        } as TextBlock,
        {
            textContent: ["ДО СКЛАДУ ФАКУЛЬТЕТУ ОРГАНІЗАЦІЙНО ВХОДЯТЬ 3 КАФЕДРИ:"]
        } as TextBlock,
        {
            superiors: [
                {
                    textContent: [
                        "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
                        "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями."
                    ],
                    position: "Начальник кафедри",
                    fullName: "КУЗАВКОВ Василь Вікторович",
                    achievements: [
                        "доктор технічних наук",
                        "доцент"
                    ],
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    },
                    militaryRank: "полковник",
                } as Superior,
                {
                    textContent: [
                        "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
                        "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку."
                    ],
                    position: "Начальник кафедри",
                    fullName: "ГУРСЬКИЙ Тарас Григорович",
                    achievements: [
                        "кандидат технічних наук",
                        "доцент",
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    },
                    militaryRank: "полковник",
                } as Superior,
                {
                    textContent: [
                        "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
                        "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління."
                    ],
                    position: "Начальник кафедри",
                    fullName: "ГУРЖІЙ Павло Миколайович",
                    achievements: [
                        "кандидат технічних наук",
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    },
                    militaryRank: "полковник",
                } as Superior
            ]
        } as TextBlock,
        {
            textContent:[
                "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
                "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань."
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "На факультеті організована робота:",
                    items: [
                        "підготовки воєнно-наукового товариства (ВНТ) курсантів;\n",
                        "підготовки ад'юнктів до захисту дисертаційних робіт.\n"
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
            textContent: [
                "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА"
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
                } as Image
            ]
        } as TextBlock,
        {
            textContent: [
                "КУРСАНТСЬКИЙ ПОБУТ"
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
                } as Image

            ]
        } as TextBlock,
        {
            textContent: [
                "НАВЧАЛЬНІ ЗАНЯТТЯ",
                "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
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
                } as Image
            ]
        } as TextBlock,
        {
            textContent: [
                "ВИХОВНА РОБОТА",
                "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
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
                {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 1,
                    contentType: "",
                    imageFilename: ""
                } as Image
            ]
        } as TextBlock,
        {
            textContent: [
                "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
                "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
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
                } as Image
            ]
        } as TextBlock
    ]
} as Page
