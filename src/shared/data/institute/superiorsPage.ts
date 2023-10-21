import {Page} from "../../../entities/page";
import {RouterNames} from "../../enums/RouterNames";
import {Image} from "../../../entities/image";

export const superiorsPage: Page = {
    name: RouterNames.SUPERIORS.name,
    title: "керівний склад",
    titleImage: {id: 16247} as Image,
    textBlocks: [
        {
            title: "Керівний склад"
        },
        {
            superiors: [{
                image: {
                    id: 16359,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                fullName: "ОСТАПЧУК Віктор Миколайович",
                position: "Начальник інституту",
                militaryRank: "генерал-майор",
                achievements: [
                    "лицар ордена Богдана Хмельницького III ступеня",
                    "учасник бойових дій"
                ],
            },
                {
                    image: {
                        id: 16360,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    fullName: "ТАРАСОВ Віталій Віталійович",
                    position: "Заступник начальника інституту",
                    militaryRank: "полковник",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    phoneNumber: "+38 (044) 256-23-08"
                },
                {
                    image: {
                        id: 16361,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    fullName: "СІЛКО Олексій Вікторович",
                    position: "Заступник начальника інституту з навчальної роботи",
                    militaryRank: "полковник",
                    achievements: [
                        "кандидат технічних наук",
                        "доцент, учасник бойових дій"
                    ],
                    phoneNumber: "+38 (044) 256-22-93"
                },
                {
                    image: {
                        id: 16362,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    fullName: "РАДЗІВІЛОВ Григорій Данилович",
                    position: "Заступник начальника інституту з наукової роботи",
                    militaryRank: "полковник",
                    achievements: [
                        "кандидат технічних наук",
                        "доцент",
                        "учасник бойових дій"
                    ],
                },
                {
                    image: {
                        id: 16363,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    fullName: "ПЕТРОВСЬКИЙ Олег Євгенович",
                    position: "Заступник начальника інституту з морально-психологічного забезпечення",
                    militaryRank: "полковник",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    phoneNumber: "+38 (044) 256-22-09"
                },
                {
                    image: {
                        id: 16364,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    fullName: "КІМ Олексій Сергійович",
                    position: "Заступник начальника інституту з озброєння - начальник озброєння",
                    militaryRank: "полковник",
                    achievements: [
                        "лицар ордена Богдана Хмельницького III ступеня",
                        "учасник бойових дій"
                    ],
                },
                {
                    image: {
                        id: 16365,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    fullName: "СТАНІЛОГА Олександр Григорович",
                    position: "Заступник начальника інституту з тилу - начальник тилу",
                    militaryRank: "полковник",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    phoneNumber: "+38 (044) 256-24-44"
                }
            ]
        }
    ]
}

