import {Page} from "../../../../entities/page";
import {Image} from "../../../../entities/image";
import {RouterNames} from "../../../enums/RouterNames";
import {List, TextBlock} from "../../../../entities/text-block";
import {Superior} from "../../../../entities/superior";

export  const department3Page: Page = {
    title: "Кафедри",
    titleImage: {id: 16255} as Image,
    name: RouterNames.DEPARTMENTS.subLinks[2].name,
    textBlocks: [
        {
            title: "Кафедра фізичного виховання, \n" +
                "спеціальної фізичної підготовки і спорту",
        },
        {
            textContent: [
                "Кафедра призначена для формування та вдосконалення у військових фахівців основ теоретичних знань, практичних та організаційно-методичних навичок та умінь управління фізичним вихованням, спеціальною фізичною підготовкою, спортом і фізичною реабілітацією військовослужбовців; забезпечення необхідного рівня розвитку фізичних якостей, військово-прикладних рухових навичок та їх вдосконалення; показників функціональних та морфологічних можливостей організму; працездатності. Курсанти мають можливість проводити тренування з різних спортивних та військово-прикладних видів спорту на навчально-спортивній базі інституту, що включає:\n"
            ],
        },
        {
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
        },
        {
            superiors: [{
                fullName: "БИЧІХІН Юрій Ігорович",
                militaryRank: "полковник",
                position: "Начальник кафедри",
                image: {
                    id: 16477,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            } as Superior]
        },

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
                    id: 16478,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16479,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16480,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16481,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            ]
        }
    ]
}