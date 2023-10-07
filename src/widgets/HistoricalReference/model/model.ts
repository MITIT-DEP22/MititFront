export interface IFirstHistoryCard {
    imageSrc: string,
    text: string,
}

export interface ISecondHistoryCard {
    text: string,
    imageSrc: string[],

}

export interface IAdditionHistory {
    additionHistory: IAdditionHistoryEl
}

export interface IAdditionHistoryEl {
    title: string,
    textArray: string[]
}


export const additionHistory: IAdditionHistory[] = [
    {
        additionHistory: {
            title: '<strong>Додаток до історичної довідки</strong><p/><strong>І. Передісторія навчального закладу' +
                ' (1835-1917).</strong>',
            textArray: [
                '1835 рік – розпочато будівництво оборонної казарми на два батальйони на території Печерської' +
                ' фортеці.',
                '1839 рік – завершення будівництва будівлі і введення її в експлуатацію. Відкрита школа кантоністів.',
                '1865 рік – на базі школи кантоністів створено Київське піхотне юнкерське училище.',
                '1897 рік – училище перейменовано з Київського піхотного юнкерського училища в Київське військове училище.',
                '1915 року Київське військове училище перейменовано на 1-ше Київське Костянтинівське військове училище.',
                '5 листопада 1917 року, після збройних сутичок з більшовиками, особовий склад Київського Костянтинівського військового училища захопив потяг і виїхав на Кубань, де в подальшому приймав участь у боях з загонами Червоної армії.',
                'За роки свого існування училище підготувало тисячі офіцерів. Серед них було багато таких, які під час Української Революції 1917-1921 років служили у війську УНР, Української держави та Дієвій Армії УНР.\n',
                'Відомі випускники:',
                '<strong>Сікевич Володимир Васильович</strong>  — український військовий і політичний діяч; генерал-хорунжий' +
                ' армії Української Народної Республіки (генерал-поручник у еміграції).',
                '<strong>Трутенко Валентин Максимович</strong>  — український військовий діяч; генерал-хорунжий армії Української Народної Республіки.',
                '<strong>Дроздовський Лев Антонович</strong> — український військовий і політичний діяч; генерал-хорунжий армії Української Народної Республіки, військовий аташе УНР в Швейцарії та Італії.',
                '<strong>Ніколіч Микола Миколайович</strong>  — генеральний хорунжий Армії Української Держави. Ізотов Сергій Васильович —  полковник Дієвої армії УНР.'
            ]
        }
    },
    {
        additionHistory: {
            title: '<strong>ІІ. Період Української революції (1917-1921).</strong>',
            textArray: [
                '<strong>20 листопада 1917 року на території Костянтинівського військового училища за наказом' +
                ' Генерального секретаря з військових справ Симона Петлюри була розгорнута Перша українська військова юнацька школа. Школі було присвоєно ім\'я гетьмана Богдана Хмельницького.</strong>',
                'В січні 1918 року, коли війська червоногвардійців загрожували захопленням столиці Української Республіки, юнкера з 1-ї української військової юнацької школи взяли активну участь у боях з червоногвардійцями, зокрема в бою під Крутами, захищаючи Центральну Раду.',
                'Упродовж 21-26 січня 1918 року старшини та юнкери Першої Київської юнацької школи ім. Б.Хмельницького, студенти Університету Святого Володимира та Українського народного університету, які виявили бажання захищати свою країну, збиралися у казармах колишнього Костантинівського військового училища, де відбувався початковий військовий вишкіл.',
                '29 січня 1918 року під станцією Крути 450 юнкерів і 20 старшин 1-ї Української військової юнацької школи імені Богдана Хмельницького спільно з сотнею (116–130 осіб) новоствореного добровольчого Помічного Студентського куреня січових стрільців вступили в бій з переважаючими силами ворога, та затримали ворога на чотири дні, що дозволило українському урядові забезпечити визнання української державності на міжнародному рівні.',
                'З п’яти сотень воїнів, які нехтуючи своїм молодим життям, закрили власними грудьми рідний Київ – 140 юнаків і старшин загинули, до 150 було поранено, чи потрапили в полон та були жорстоко закатовані ворогом.'
            ]
        }
    }
]

export const secondAdditionHistory: IAdditionHistory[] = [
    {
        additionHistory: {
            title: '<strong>ІІІ. Радянській період історії (1919-1991).</strong>',
            textArray: [
                'В 1919 році радянська влада організувала інженерні курси (коли Реввоєнрада республіки затвердила штати Інженерних курсів по підготовці командного складу Робітничо-Селянської Червоної Армії. На цих курсах навчались курсанти саперно-будівельного, шляхо-мостового та електротехнічного відділень (зв’язківці). 23 квітня 1920 року курси двома ешелонами виїхали із Москви у Київ. Проте, через загрозу захвату польською армією м.Києва, курси розташувалися на іподромі м. Харкова. 16 серпня 1920 року Московські інженерні курси прибули в м. Київ і розташувались у будівлі училища на Печерську.',
                '11 серпня 1920 року курси були перейменовані у 2 Київські військово-інженерні курси чисельністю 600 чоловік,а 21 січня 1921 року - в 3 Київську військову інженерну школу. 01.11.1924 перейменовані на військову школу зв\'язку, яка з часом перетворилась на Київське вище військове інженерне двічі Червонопрапорне училище зв\'язку ім.М.І.Калініна (1968 - 1992).'
            ]
        }
    },
    {
        additionHistory: {
            title: '<strong>ІV. Часи Незалежності України</strong>',
            textArray: [
                '2 жовтня 1994 року Київському військовому інституті управління і зв’язку вручено Бойовий Червоний Прапор.',
                'З 2001 року військовий інститут перейшов до нової технології навчання – підготовки бакалаврів та присвоєння наукового ступеня магістра.',
                '4 травня 1995 року на території інституту, на Алеї Героїв була відкрита стела на честь майже 2000 випускників, що загинули у роки Другої світової війни.',
                'Наказом Міністра оборони України №252 від 07.08.2000 р. "За мужність і героїзм, проявлені в роки Другої Світової війни, значний особистий внесок у захист Батьківщини від фашистських загарбників та з метою підвищення рівня військово – патріотичного виховання особового складу військ зв’язку ЗС України на бойових традиціях фронтового покоління захисників Вітчизни почесним солдатом Київського військового інституту управління і зв’язку ЗАРАХОВАНО Героя Радянського Союзу, учасника вигнання нацистів з Києва генерал – лейтенанта у відставці Пилипенка Михайла Корнійовича", який з 1973 по 1989 роки був начальником цього навчального закладу.',
                '29 січня 2008 року з нагоди 90-ї річниці бою під Крутами на будівлі Військового інституту телекомунікацій та інформатизації було встановлено меморіальну дошку.',
                'Наказом Міністра оборони України від 29.01.2016 року №47 "За виявлення мужності, героїзму, відваги і самовіддані дії під час виконання військового обов’язку в районі проведення АТО на території Донецької та Луганської областей ЗАРАХОВАНО НАВІЧНО до списків Військового інституту телекомунікацій та інформатизації полковника Павлова Ігоря Миколайовича", начальника кафедри тактико-спеціальної підготовки факультету Захисту інформації Військового інституту телекомунікацій та інформатизації.',
                'На честь вшанування пам’яті випускників вишу, які виявили мужність, героїзм, відвагу і самовіддані дії під час виконання військового обов’язку з захисту державного суверенітету та територіальної цілісності України по забезпеченню зв’язку в зоні проведення Антитерористичної операції на території Донецької та Луганської областей 12 жовтня 2016 року на Алеї Героїв інституту — відкрито Меморіал загиблим випускникам в АТО офіцерам-зв’язківцям (14 офіцерів, із них полковників -3, підполковників – 2, майорів –4, капітанів -5).',
                '27 жовтня 2017 року, у Військовому інституті телекомунікацій та інформатизації відбулась знаменна' +
                ' подія — відкрито пам’ятник випускнику вишу 2000-го року, <strong>учаснику АТО, Герою України' +
                ' генерал-майору Максиму Михайловичу Шаповалу, який загинув від терористичного акту в м.' +
                ' Києві.</strong>',
                'За роки Незалежності України в Інституті підготовлено понад п’ять тисяч висококласних спеціалістів для Збройних Сил України та інших військових формувань.',
                'Досвід боїв вкотре довів, якою важливою фігурою на полі бою був і залишається офіцер. Саме від його компетентності, професіоналізму, патріотизму, сили духу залежить не тільки результат битви, а й життя солдат.',
                'Серед військовослужбовців інституту 184 учасника АТО з них 65 курсантів.',
                'За успішне виконання бойових завдань, сумлінне виконання службових обов’язків 17 військовослужбовців інституту нагороджені відзнакою Президента України «За участь в АТО».',
                '7 старших офіцерів інституту відзначені державними нагородами: Орденом Богдана Хмельницького ІІІ ст. – 5 із них 1 (посмертно), Орденом «За мужність» ІІІ ст. – 1, Орденом княгині Ольги ІІІ ст. – 1, 4 військовослужбовця нагороджені відзнаками Міністра оборони України, 111 військовослужбовців - відзнаками Начальника Генерального штабу – Головнокомандувача Збройних Сил України.'
            ]
        }
    },
]

export const firstHistoryCardItems: IFirstHistoryCard[] = [
    {
        imageSrc: "https://s3-alpha-sig.figma.com/img/f6c0/f34a/d58ff2403c868cfeaebdbd3d9895e40b?Expires=1697414400&Signature=kHdkLwjopomc9oreXZqfIo0iG~7kJn-Vefi2nikCx1cLM7CMhtSvupVgsvk4vyLpN94IMY0euyib1I9h3wZ3r2-PmA60BRf--xUgYZR7vKmQ98BmpCwD7cH~RnlyGKwWX-bqLz4~Eg4gAxxq0qj6CBWxpnlkbMA2q1ypJwWq3q4ZFxpKp5gpSB9D6s4kPY2Ym6dK-mvNhT4v3A4fv9CH73NyXocxboC1se47bpJkUk4tFu3EgkQPgqVq3RSzceJVZIuV~WqeE9JOhusLziOcPs24SLSZ2P5dg96HH6i8VImPZ1YrPiKKVfFzhW1wdA9gUPKg7fnPCZK0hrSW5O2l-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        text: "<strong>24 серпня 2015 року Військовому інституту телекомунікацій та інформатизації вручено Бойовий" +
            " прапор.</strong>",
    },
    {
        imageSrc: "https://s3-alpha-sig.figma.com/img/81ef/f0a8/461b2d5b24ad2d60b6d74d1bb0ea306c?Expires=1697414400&Signature=iASwzm4umlQ0jt~uZfS1JGA8m7wHS6p1-FgFHj7fH0yVtDXsf4ZUTDeH23PZ0ofllGoizlyrJNiW5H3bjPdLCb-Z4KD1-ooWeagpRRH2TC-PNkQQ0zFV9GEThfrWK~p9Y9F4qNRoOvAw09VmIG9UpZ0hC0Marhfhe2aR8kIY3EuscUtm9Jcc4gO6hEyZyGDCNOPf15GmKXRjpL3S6iFecCALyBQYyAC~xG53Tn-b-UbQQJfjg8nnYudcZvlwiRzbTotxCjN77~OZ2oNPtHeuJLF4POWr-xZJ8lI2ZtncG64HaXEsyB5DVJlq0EqNqNGhVlCck-~4RlFwxb0BreDCZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        text: "<strong>До 100-ї річниці історичних подій під Крутами</strong> та з метою вшанування подвигу Героїв Крут і" +
            " військово-патріотичного виховання військовослужбовців Збройних Сил України, <strong>Президент України" +
            " – Верховний Головнокомандувач Збройних Сил України Петро Порошенко 29 січня 2018 року присвоїв" +
            " Військовому інституту телекомунікацій та інформатизації почесне найменування імені Героїв Крут.</strong>",
    },
]

export const secondHistoryCardItems: IFirstHistoryCard[] = [
    {
        imageSrc: "https://s3-alpha-sig.figma.com/img/41b5/f50a/a15f3e364ec39046035b9421ebce3e96?Expires=1697414400&Signature=BdJscLdM3sRyKJy-izifOPqAkpjjavZTL32A~4QHYy4JoxpORsiHO0Br-1RMfPOrFcN5ZVWmOUWAzIvK9q0ym-0Ej3RQEolhQeuzdjCpqw5T5Qq7NMEnFVbdyPP9faix1I263KxOAQmCGF1tc8OSdiYcZ2is9-rxlO~aap15QXKe85zWJcrtMpoOK~ru40CCjcBiUsCSBOM0rKkxOkoPI8xGE3NblE1nOXYu-SQpJ8pV3vdCwJZKGkbFBl1FGx9FU9uYvQ5j29rf4Y95LMy3vx3jYvEp7EIHfS29GGuIa~tFaMg05jY4eOfRE2jfaiBwroIeMA~Oj7tn15nZvS7w~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        text: "З нагоди присвоєння інституту імені Героїв Крут Верховний Головнокомандувач ЗС України вручив начальнику інституту полковнику Євгену Степаненку бойовий прапор інституту.",
    },
]

export const thirdHistoryCardItems: IFirstHistoryCard[] = [
    {
        imageSrc: "https://s3-alpha-sig.figma.com/img/61df/b77f/ee5a3299b530398e63b9308df34e6462?Expires=1697414400&Signature=Lf3iy~em5AJ7tPUABuXTiLnSn95ky5yss7Hqrww1ENsBbArXK50I~XwWlaOfCYr~LIQi0C4kA9u~DAx5Zk6t2Z8JBlLpyBB7vfcc4SUZJRCZyRCY~aCOYxsrFnGI5ex2Fec-oKYUVmDJSeWzW-U~h6rn-pd9zYHBvx9ATGlkxsFl6fFH--YaDhdKK2YBaQOq3wY75v4Ho0ay5SQK~dGHjy1u8If9vLnLg~jHfdL~CEyuzaCp~dOZW4HXoQ7S-8EWl4KPwkzhRlNGd3VzAIPrz3Uk5zqYflIWYjJY2RCaGjBaLLJdbkjlaMrt-rfiedjGI9etwzngus0qDCq0n9RMMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        text: "Перед розстрілом 28 українських героїв, серед яких були юнкери Божко-Божинський, Тарнавський, Соколовський, М.Лизогуб, О.Попович, В.Шульгін, М.Ганкевич, заспівали національний гімн “Ще не вмерла Україна”.",
    },
]

export const firstTextBlock = [
    'Постановою Кабінету Міністрів України від <strong>19 серпня 1992 року №490</strong> було створено <strong>Київській' +
    ' військовий' +
    ' інститут управління і зв’язку</strong> на базі Київського вищого військового двічі Червонопрапорного інженерного училища зв’язку ім. М. І. Калініна і Київського вищого інженерного радіотехнічного училища ППО імені маршала авіації О. І. Покришкіна.',
    'Згідно Указу Президента України від 30.10. 2000 р. №1173/2000 «Про впорядкування присвоєння почесних' +
    ' найменувань військовим частинам та установам» та наказу начальника інституту (по стройовій частині) від' +
    ' 13.02.2001 р. №30 Київський військовий інститут управління і зв’язку перейменований в <strong>Київський' +
    ' військовий' +
    ' двічі орденів Червоного Прапора інститут управління і зв’язку.</strong>',
    'Постановою Кабінету Міністрів України від <strong>22 березня 2001 року №269</strong>, Директивою Міністра оборони' +
    ' України від <strong>11.06.01.№Д-115/1/3280</strong>, наказом Начальника ГШ ЗС України від <strong>18.07.01' +
    ' №28</strong> було створено' +
    ' <strong>Військовий двічі орденів Червоного прапору інститут телекомунікацій та інформатизації Національного' +
    ' технічного університету України «Київський політехнічний інститут».</strong>',
    'Згідно розпорядження Кабінету Міністрів України від <strong>26 червня 2013 року № 509-р</strong>, спільної директиви' +
    ' Міністерства оборони України та Генерального штабу ЗС України від <strong>01.07.13 №Д-322/1/02</strong> було змінено' +
    ' назву Військового інституту телекомунікацій та інформатизації Національного технічного університету України' +
    ' «Київський політехнічний інститут» на <strong>Військовий інститут телекомунікацій та інформатизації Державного' +
    ' університету телекомунікацій</strong>',
    'Постановою Кабінету Міністрів України від <strong>30 січня 2015 року №94</strong>, спільною директивою Міністерства' +
    ' оборони України та Генерального штабу Збройних Сил України від <strong>01.04.15 року №Д-322/1/11ДСК</strong> було' +
    ' змінено назву <strong>Військовий інститут телекомунікацій та інформатизації Державного університету' +
    ' телекомунікацій на Військовий інститут телекомунікацій та інформатизації.</strong>'
]


export const firstMiddleHistoryBlock: ISecondHistoryCard = {
    text: "Відповідний Указ Глава держави  підписав під час відвідування інституту на урочистостях у присутності всього особового складу.",
    imageSrc: [
        'https://s3-alpha-sig.figma.com/img/cf5f/aacf/bc9a664724cdd38bc1d82280ae5c58ee?Expires=1697414400&Signature=cOVNH7~F-oZNqAEHS9XWYAc6gcZaAV-j6ns6JtytU4QYUtH5IDi1nf7gLZKYzE55J4ISJ330unYz-qNSBBnpv0-b8aly~kNMRrWpA99neqCpyLWKGpzLZXzgVi6GP-kieK3IGc8qGAvsxznryQKwVXDSC7FUcZ1jsD9XK2KOjQwqDfp3k~B7d61kZ4ec5V-9Tdcm6vEDL4LDkE509D0bJAtmb~lkTsDolsYvhyxzwjgDWcTU6KLNG46kt-9M8eOLhIff0NO0irhi7iBDHkzA8w0mpVgU26qcyka3kSP8rQEEsLrSi1U-GxU8nxEJ~sArV86V5GtfjatLsqeTzxHrGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/5703/31f6/8054a5491db188cc21f3009f29a79dbd?Expires=1697414400&Signature=R-7egLkk3DkKZOpqn5v8q0sqtm8eCk9K588v0u-X4Tz33XgQxAO8bPwA0WitayNoOxV1k1jZhCFZcFQ0WQyED9oqCFf8f9g7Pg~sCgUMB0K6HGg2aJaZLewVIc8YXghApEeVMMGojlR1jVolOs2bmYs12Twqa1sszeyf1XhGEJYBAEiSxofDC9fYJE~4zJlOqwjVZY9OFH6U~slVY4gS0kwtEGov8jYQ7-1mwiEBBFBY2zyaGyZO~4tjysKHc3~GZpsf~wZKMtTqD72TrKAV5GfynFOwU82jI1FhTbKEYkYtoxWtQwWRwhWperSC1a9yKZr8YPixX7WvPZc2xoRIcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ]
}


export const secondMiddleHistoryBlock: ISecondHistoryCard = {
    text: "Згідно наказу начальника Військового інституту телекомунікацій та інформатизації імені Героїв Крут від" +
        " 17.01.2019 року №31 та листа від Української інституту національної пам’яті №91/42-06-19 від 17.01.2019" +
        " року <strong>Днем створення інституту встановлено 29 січня 1918 року.</strong>",
    imageSrc: [
        'https://s3-alpha-sig.figma.com/img/7dc2/f55e/1cf1c37a70590d3a7366d30b98dcd331?Expires=1697414400&Signature=ekdsFtgacmLKI0UeDqX60wG8oVkU2Yr8vTrS86AVOCF4G4gime8dh-lMONS7W00xswa5eJJEp9QHq~0r8L0hneyS-ioghtkIG~R2w7sL6J-YAOY~WaSnuENRAVk2l3Z7OEunbfk5BhLbtoYupcWqBgaxu2rzOhAyVoMPNSyNhMPY3R1k~OEPa-P-p4I4q7lYiTHhw-vV6fSOQYYhcarZ7ghA8Ym2BrpCWfHPSb79N81rRrL9KeYac7Z9k7A7JqMOR20J3EHF2UCZynYDj5BZ3EWni4e5C~-UwUbPC0cMdxcQ7nxhQKlvRgrycB6OpVdN6vkdvWbER-zYrs2P8OFC1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/71f5/33fb/0105e4efb39d3f8db14b4d4150f84211?Expires=1697414400&Signature=qTqlcJFiYurgFNwMtssnEFFhyeKtI0iDKNgEGnocHovSA3YzME3H9zOWoqdblOtGZsUxncTbzxlL5lwUKUjBYndgil7Z~ECODtzWaH0CgdqibJGydxZgxbY2cZwLVOP51iQyycSd9-AkNi~USOvu1iKs5WTiEORc-zncSCrs1wyB2EG5Rq-bgOyeBwQs-fCa7lAq6TLcde94ak~vAEF5FutK87SZLS~c~ieISpISe8e0y2qIpgsDDVlaFWhtalYgqRPW2ndxJDFvGUHDts~LSL-LN09hW5OUV2QwcjrjMpiTYthBl6iZR4Ahe3rD7IQ9iu1Op3a~2Hy5uPIeuw8DAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/28d9/6dc8/2aa6ba042b8bfdffbedf496efa2c1df6?Expires=1697414400&Signature=ZoP2bZAOqIW~lr6NBHqmhVopIE5a6qA8cVewhIGU~oAdsOrnXxOyUfM~RQzt4lGE775-oIxRxqNTkIsaY29P-UyIGubZEY5v2cFsSg~UnmSnuSHqxhWO-utGMjglfvIQNkRoNeKRjiJY4VTMm5HAuPraiCKgbd~Djap5RkIcd2oDKQ4lJpR8a9MgMT~q50q63HgZWbcwg4ir51D7lOGe8kQV7W1KUhQG4R8lChmcDN6aquU8fwq6xZIsjFOhQDSR8ngv0Miw8G8Hxtc9uTRAbmv-1mhHV~MfuCw5fUsxy-3xfOTbtwlUpQkXul0j65208yl-g8VOLSxqCmSBL9tAfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/c048/eecc/73dc19c74105d6afaba11bb4ca860981?Expires=1697414400&Signature=dpBE-lOqsxCCf~TMT-gOm6-Jgz2ZWGy~G0F9wukO2c875CUcHuKzxR4tnnriYX9ziItoejQffeSXJPUFfioNvKxeWq6nfHY9G2rzD9duCMJ2ZMWOvOzCjnaBSp0NcYsuvxgR9oSRiutksTPfmZEPKKqkVY86zopdHLQq0ZaQprj0bVOiJTDYbVdyikMntt0-xpvP~kmOK0oH-YwZrWYzQtUN8r7X1irxSGrDx91xsQH3hK2j0CgoWtrOZDbXMLJMvqyhyNeXU~tLjDmKPgZS00Iil8G53RK86iSFqaZbknRA6LBLP5-BCXfv6HHNVzZHeaY1AvyuZUVZViiXCCJt6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    ]
}

export const thirdMiddleHistoryBlock: ISecondHistoryCard = {
    text: "<strong>Інститут по праву заслужив високе звання імені Героїв Крут. Ним будуть пишатися і ті, хто" +
        " навчається зараз, і ті, хто вже завершив його та служить в українському війську!</strong>",
    imageSrc: [
        'https://s3-alpha-sig.figma.com/img/4d4e/af62/e66777f5c5395fcc1681ebd343cbcaac?Expires=1697414400&Signature=Uu5ntn658y-sZ~nNmfkG-kx6NmYkt3gVWzOvXHLEgcfRZL~y-uaAXWoRQyw4vz6hg2Dhwycs7jVNNwook2P~LVIZLlUmKnoBlaPn5xlU1boSGB3tYjvWECG2xJ68CoI2jf3VxDUP4vjBVP9LMpPTzBRNsfDwngdOUoxhrmASOkCPp1T5tKmO~bqPMLXHxjDJv~mAZkydnnrD6r0g4SbYdMx1tjwCKQW932Y97PxQX8o-62MBB7wTNiwuAmWzVlSQxw3~Tha5Adurt~4FtAT8uDmg5eVM-gkf084kliOzQP6KhSlGJf2lOFohR7LwiA3URWjjcSvFBxExge7dsYPKLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/e273/9d93/511a38406e5a327ab1301a519ed45cdb?Expires=1697414400&Signature=Z0wI0upZ4U-Au0XvFYek3YZLslkFd90RGVhNgYXDkm9G7ZuLsEckqmIqfL3NtUepOGgXgiEQdNkmoOOzsAybI1QgIF6Yi3bqmqhW1x0labBnJuVzEOK~rVdTBN6mCPGiy6gKLvH2aSTV6JQSqxxk1dITgWcIynHyq86GTKxuc7aMaO68noj36qyT6IQCZmi~qymsEsgwLRbAiZh~6wsZhIyNCxnPnb~7Sm7RPDihudD0oFLQUZZadOL5W~Rqc63ZHZvwbCseM5Km-yPqquzV8e07U0p5F4OmoEhrkURmQGL3Gvrtcoqbh1bXGilUjZBACkkG-1OpX-xmeqB74Dht4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/e7f0/8b71/e4ea9326471d43a472f6985cf5666b82?Expires=1697414400&Signature=p0vL2GJXjnsDFpydhNTnCuck13~ppskBiYMXq1wn3DLMh4f2GB6c~cj01Cp2ZYGjU8dhXGiVaFRZkw4HMZz-6JTHd5Oj9V2jnWqew0-CyWuzeK5-fdAALV79hVOKfV1W35kVfHDRVymoOp0P-GSQRP4BXxdKVIRbqC-IBX9kiT-CI6speovDkUF-DsyBnm8o2fcHGlq8jx-353RSI4OtXaaQmqNeF362texuniIMIURhjQcoq15eOVP5vmdXBk2Misry7LigVqKsO3Y-3iQ2gIg1Pq78Vbo97V8qBTUTEz0mmI91Rhgt-YpMtfOLHM2IIG9XxOl4F-I6lBStFK860Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/990e/aee6/ee7af806b1d5cf442a1599ed28aaedaf?Expires=1697414400&Signature=mgeB5RWJhRTpzFDVg2fqsY751e1ZoKEk52OoMHn44UGJ3pXABsTaWMaVgq5RTV0n~JDpDBREnEPOtJaqsWjIzDQ80jchuBuxCSstYeevdM3VPA6XW2kNfhx4qoEe0nwVrFOSism1nC5fHvgVugsq3J1io59Z-RGawyY4fxMq04aowvJqoimIAMyzZeARtjcQk-HLjyayGPwOXTrvBbSJ3DYscc3vYmt0FqsZuGRqeqvOZkRSMAgSbF7EdDVryvu2nqvpbTgzxJbgvh2iObP50LUsRFw~e4AWuuMtaRUn~dTFCJ20ZxMCgQKkKJhfte2QvDXe2m0KfyUa3usLL2OaDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    ]
}

