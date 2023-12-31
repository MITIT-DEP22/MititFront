import {Page} from "../../../../entities/page";
import {Image} from "../../../../entities/image";
import {RouterNames} from "../../../enums/RouterNames";
import {List, TextBlock} from "../../../../entities/text-block";
import {Superior} from "../../../../entities/superior";

export const faculty3Page = {
    titleImage: {id: 16259} as Image,
    title: "Факультети",
    name: RouterNames.FACULTIES.subLinks[2].name,
    textBlocks: [
        {
            title: "Факультет бойового застосування систем управління та зв'язку"
        } as TextBlock,
        {
            textContent: [
                "Факультет призначений для підготовки висококваліфікованих офіцерських кадрів за освітньо-кваліфікаційним рівнем «бакалавр», «магістр» та фахівців заочної форми навчання з числа військовослужбовців за контрактом."
            ]
        } as TextBlock,
        {
            superiors: [
                {
                    fullName: "ПОНОМАРЬОВ Олександр Анатолійович",
                    position: "Начальник факультету",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 16416,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: "полковник"
                } as Superior,
                {
                    fullName: "КУЗЮРА Сергій Леонідович",
                    position: "Заступник начальника факультету з навчальної та наукової роботи - начальник" +
                        " навчальної частиник",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 16417,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: "підполковник"
                } as Superior,
                {
                    fullName: "РИЖКОВ Андрій Юрійович",
                    position: "Заступник начальника факультету з морально-психологічного забезпечення",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 16418,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: "підполковник"
                } as Superior,
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "На Факультеті здійснюється підготовка за спеціальностями:",
                    items: [
                        "“Кібербезпека” за спеціалізацією “Захист інформації та кібернетична безпека в інформаційно-телекомунікаційних системах”;",
                        "“Військове управління (за видами збройних сил)” за спеціалізацією “Управління діями підрозділів зв’язку”;",
                        "“Озброєння та військова техніка” за спеціалізацією “Радіоелектронні інформаційні системи, оперативна техніка та спецозброєння”."
                    ]
                } as List
            ]
        } as TextBlock,
        {
            images: [
                {
                    id: 16419,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16420,
                    contentType: "",
                    imageFilename: ""
                } as Image
            ]
        } as TextBlock,
        {
            textContent: [
                "ДО СКЛАДУ ФАКУЛЬТЕТУ ОРГАНІЗАЦІЙНО ВХОДЯТЬ 3 КАФЕДРИ:"
            ]
        } as TextBlock,
        {
            superiors: [
                {
                    textContent: [
                        "Кафедра \"БОЙОВОГО ЗАСТОСУВАННЯ ПІДРОЗДІЛІВ ЗВ’ЯЗКУ\"",
                        "Кафедра здійснює теоретичну та практичну підготовку курсантів інституту з" +
                        " тактико-спеціальних дисциплін в інтересах підготовки фахівців інформаційно - телекомунікаційних систем та мереж військового призначення.",
                        "Кафедра забезпечує підготовку майбутніх офіцерів інформаційно-телекомунікаційних мереж в комплексі з усіма кафедрами інституту, надаючи практичні навички з управління інформаційними та телекомунікаційними системами з урахуванням досвіду АТО, а також проводить підготовку на курсах підвищення кваліфікації офіцерів (слухачів) призваних за мобілізацією."
                    ],
                    fullName: "ПИВОВАРЧУК Сергій Андрійович",
                    position: "Начальник кафедри",
                    achievements: [
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 16421,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: "полковник"
                } as Superior
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "Тактико-спеціальні дисципліни по яких здійснюється підготовка:",
                    items: [
                        "основи організації роботи органів управління;",
                        "основи управління та прийняття рішень у військовій справі;",
                        "бойове застосування систем та комплексів військового зв’язку з’єднання;",
                        "організація військового зв’язку;",
                        "експлуатація засобів інформаційно-телекомунікаційних систем;",
                        "організація зв’язку в тактичній ланці управління;",
                        "організація зв’язку."
                    ]
                } as List
            ]
        } as TextBlock,
        {
            images: [
                {
                    id: 16422,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16423,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16424,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16425,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16426,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16427,
                    contentType: "",
                    imageFilename: ""
                } as Image
            ]
        } as TextBlock,
        {
            superiors: [
                {
                    textContent: [
                        "Кафедра \"СПЕЦІАЛЬНИХ ІНФОРМАЦІЙНИХ СИСТЕМ ТА РОБОТОТЕХНІЧНИХ КОМПЛЕКСІВ\"",
                        "Кафедра \" Спеціальних інформаційних систем та робототехнічних комплексів\" здійснює теоретичну та практичну підготовку фахівців у галузі знань „Воєнні науки, національна безпека, безпека державного кордону” спеціальність 255 Озброєння та військова техніка, спеціалізація Радіоелектронні інформаційні системи, оперативна техніка та спецозброєння за денною формою навчання.",
                        "Кафедра здійснює підготовку офіцерських кадрів оперативно-технічної діяльності для проходження служби на посадах Головного управління розвідки Міністерства Оборони, Державної прикордонної служби, Служби зовнішньої розвідки та підрозділів Сил спеціальних операцій."
                    ],
                    fullName: "ПАНЧЕНКО Ігор В'ячеславович",
                    position: "Начальник кафедри",
                    achievements: [
                        "кандидат технічних наук",
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 16428,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: "полковник"
                } as Superior
            ]
        } as TextBlock,
        {
            textContent: [
                "На кафедрі активно ведеться робота по створенню власних безпілотних авіаційних комплексів-ретрансляторів та підготовлено і впроваджено у навчальний процес нову дисципліну “Бойове застосування безпілотних авіаційних комплексів ” Бюджет даної дисципліни передбачає 90 годин для всіх спеціальностей в інституті, яка буде викладатись на протязі 5-го та 6-го семестрів з обов'язковими практичними польотами на БпЛА у польових умовах."
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "Програми підготовки кафедри передбачають вивчення:",
                    items: [
                        "теоретичних та практичних питань основ побудови безпілотних авіаційних комплексів та основних принципів їх використання у якості телекомунікаційної аеро-платформи;",
                        "порядку розробки засобів на базі мікроконтролерів;",
                        "основ інформаційної безпеки;",
                        "спеціального поліграфічного виробництва при виконанні до друкарських, формних та після друкарських процесів, інформаційних системам спеціального призначення і технології для вирішення практичних завдань інформаційної війни та інформаційної протидії;",
                        "методів та засобів контролю каналів витоку інформації."
                    ]
                } as List
            ]
        } as TextBlock,
        {
            images: [
                {
                    id: 16429,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16430,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16431,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16432,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16433,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16434,
                    contentType: "",
                    imageFilename: ""
                } as Image
            ]
        } as TextBlock,
        {
            superiors: [
                {
                    textContent: [
                        "Кафедра \"ЗАХИСТУ ІНФОРМАЦІЇ ТА КІБЕРЗАХИСТУ\"",
                        "Ведуча кафедра в галузі підготовки фахівців комплексного забезпечення інформаційної безпеки в Інформаційно-телекомунікаційних системах Збройних Сил України. Кафедра охоплює напрямки від математичних аспектів до найсучасніших систем захисту інформації. На кафедрі працюють: докторів технічних наук – 1, кандидатів технічних наук – 5, з них мають наукові звання старший науковий співробітник - 1, доцент - 2."
                    ],
                    fullName: "ЧЕВАРДІН Владислав Євгенійович",
                    position: "Начальник кафедри",
                    achievements: [
                        "доктор технічних наук",
                        "старший науковій співробітник",
                        "учасник бойових дій"
                    ],
                    image: {
                        id: 16435,
                        contentType: "",
                        imageFilename: ""
                    } as Image,
                    militaryRank: "полковник"
                } as Superior
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "Кафедра здійснює підготовку слухачів за наступними освітньо-професійними рівнями:",
                    items:[
                        "бакалавр зі спеціальності Кібербезпека - очна та заочна форма навчання;",
                        "магістр – зі спеціальності Кібербезпека - очна форма навчання;",
                        "кандидат технічних наук (Ph.D) зі спеціальності 05.13.21 – Системи захисту інформації."
                    ]
                } as List
            ]
        } as TextBlock,
        {
            images: [
                {
                    id: 16436,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16437,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16438,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16439,
                    contentType: "",
                    imageFilename: ""
                } as Image
            ]
        } as TextBlock,
        {
            textContent: [
                "На кафедрі проводиться курсова підготовка офіцерів запасу за напрямком Технічний захисту інформації, Кіберхзахист в інформаційно-телекомунікаційних системах, Робота на виробах криптографічного захисту інформації.",
                "Слухачі отримають знання та навички з трьох напрямків: технічний захист інформації, побудова криптографічних систем захисту інформації, кібернетичний захист."
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "Технічний захист інформації:",
                    items: [
                        "організаційно-правові питання побудови комплексних систем захисту інформації, систем і комплексів технічного захисту інформації;",
                        "практичні навички з проектування, побудови, контролю та оцінки ефективності комплексних систем захисту інформації, систем і комплексів технічного захисту інформації."
                    ]
                } as List,
                {
                    title: "Побудова криптографічних систем захисту інформації:",
                    items: [
                        "теоретичні основи побудови криптографічних систем захисту інформації;",
                        "практичні навички з проектування, розробки та оцінки криптостійкості та обчислювальної" +
                        " складності криптографічних систем захисту інформації;",
                        "теоретичні знання та практичні навички з розгортання, експлуатації та управління виробами криптографічного захисту, комплексами та системами захисту інформації в ІТС ЗСУ."
                    ]
                } as List,
                {
                    title: "Кібернетичний захист:",
                    items: [
                        "організаційно-правові питання побудови систем кібернетичного захисту інформаційно-телекомунікаційних систем;",
                        "математичні аспекти аналізу великих масивів даних;",
                        "основи побудови систем штучного інтелекту;",
                        "проектування та управління системами та комплексами кібернетичного захисту інформаційно-телекомунікаційних систем;",
                        "контроль та оцінка захищеності кібернетичного простору на об’єктах критичної інфраструктури держави."
                    ]
                } as List
            ]
        } as TextBlock,
        {
            textContent: [
                "ОСВІТНЯ ТА НАУКОВА ДІЯЛЬНІСТЬ"
            ]
        } as TextBlock,
        {
            textContent: [
                "Основним завданням Факультету є здійснення освітньої діяльності, яка відповідає стандартом вищої освіти, та забезпечує підготовку згідно з державним замовленням висококваліфікованих військових фахівців.",
                "Освітня діяльність реалізується у вигляді освітнього процесу. Вона включає навчальну, виховну, методичну роботу та наукову, науково-технічну діяльність.",
                "Основним видом освітньої діяльності є навчальна робота. Вона включає в себе заходи керівництва Факультету та його структурних підрозділів, науково-педагогічних та інших працівників з питань: підготовки за фахом курсантів; організації та науково-методичного забезпечення всіх форм (видів) навчальних занять, самостійної роботи, практичної підготовки; удосконалення змісту навчання із врахування сучасних досягнень науки, техніки, технологій, а також досвіду проведення антитерористичної операції на сході країни; проведення діагностики результатів навчання, виховання і розвитку курсантів; їх атестування та управління якістю навчального процесу."
            ]
        } as TextBlock,
        {
            images: [
                {
                    id: 16440,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16441,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            ]
        } as TextBlock,
        {
            uLists: [
                {
                    title: "З метою вищевказаного на кафедрах факультету створені і функціонують:",
                    items: [
                        "аудиторія експлуатації засобів ІТС;",
                        "аудиторія бойового застосування інформаційно-телекомунікаційних вузлів та організації зв’язку;",
                        "аудиторія тактики та військової топографії;",
                        "аудиторія бойового застосування інформаційних систем тактичної ланки управління;",
                        "навчально-тренувальний комплекс (КСП мб, ПУ омбр, ПУ ОТУ, макет місцевості та робочі місця посадових осіб ПУ);",
                        "спеціальний клас комплексів обробки інформації;",
                        "спеціалізовані аудиторії підготовки операторів БпЛА;",
                        "технічна майстерня обслуговування БпЛА;",
                        "лабораторія досліджень засобів БпЛА;",
                        "лабораторія спец поліграфії;",
                        "лабораторія фізико-хімічних процесів;",
                        "навчально-тренувальний комплекс системи захищеного обміну інформацією та мережі обміну службової інформації;",
                        "клас технічного захисту інформації в якому розгорнуто атестований об’єкт інформаційної діяльності 2 категорії;",
                        "елементи сучасного навчально-тренувального комплексу захисту інформації та кібернетичної безпеки – кіберполігону."
                    ]
                } as List
            ]
        } as TextBlock,
        {
            images: [
                {
                    id: 16442,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16443,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16444,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16445,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16446,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16447,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16448,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16449,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16450,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16451,
                    contentType: "",
                    imageFilename: ""
                } as Image,
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
                    id: 16452,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16453,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16454,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16455,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16456,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16457,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            ]
        } as TextBlock,
        {
            textContent: [
                "ВИХОВНА РОБОТА"
            ]
        } as TextBlock,
        {
            images: [
                {
                    id: 16458,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16459,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16460,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16461,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16462,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16463,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16464,
                    contentType: "",
                    imageFilename: ""
                } as Image,
                {
                    id: 16465,
                    contentType: "",
                    imageFilename: ""
                } as Image,
            ]
        } as TextBlock
    ]
} as Page