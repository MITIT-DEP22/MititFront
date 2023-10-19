import {RouterNames} from "../../enums/RouterNames";
import {Image} from "entities/image";
import {List, TextBlock} from "entities/text-block";
import {Superior} from "entities/superior";

export const unit2Page = {
    title: "Підрозділи",
    name: RouterNames.UNIT_2.name,
    titleImage: {id: 1} as Image,
    textBlocks: [
        {
            title: "Батальйон забезпечення навчального процесу"
        } as TextBlock,
        {
            textContent: [
                "Відповідно до спільної директиви Міністества оборони України та Генерального штабу Збройних Сил України від 04.05.2016 № Д-322/1/8ДСК введений в дію штат №17/194 Військового інституту телекомунікацій та інформатизації в складі якого введено батальйон забезпечення навчального процесу (БЗНП)."
            ]
        } as TextBlock,
        {
            superiors: [
                {
                    fullName: "КУРГАН Юрій Вікторович",
                    position: "Командир батальйону забезпечення навчального процесу",
                    achievements: [
                        "участник бойових дій"
                    ],
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: 'підполковник'
                } as Superior
            ]
        } as TextBlock,
        {
            textContent: [
                "За Військовим інститутом телекомунікацій та інформатизації (місто Київ) закріплені на праві" +
                " оперативного управління будівлі №75 та №106 військового містечка №1 (село Семиполки Київської області) з метою розміщення підрозділів БЗНП Військового інституту телекомунікацій та інформатизації (ВІТІ )",
                "Батальйон забезпечення навчального процесу з місцем дислокації смт. Семиполки введений до складу Військового інституту телекомунікацій та інформатизації для посилення практичної (польової) складової в підготовці випускників ВІТІ."
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "Це дозволило у 2016-2017 навчальному році реалізувати положення Плану вдосконалення практичної підготовки курсантів, а саме:",
                    items: [
                        "здійснити 4 польових виходи курсантів 1-3 курсів;",
                        "провести практичну складову державної екзаменаційної атестації для випускників всіх спеціальностей в польових умовах;",
                        "провести навчальний збір з громадянами які проходять навчання за програмою підготовки офіцерів запасу у ВІТІ;",
                        "провести курси перепідготовки та підвищення кваліфікації для осіб офіцерського складу за" +
                        " призовом, які закінчили кафедри військової підготовки, офіцерів військових частин" +
                        " прийнятих на військову служби за контрактом, осіб рядового та сержантського складу з вищою освітою;",
                        "підготувати екіпажі для комплексних апаратних зв’язку БЗНП та забезпечити їх залучення в командно-штабних навчаннях з органами військового управління “Непохитна стійкість 2017”.\n"
                    ]
                } as List,
                {
                    title: "<strong>Об'єкти навчальної матеріальної бази БЗНП:</strong>",
                    items: [
                        "клас Тактико-спеціальної підготовки;",
                        "клас Загальновійськових дисциплін;",
                        "навчальне поле (взводний опорний пункт, полігон звязку);",
                        "будівля 1/75 (казарма, спортивний зал)."
                    ]
                } as List,
                {
                    title: "<strong>Озброєння та військова техніка, які розгорнуті в БЗНП:</strong>",
                    items: [
                        "6 комплексних апаратних зв'язку (СТГ 8/16, П-240ТМ, Р-142Н \"Motorola\", Р-145БМ \"Motorola\", Р-142Н \"Harris\", Р-142Н \"Harris\");",
                        "радіорелейна станція (Р-414-МУ);",
                        "тропосферна станція (Р-412А)."
                    ]
                } as List
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
            ]
        } as TextBlock,
    ]
}