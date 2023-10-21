import {Page} from "../../../entities/page";
import {Image} from "../../../entities/image";
import {RouterNames} from "../../enums/RouterNames";
import {List} from "../../../entities/text-block";

export const publicInfoPage: Page = {
    title: "Публічна інформація",
    titleImage: {id: 16250} as Image,
    name: RouterNames.PUBLIC_INFO.name,
    textBlocks: [
        {
            title: "Публічна інформація"
        },
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
        }]
}
