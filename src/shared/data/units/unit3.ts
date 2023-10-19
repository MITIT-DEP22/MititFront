import {RouterNames} from "../../enums/RouterNames";
import {Image} from "../../../entities/image";
import {TextBlock} from "../../../entities/text-block";
import {Superior} from "../../../entities/superior";
import {Row, RowElement, Table} from "../../../entities/text-block/model/types";

export const unit3Page = {
    title: "Підрозділи",
    name: RouterNames.UNIT_3.name,
    titleImage: {id: 1} as Image,
    textBlocks: [
        {
            title: "5-ті Курси перепідготовки та підвищення кваліфікації"
        } as TextBlock,
        {
            textContent: [
                "5-ті Курси перепідготовки та підвищення кваліфікації створені у 2014 році, відповідно до спільної директиви Міністра Оборони України та Генерального штабу Збройних Сил України від 03.07.2014 року. Курси перепідготовки та підвищення кваліфікації утримуються за рахунок чисельності Збройних Сил України та дислокуєтеся на території Військового інституту телекомунікацій та інформатизації."
            ]
        } as TextBlock,
        {
            superiors: [
                {
                    fullName: "КРАВЧЕНКО Олексій Олександрович",
                    position: "Начальник 5 курсів перепідготовки та підвищення кваліфікації",
                    image: {
                        id: 1,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: 'майор'
                } as Superior
            ]
        } as TextBlock,
        {
            textContent: [
                "<strong>Мета</strong> – організація перепідготовки та підвищення кваліфікації військовослужбовців в" +
                " особливий період за військово-обліковими спеціальностями.",
                "1. <strong>5 курси перепідготовки та підвищення кваліфікації (допідготовки) офіцерів, прийнятих на військову службу за контрактом з запасу, оперативного резерву №1 та №2, офіцери військових частин, що відновлюють боєздатність.</strong>",
                "<strong>Група №1.</strong> Підвищення кваліфікації офіцерів, прийнятих на військову службу за контрактом з" +
                " запасу",
                "<strong>Термін навчання – 3 місяці</strong>",
                "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери прийняті на" +
                " віськову службу за контрактом з запасу (за відповідними спеціалізаціями); офіцери, які закінчили кафедри військової підготовки та не мають досвіду служби.",
                "<strong>Група №2.</strong> Підвищення кваліфікації офіцерів оперативного резерву №1 та №2 та військових" +
                " частин, що відновлюють боєздатність\n",
                "<strong>Термін навчання – до 15 діб</strong>",
                "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери оперативного" +
                " резерву, яких призвано на навчальні збори, та військових частин, що відновлюють боєздатність.",
                "<strong>Група №3.</strong> Курси методичної підготовки",
                "<strong>Термін навчання – 7 діб</strong>",
                "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери оперативного" +
                " резерву, яких призвано на навчальні збори, та військових частин, що відновлюють боєздатність.",
                "2. <strong>Курси військової підготовки осіб сержантського (старшинського) складу з вищою освітою.</strong>",
                "<strong>Термін навчання – 3 місяці</strong>",
                "<strong>Група №1.</strong> Підготовка осіб рядового та сержантського (старшинського) складу з вищою освітою" +
                " (за військово-обліковими спеціальностями, за якими здійснюється підготовка військових фахівців).",
                "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: особи рядового та" +
                " сержантського" +
                " (старшинського) складу, які проходять військову службу за контрактом (призвані на військову службу під час мобілізації), обіймають (плануються до призначення на) офіцерські посади у військах, з наступним присвоєнням первинного офіцерського звання \"молодший лейтенант\".",
                "<strong>Курси перепідготовки та підвищення кваліфікації в мирний час:</strong>",
                "Згідно наказу Міністерства оборони України від 04.04.2017р. № 202 \"Про організацію та проведення підвищення кваліфікації військовослужбовців, працівників Збройних Сил України та державних службовців Міністерства оборони України та Збройних Сил України\".",
            ]
        } as TextBlock,
        {
            tables: [
                {
                    headers: [
                        "Назва курсів",
                        "Групи та напрями підвищення кваліфікації"
                    ],
                    rows: [
                        {
                            elements: [
                                {value: ["<strong>1. Центральні курси підвищення кваліфікації офіцерів – фахівців" +
                                    " зв’язку</strong>"]} as RowElement,
                                {value: [
                                        "<strong>Група № 1</strong> Підвищення кваліфікації офіцерів командної ланки з’єднань, військових частин і підрозділів зв’язку.",
                                        "<strong>Група № 2</strong> Підвищення кваліфікації офіцерів штабів з’єднань, військових частин і підрозділів зв’язку.",
                                        "<strong>Група № 3</strong> Підвищення кваліфікації офіцерів штабів з’єднань, військових частин і підрозділів зв’язку.",
                                        "<strong>Група № 4</strong> Підвищення кваліфікації офіцерів з питань розгортання та обслуговування програмно-технічних комплексів.",
                                        "<strong>Група № 5</strong> Підвищення кваліфікації офіцерів з питань розвитку та забезпечення функціонування телекомунікаційних мереж.",
                                        "<strong>Група № 6</strong> Підвищення кваліфікації офіцерів з питань застосування новітніх засобів зв'язку."
                                    ]
                                } as RowElement,
                            ]
                        } as Row,
                        {
                            elements: [
                                {value: ["<strong>2. Центральні курси підвищення кваліфікації офіцерів – фахівців зв’язку</strong>"]} as RowElement,
                                {value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань забезпечення та організації електронного документування управлінської інформації."]} as RowElement,
                            ]
                        } as Row,
                        {
                            elements: [
                                {value: ["<strong>3. Курси підвищення кваліфікації з питань захисту інформації в захищеній системі електронного документообігу Міністерства оборони України</strong>"]} as RowElement,
                                {value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань забезпечення та організації захисту інформації в захищеній системі електронногодокументообігу Міністерства оборони України."]} as RowElement,
                            ]
                        } as Row,
                        {
                            elements: [
                                {value: ["<strong>4. Курси підвищення кваліфікації з питань технічного захисту інформації (у сфері відкритої інформації)</strong>"]} as RowElement,
                                {value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань технічного захисту інформації (у сфері відкритої інформації)."]} as RowElement,
                            ]
                        } as Row,
                        {
                            elements: [
                                {value: ["<strong>5. Курси підвищення кваліфікації з питань технічного захисту інформації та кібернетичної безпеки</strong>"]} as RowElement,
                                {value: [
                                        "<strong>Група № 1</strong> Підвищення кваліфікації з питань кібернетичної безпеки.",
                                        "<strong>Група № 2</strong> Підвищення кваліфікації з питань захисту інформації від витоку технічними каналами та несанкціонованого доступу.",
                                        "<strong>Група № 3</strong> Підвищення кваліфікації з питань забезпечення та організації захисту інформації в захищеній системі обміну інформації Збройних Сил України та мережі обміну службовою інформації Збройних Сил України.",
                                        "<strong>Група № 4</strong> Підвищення кваліфікації з питань кібернетичної безпеки та ведення спеціальних дій в кібернетичному просторі."
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
                "Навчання проводяться, як теоретично в навчальних аудиторіях на кафедрах інституту де вивчається новітні засоби зв’язку, так і в польових умовах, слухачі курсів опановують організацію життєдіяльності у польових умовах та відпрацьовують нормативи з вогневої та інженерної підготовки.",
                "Свій досвід слухачам передавали офіцери, які неодноразово перебували на Сході України, приймаючи участь в АТО."
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
                } as Image,
            ]
        } as TextBlock
    ]
}