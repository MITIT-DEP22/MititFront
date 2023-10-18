import {RouterNames} from "../enums/RouterNames";
import {Image} from "../../entities/image";
import {Superior} from "../../entities/superior";
import {TextBlock} from "../../entities/text-block";
import {Page} from "../../entities/page";

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
                    fullName: "полковник РИБКА Євгеній Миколайович",
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
                } as Superior,
                {
                    fullName: "підполковник ЛЕБІДЬ Євген Віцентович",
                    position: "Заступник начальника факультету з навчальної\n" +
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
                } as Superior,
                {
                    fullName: "підполковник ЛАНКО Антон Вікторович",
                    position: "Заступник начальника факультету\n" +
                        "з морально-психологічного забезпечення",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image
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
        {} as TextBlock,
        {} as TextBlock,
        {} as TextBlock,
        {} as TextBlock,
        {} as TextBlock,
        {} as TextBlock,

    ]
} as Page
